// Configuration for your app

module.exports = function (ctx) {
    return {
        // app plugins (/src/plugins)
        plugins: [
            "i18n",
            "axios",
            "vuelidate",
            "gateway",
            "timeago"
        ],
        css: [
            "app.styl",
            "~flag-icon-css/css/flag-icon.min.css"
        ],
        extras: [
            ctx.theme.mat ? "roboto-font" : null,
            "material-icons" // optional, you are not bound to it
            // "ionicons",
            // "mdi",
            // "fontawesome"
        ],
        supportIE: false,
        build: {
            scopeHoisting: true,
            vueRouterMode: "history",
            // vueCompiler: true,
            // gzip: true,
            // analyze: true,
            // extractCSS: false,
            sourceMap: true,
            extendWebpack(cfg) {
                cfg.module.rules.push({
                    test: /RyoCoreCpp\.js$/,
                    loader: "exports-loader"
                })
                cfg.module.rules.push({
                    test:  /RyoCoreCpp\.wasm$/,
                    type: "javascript/auto",
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash].[ext]",
                    }
                })
                /*
                cfg.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules|quasar)/
                })
                */
            }
        },
        devServer: {
            // https: true,
            // port: 8080,
            open: true // opens browser window automatically
        },
        // framework: "all" --- includes everything; for dev only!
        framework: {
            components: [
                "QLayout",
                "QLayoutHeader",
                "QLayoutFooter",
                "QLayoutDrawer",
                "QPageContainer",
                "QPage",
                "QToolbar",
                "QToolbarTitle",
                "QTooltip",
                "QField",
                "QInput",
                "QRadio",
                "QOptionGroup",
                "QBtn",
                "QBtnToggle",
                "QIcon",
                "QTabs",
                "QTab",
                "QRouteTab",
                "QBtnDropdown",
                "QPopover",
                "QModal",
                "QModalLayout",
                "QStep",
                "QStepper",
                "QStepperNavigation",
                "QSpinner",
                "QChip",
                "QList",
                "QListHeader",
                "QItem",
                "QItemMain",
                "QItemSeparator",
                "QItemSide",
                "QItemTile",
                "QSelect",
                "QToggle",
                "QPageSticky",
                "QCollapsible",
                "QCheckbox",
                "QInnerLoading",
                "QInfiniteScroll",
                "QDatetime",
                "QContextMenu",
                "QScrollArea",
                "QTable",
                "QTh",
                "QTr",
                "QTd",
                "QTableColumns",
                "QSlider"
            ],
            directives: [
                "Ripple",
                "CloseOverlay"
            ],
            // Quasar plugins
            plugins: [
                "Notify",
                "Loading",
                "LocalStorage",
                "Dialog"
            ]
            // iconSet: ctx.theme.mat ? "material-icons" : "ionicons"
            // i18n: "de" // Quasar language
        },
        // animations: "all" --- includes all animations
        animations: [],
        pwa: {
            // workboxPluginMode: "InjectManifest",
            // workboxOptions: {},
            manifest: {
                // name: "Quasar App",
                // short_name: "Quasar-PWA",
                // description: "Best PWA App in town!",
                display: "standalone",
                orientation: "portrait",
                background_color: "#ffffff",
                theme_color: "#1ba7fd",
                icons: [{
                    "src": "statics/icons/icon-128x128.png",
                    "sizes": "128x128",
                    "type": "image/png"
                },
                {
                    "src": "statics/icons/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "statics/icons/icon-256x256.png",
                    "sizes": "256x256",
                    "type": "image/png"
                },
                {
                    "src": "statics/icons/icon-384x384.png",
                    "sizes": "384x384",
                    "type": "image/png"
                },
                {
                    "src": "statics/icons/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }

                ]
            }
        },
        cordova: {
            // id: "org.cordova.quasar.app"
        },
        electron: {
           bundler: "builder", // or "packager"
           extendWebpack(cfg) {
               cfg.module.rules.push({
                   test: /RyoCoreCpp\.js$/,
                   loader: "exports-loader"
               })
               cfg.module.rules.push({
                   test:  /RyoCoreCpp\.wasm$/,
                   type: "javascript/auto",
                   loader: "file-loader",
                   options: {
                       name: "[name].[ext]",
                   }
               })
           },
            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: "",
                // appCategoryType: "",
                // osxSign: "",
                // protocol: "myapp://path",

                // Window only
                // win32metadata: { ... }

                extraResource: [
                    "bin"
                ]
            },
            builder: {
                // https://www.electron.build/configuration/configuration

                appId: "com.babycoin.electrum",
                productName: "BabyCoin Electron Wallet",
                copyright: "Copyright © 2018-2020 Arqma Project, 2018-2020 Ryo/Loki Currency Project",
                afterSign: "build/notarize.js",
                artifactName: "babycoin-electrum-${version}-${os}.${ext}",

                // directories: {
                //     buildResources: "src-electron/build"
                // },
                publish: "github",
                files: [
                    "!dev-app-update.yml"
                ],

                linux: {
                    target: ["AppImage", "deb"],
                    icon: "src-electron/icons/linux-512x512.png",
                    category: "Finance"
                },

                mac: {
                    target: ["default"],
                    icon: "src-electron/icons/icon.icns",
                    category: "public.app-category.finance",
                    // Notarizing: https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
                    hardenedRuntime: true,
                    gatekeeperAssess: false,
                    entitlements: "build/entitlements.mac.plist",
                    entitlementsInherit: "build/entitlements.mac.plist",
                    darkModeSupport: true,
                    type: "distribution"
                },

//                dmg: {
//                    background: "src-electron/build/arqma-dmg.tiff",
//                    sign: false
//                },

                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true

                },

                files: [
                    "!build/*.js",
                    "!.env"
                ],

                extraResources: [
                    "bin"
                ]
            }
        }
    }
}
