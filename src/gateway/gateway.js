import { ipcRenderer } from "electron"
import { debounce, Notify, Dialog, Loading, LocalStorage } from "quasar"
import { i18n, changeLanguage } from "src/plugins/i18n"

export class Gateway {

    constructor(app, router) {

        this.app = app
        this.router = router

        let language = LocalStorage.has("language") ? LocalStorage.get.item("language") : "en-us"
        this.setLanguage(language)

        let theme = LocalStorage.has("theme") ? LocalStorage.get.item("theme") : "light"
        this.app.store.commit("gateway/set_app_data", {
            config: {
                appearance: {
                    theme
                }
            }
        });
        this.app.store.watch( state => state.gateway.app.config.appearance.theme, (theme) => {
            LocalStorage.set("theme", theme)
        })

        let numBlocks = null
        this.app.store.watch( state => state.gateway.pool.blocks, (blocks) => {
            if(numBlocks != null && blocks.length != numBlocks) {
                const block = blocks[0]
                const effort = Math.round(100 * block.hashes / block.diff)
                Notify.create({
                    type: "positive",
                    timeout: 2000,
                    message: `Block found at height ${block.height} with ${effort}% effort`
                })
            }
            numBlocks = blocks.length
        })

        this.closeDialog = false
        this.minimizeDialog = false

        this.app.store.commit("gateway/set_app_data", {
            status: {
                code: 1 // Connecting to backend
            }
        });

        ipcRenderer.on("event", (event, data) => {
            this.receive(data)
        })

        ipcRenderer.on("confirmClose", () => {
            this.confirmClose("Are you sure you want to exit?")
        });

        ipcRenderer.on("confirmMinimizeTray", () => {
            this.confirmMinimizeTray()
        });

        this.inactiveTimeout = null
        let applyInactiveTimeout = (timeout) => {
            this.resetInactiveTimeoutFn = debounce(() => {
                if(this.inactiveTimeout !== null) {
                    clearTimeout(this.inactiveTimeout)
                }
                this.inactiveTimeout = setTimeout(() => {
                    if(this.app.store.state.gateway.wallet.status.code === 0 && this.app.store.getters["gateway/isAbleToSend"]) {
                        this.send("wallet", "close_wallet")
                        this.receive({ event: "return_to_wallet_select", data: {}})
                        Dialog.create({
                            title: "Timeout",
                            message: "You have been logged out due to inactivity.",
                            ok: {
                                label: "OK"
                            }
                        }).catch(() => {
                            this.closeDialog = false
                        })

                    } else {
                        this.resetInactiveTimeoutFn()
                    }
                }, timeout)
            }, 300)
        }
        applyInactiveTimeout(this.app.store.state.gateway.app.config.preference.timeout)
        this.app.store.watch( state => state.gateway.app.config.preference.timeout, (timeout) => {
            applyInactiveTimeout(timeout)
        })
        let events = ["mousemove", "touchmove", "keypress"]
        for(let i in events) {
            window.addEventListener(events[i], () => {
                if(typeof this.resetInactiveTimeoutFn === "function") {
                    this.resetInactiveTimeoutFn()
                }
            })
        }

    }

    setAutostartSettings(enabled) {
        ipcRenderer.send("autostartSettings", enabled)
    }

    confirmClose(msg, restart = false) {
        if(this.closeDialog) {
            return
        }
        this.closeDialog = true
        Dialog.create({
            title: restart ? "Restart" : "Exit",
            message: msg,
            ok: {
                label: restart ? "RESTART" : "EXIT",
            },
            cancel: {
                flat: true,
                label: "CANCEL",
                color: this.app.store.state.gateway.app.config.appearance.theme=="dark"?"white":"dark"
            }
        }).then(() => {
            this.closeDialog = false
            Loading.hide()
            this.router.replace({ path: "/quit" })
            ipcRenderer.send("confirmClose", restart)
        }).catch(() => {
            this.closeDialog = false
        })

    }

    confirmMinimizeTray() {
        if(this.minimizeDialog) {
            return
        }
        this.minimizeDialog = true
        Dialog.create({
            title: "Minimize to tray?",
            message: "You can change your preference in the setting menu at any time",
            ok: {
                label: "YES"
            },
            cancel: {
                flat: true,
                label: "NO",
                color: this.app.store.state.gateway.app.config.appearance.theme=="dark"?"white":"dark"
            }
        }).then(() => {
            this.minimizeDialog = false
            Loading.hide()
            ipcRenderer.send("confirmMinimizeTray", true)
        }).catch(() => {
            this.minimizeDialog = false
            ipcRenderer.send("confirmMinimizeTray", false)
        })

    }

    send(module, method, data={}) {
        let message = {
            module,
            method,
            data
        }
        ipcRenderer.send("event", message)
    }

    receive(message) {

        if (typeof message !== "object" ||
            !message.hasOwnProperty("event") ||
            !message.hasOwnProperty("data"))
            return

        switch (message.event) {

            case "initialize":
                this.app.store.commit("gateway/set_app_data", {
                    status: {
                        code: 2 // Loading config
                    }
                })
                break
            case "set_language":
                const { lang } = message.data
                this.setLanguage(lang)
                break

            case "set_app_data":
                this.app.store.commit("gateway/set_app_data", message.data)
                break

            case "set_daemon_data":
                this.app.store.commit("gateway/set_daemon_data", message.data)
                break

            case "set_pool_data":
                this.app.store.commit("gateway/set_pool_data", message.data)
                break

            case "set_wallet_data":
            case "set_wallet_error":
                this.app.store.commit("gateway/set_wallet_data", message.data)
                break

            case "set_tx_status":
                this.app.store.commit("gateway/set_tx_status", message.data)
                break


            case "wallet_list":
                this.app.store.commit("gateway/set_wallet_list", message.data)
                break

            case "settings_changed_reboot":
                this.confirmClose("Changes require restart. Would you like to restart now?", true)
                break

            case "show_notification":
                let notification = {
                    type: "positive",
                    timeout: 1000,
                    message: ""
                }
                Notify.create(Object.assign(notification, message.data))
                break

            case "set_prove_transaction_status": {
                        this.app.store.commit("gateway/set_prove_transaction_status", message.data)
                        break
                        }
            case "set_check_transaction_status": {
                        this.app.store.commit("gateway/set_check_transaction_status", message.data)
                        break
                        }

            case "return_to_wallet_select":
                this.router.replace({ path: "/wallet-select" })
                setTimeout(() => {
                    // short delay to prevent wallet data reaching the
                    // websocket moments after we close and reset data
                    this.app.store.dispatch("gateway/resetWalletData")
                    this.app.store.dispatch("gateway/resetMarketData")
                }, 250);
                break

            case "set_market_data":
              this.app.store.commit("gateway/set_market_data", message.data)
            break

        }
    }
    setLanguage (lang) {
        changeLanguage(lang).then(() => {
            LocalStorage.set("language", lang)
        }).catch(() => {
            Notify.create({
                type: "negative",
                timeout: 2000,
                message: i18n.t("notification.errors.failedToSetLanguage", { lang })
            })
        })
    }
}
