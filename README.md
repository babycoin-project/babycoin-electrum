
# BabyCoin Electron Wallet

  * Repo to latest version of babycoin-electrum, the BabyCoin electrom wallet.

#### Pre-requisites

- Download latest daemon [babycoind](https://github.com/babycoin-project/babycoin/releases/latest)

#### Commands
```
nvm use 13
npm install -g quasar-cli
git clone https://github.com/synthaze/babycoin-electrum
cd babycoin-electrum
cp path_to_babycoin_binaries/babycoind bin/
cp path_to_babycoin_binaries/babycoin-wallet-rpc bin/
npm install
```

For dev:
```
npm run dev
```

For building:

**Note:** This will only build the binaries for the system you run the command on. Running this command on `linux` will only make `linux` binaries, no `mac` or `windows` binaries.
```
npm run build
```

### Credits

Evolution https://github.com/evolution-project/evolution-electron-wallet

ArqTras https://github.com/arqma/arqma-electron-wallet

mosu-forge https://github.com/ryo-currency/ryo-wallet

Mikunj https://github.com/loki-project/loki-electron-gui-wallet
