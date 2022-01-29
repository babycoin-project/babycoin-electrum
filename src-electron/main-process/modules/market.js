/**
 * babycoin-electrum
 * https://github.com/babycoin-project/babycoin-electrum
 *
 * market.js
 *
 **/

import child_process from "child_process"
const request = require("request-promise")
const queue = require("promise-queue")
const https = require("https")

export class Market {
    constructor (backend) {
        this.backend = backend
        this.heartbeat_slow = null
        this.id = 0

        this.agent = new https.Agent({ keepAlive: true, maxSockets: 1 })
        this.queue = new queue(1, Infinity)
        this.options = null
        this.endpoint = "/api/v1/get_markets_json.php?market=BABY/BTC"
    }

    start (options) {
        return new Promise((resolve, reject) => {
            this.options = options
            resolve()
        })
    }

    handle (data) {
        let params = data.data
        switch (data.method) {
        case "open_wallet":
            this.startHeartbeat()
            break
        case "close_wallet":
            clearInterval(this.heartbeat)
            clearInterval(this.heartbeat_slow)
            break
        default:
        }
    }

    startHeartbeat () {
        clearInterval(this.heartbeat_slow)
        this.heartbeat_slow = setInterval(() => {
            this.heartbeatSlowAction()
        }, 2 * 60 * 1000) // 2 minutes
        this.heartbeatSlowAction()
    }

    heartbeatSlowAction () {
        this.sendRPC({}, this.options.market.exchange)
            .then(response => {
                try {
                    let result = JSON.parse(response.result)
                    let data = []
                    for (let index in result.tickers) {
                        let ticker = result.tickers[index]
                        let key = ticker.market.name
                        let symbol = ticker.target // btc
                        let label = `${key} ${symbol}`
                        let price = +ticker.last
                        if (price === 0) continue
                        data.push({ key: label, label: label, symbol: symbol, value: price })
                    }
                    this.sendGateway("set_market_data", { info: { exchanges: data } })
                } catch (error) {}
            })
    }

    sendGateway (method, data) {
        this.backend.send(method, data)
    }

    sendRPC (params = {}, options = {}) {
        let id = this.id++
        const protocol = options.protocol || this.protocol
        const hostname = options.hostname || this.hostname
        const port = options.port || this.port
        const endpoint = options.endpoint || this.endpoint
        let requestOptions = {
            uri: `${protocol}${hostname}:${port}${endpoint}`,
            method: "GET",
            headers: {
                "Accept": "application/json"
            },
            agent: this.agent
        }
        if (Object.keys(params).length !== 0) {
            requestOptions.json.params = params
        }
        return this.queue.add(() => {
            return request(requestOptions)
                .then((response) => {
                    if (response.hasOwnProperty("error")) {
                        return {
                            params: params,
                            error: response.error
                        }
                    }
                    return {
                        params: params,
                        result: response
                    }
                }).catch(error => {
                    return {
                        params: params,
                        error: {
                            code: -1,
                            message: "Cannot connect to daemon-rpc",
                            cause: error.cause
                        }
                    }
                })
        })
    }

    quit () {
        clearInterval(this.heartbeat)
        clearInterval(this.heartbeat_slow)
        return new Promise((resolve, reject) => {
            resolve()
        })
    }
}
