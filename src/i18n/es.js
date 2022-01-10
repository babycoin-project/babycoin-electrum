export default {
    buttons: {
        // All button text is uppercased in the gui
        advanced: "ADVANCED",
        addressBook: "DIRECTORIO",
        all: "TODO",
        back: "ATRÁS",
        browse: "EXAMINAR",
        cancel: "CANCELAR",
        change: "MODIFICAR",
        check: "CHECK",
        clear: "CLEAR",
        close: "CERRAR",
        contacts: "CONTACTOS",
        copyAddress: "COPIAR DIRECCIÓN",
        copySignature: "COPY SIGNATURE",
        createWallet: "CREAR MONEDERO",
        delete: "ELIMINAR",
        edit: "EDITAR",
        export: "EXPORTAR",
        generate: "GENERATE",
        import: "IMPORTAR",
        importWallet: "IMPORTAR MONEDERO | IMPORTAR MONEDEROS",
        next: "SIGUIENTE",
        openWallet: "ABRIR MONEDERO",
        receive: "RECIBIR",
        registerServiceNode: "REGISTRAR NODO DE SERVICIO",
        rescan: "VOLVER A EXAMINAR",
        restoreWallet: "RESTAURAR MONEDERO",
        save: "GUARDAR",
        saveTxNotes: "GUARDAR NOTAS DE LA TRANSACCIÓN",
        selectLocation: "SELECCIONAR UBICACIÓN",
        selectWalletFile: "SELECCIONAR ARCHIVO DEL MONEDERO",
        send: "ENVIAR",
        sendCoins: "ENVIAR MONEDAS",
        serviceNode: "NODO DE SERVICIO",
        settings: "CONFIGURACIÓN",
        showQRCode: "MOSTRAR CÓDIGO QR",
        showTxDetails: "MOSTRAR DETALLES DE LA TRANSACCIÓN",
        stake: "RETENER PARTICIPACIÓN",
        sweepAll: "TRANSFERIR/BARRER TODO",
        unlock: "DESBLOQUEAR",
        txHistory: "HISTORIA DE TX",
        viewOnExplorer: "VER EN EL EXPLORADOR",
        wallet: "BILLETERA"
    },
    dialog: {
        // Generic buttons
        buttons: {
            ok: "ACEPTAR",
            cancel: "CANCELAR",
            open: "ABRIR"
        },

        // Dialogs
        banPeer: {
            title: "Vetar pares",
            peerDetailsTitle: "Detalles del par",
            message: "Introduzca el periodo de veto del par en segundos.\nPor defecto 3600 = 1 hora.",
            ok: "Vetar par"
        },
        copyAddress: {
            title: "Copiar dirección",
            message: "Hay un id de pago asociado a esta dirección.\nAsegúrese de copiar también el id de pago por separado."
        },
        copyPrivateKeys: {
            // Copy {seedWords/viewKey/spendKey}
            title: "Copiar {type}",
            message: "Tenga cuidado si comparte sus claves privadas ya que estas permiten controlar sus fondos.",
            seedWords: "Palabras Semilla",
            viewKey: "Clave de Visualización",
            spendKey: "Clave de Gasto"
        },
        deleteWallet: {
            title: "Eliminar monedero",
            message: "¿Está absolutamente seguro de querer eliminar su monedero?\nAsegúrese de tener una copia de seguridad de sus claves privadas antes de proceder.\n¡ESTE PROCESO NO ES REVERSIBLE!",
            ok: "ELIMINAR"
        },
        exit: {
            title: "Salir",
            message: "¿Está seguro de que desea salir?",
            ok: "SALIR"
        },
        keyImages: {
            title: "{type} imágenes de la clave",
            message: "¿Desea {type} las imágenes de la clave?",
            export: "Exportar",
            import: "Importar"
        },
        noPassword: {
            title: "Sin contraseña",
            message: "¿Está seguro de que quiere crear un monedero sin contraseña?",
            ok: "SÍ"
        },
        password: {
            title: "Contraseña",
            message: "Introduzca la contraseña del monedero para continuar."
        },
        registerServiceNode: {
            title: "Registrar nodo de servicio",
            message: "¿Desea registrar el nodo de servicio?",
            ok: "REGISTRAR"
        },
        rescan: {
            title: "Volver a examinar el monedero",
            message: "Advertencia: Cierta información de las transacciones\nanteriores, como la dirección del destinatario, se perderá.",
            ok: "VOLVER A EXAMINAR"
        },
        restart: {
            title: "Reiniciar",
            message: "Los cambios requieren reiniciar la aplicación ¿Desea reiniciar ahora?",
            ok: "REINICIAR"
        },
        showPrivateKeys: {
            title: "Mostrar claves privadas",
            message: "¿Desea ver sus claves privadas?",
            ok: "MOSTRAR"
        },
        stake: {
            title: "RETENER PARTICIPACIÓN",
            message: "¿Desea participar reteniendo la cantidad que ha indicado?",
            ok: "RETENER"
        },
        sweepAll: {
            title: "Transferir/Barrer todo",
            message: "¿Está seguro de que quiere transferir/barrer todos sus fondos?",
            ok: "TRANSFERIR/BARRER TODO"
        },
        sweepAllWarning: {
            title: "Sweep all warning",
            message: "You are about to combine all of your unspent funds by sending a transaction to yourself, your wallet may show a balance of 0 temporarily, after 18 blocks your funds will unlock and you may stake normally.",
            ok: "CONTINUE"
        },
        switchWallet: {
            title: "Cambiar de monedero",
            closeMessage: "¿Confirma que desea cerrar el monedero actual?",
            restartMessage: "El monedero se está sincronizando. \nSi desea cambiar de monedero, tendrá que reiniciar la aplicación. \nEl proceso de sincronización se perderá y será necesario volver a examinar la cadena de bloques."
        },
        transactionDetails: {
            title: "Detalles de la transacción",
            ok: "CERRAR"
        },
        transfer: {
            title: "Transferir",
            message: "¿Desea enviar la transacción?",
            ok: "ENVIAR"
        },
        unlockConfirm: {
            title: "Confirmar liberación",
            ok: "LIBERAR"
        },
        unlockServiceNode: {
            title: "Liberar nodo de servicio",
            confirmTitle: "Confirmar liberación",
            message: "¿Desea liberar el nodo de servicio?",
            ok: "LIBERAR"
        },
        unlockServiceNodeWarning: {
            title: "Unlock service node warning",
            message: "Unlocking a partial stake in a node will also unstake for any other participants, if staking in a shared node its best to let the operator and other participants know you are unstaking.",
            ok: "CONTINUE"
        }
    },
    fieldLabels: {
        // Field labels are also all uppercased
        address: "DIRECCIÓN",
        amount: "CANTIDAD",
        confirmPassword: "CONFIRMAR CONTRASEÑA",
        daemonLogLevel: "NIVEL LOG PARA EL SERVICIO",
        daemonP2pPort: "PUERTO P2P SERVICIO",
        daemonZMQPort: "PUERTO ZMQ SERVICIO",
        dataStoragePath: "RUTA DE ALMACENAMIENTO DE DATOS",
        filter: "FILTER",
        filterTransactionType: "FILTRAR POR TIPO DE TRANSACCIÓN",
        internalWalletPort: "PUERTO INTERNO MONEDERO",
        keyImages: {
            exportDirectory: "DIRECTORIO AL QUE EXPORTAR LA IMAGEN DE LA CLAVE",
            importFile: "ARCHIVO DE IMPORTACIÓN DE LA IMAGEN DE LA CLAVE"
        },
        limitDownloadRate: "LÍMITE VELOCIDAD DE DESCARGA",
        limitUploadRate: "LÍMITE VELOCIDAD DE SUBIDA",
        localDaemonIP: "IP SERVICIO LOCAL",
        localDaemonPort: "PUERTO SERVICIO LOCAL",
        maxIncomingPeers: "NÚM. MÁX. PARES ENTRANTES",
        maxOutgoingPeers: "NÚM. MÁX. PARES SALIENTES",
        message: "MESSAGE",
        mnemonicSeed: "SEMILLA MNEMÓNICA",
        name: "NOMBRE",
        newWalletName: "NUEVO NOMBRE PARA EL MONEDERO",
        notes: "NOTAS",
        optional: "OPCIONAL",
        password: "CONTRASEÑA",
        paymentId: "ID DE PAGO",
        priority: "PRIORIDAD",
        remoteNodeHost: "HOST NODO REMOTO",
        remoteNodePort: "PUERTO NODO REMOTO",
        restoreFromBlockHeight: "RESTAURAR DESDE EL BLOQUE NÚMERO",
        restoreFromDate: "RESTAURAR DESDE EL DÍA",
        seedLanguage: "IDIOMA SEMILLA",
        serviceNodeCommand: "ORDEN PARA REGISTRAR EL NODO DE SERVICIO",
        serviceNodeKey: "CLAVE NODO DE SERVICIO",
        signature: "SIGNATURE",
        transactionId: "TRANSACTION ID",
        walletFile: "ARCHIVO MONEDERO",
        walletLogLevel: "NIVEL LOG MONEDERO",
        walletName: "NOMBRE MONEDERO",
        walletRPCPort: "PUERTO RPC MONEDERO",
        walletStoragePath: "RUTA DE ALMACENAMIENTO DEL MONEDERO",
        protocol: "PROTOCOLO",
        hostname: "HOSTNAME",
        endpoint: "ENDPOINT",
        port: "PUERTO",

        // These are specific labels which do not get uppercased
        confirmNewPassword: "Confirme la nueva contraseña",
        newPassword: "Contraseña nueva",
        oldPassword: "Contraseña antigua",
        rescanFullBlockchain: "Volver a examinar la cadena de bloques entera",
        rescanSpentOutputs: "Volver a examinar las salidas gastadas",
        transactionNotes: "Notas de la Transacción",
        chooseNetwork: "Seleccione una Red",
        network: "Red"
    },
    footer: {
        ready: "LISTO",
        scanning: "EXAMINANDO",
        status: "Estado",
        syncing: "SINCRONIZANDO",
        remote: "Remoto",
        wallet: "Monedero"
    },
    menuItems: {
        about: "Acerca de",
        changePassword: "Modificar Contraseña",
        copyAddress: "Copiar dirección",
        copyQR: "Copiar código QR",
        copySeedWords: "Copiar palabras semilla",
        copySpendKey: "Copiar clave de gasto",
        copyServiceNodeKey: "Copy service node key",
        copyTransactionId: "Copiar ID de la transacción",
        copyViewKey: "Copiar clave de visualización",
        createNewWallet: "Crear nuevo monedero",
        deleteWallet: "Eliminar monedero",
        exportWallet: "Billetera de exportación",
        exportTransactions: "Transacciones de exportación",
        exit: "Cerrar la interfaz del monedero evolution",
        importOldGUIWallet: "Importar monedero de una interfaz gráfica antigua",
        manageKeyImages: "Administrar Imágenes de Clave",
        openWallet: "Abrir monedero",
        rescanWallet: "Volver a examinar monedero",
        restoreWalletFile: "Restaurar monedero de un archivo",
        restoreWalletSeed: "Restaurar monedero mediante semilla",
        saveQR: "Guardar código QR en archivo",
        sendToThisAddress: "Enviar a esta dirección",
        settings: "Configuración",
        showDetails: "Mostrar detalles",
        showPrivateKeys: "Mostrar Claves Privadas",
        showQRCode: "Mostrar código QR",
        switchWallet: "Cambiar de monedero",
        viewOnExplorer: "Ver en el explorador"
    },
    notification: {
        positive: {
            addressCopied: "Dirección copiada al portapapeles",
            bannedPeer: "{host} vetado hasta {time}",
            copied: "{item} copiado/a al portapapeles",
            itemSaved: "{item} guardado/a en {filename}",
            keyImages: {
                exported: "Imágenes de clave exportadas a {filename}",
                imported: "Imágenes de clave importadas"
            },
            passwordUpdated: "Contraseña actualizada",
            qrCopied: "Código QR copiado al portapapeles",
            registerServiceNodeSuccess: "Nodo de servicio registrado correctamente",
            sendSuccess: "Transacción enviada correctamente",
            signatureCopied: "Signature copied to clipboard",
            stakeSuccess: "Participación retenida correctamente",
            transactionNotesSaved: "Notas de la transacción guardadas"
        },
        errors: {
            banningPeer: "Error al vetar el par",
            cannotAccessRemoteNode: "No ha sido posible acceder al nodo remoto. Tenga la amabilidad de probar con otro",
            changingPassword: "Error al cambiar la contraseña",
            copyWalletFail: "Error al copiar el monedero",
            copyingPrivateKeys: "Error al copiar las claves privadas",
            dataPathNotFound: "No se ha encontrado la ruta de almacenamiento",
            differentNetType: "El nodo remoto usa un tipo de red diferente",
            enterSeedWords: "Introduzca las palabras semilla",
            enterTransactionId: "Enter transaction ID",
            enterTransactionProof: "Enter transaction proof",
            enterWalletName: "Introduzca un nombre para el monedero",
            errorSavingItem: "Error al guardar {item}",
            failedServiceNodeUnlock: "La liberación del nodo de servicio ha fallado",
            failedToSetLanguage: "Fallo al cambiar de idioma: {lang}",
            failedWalletImport: "Fallo al importar el monedero",
            failedWalletOpen: "Fallo al abrir el monedero. Inténtelo de nuevo.",
            internalError: "Error interno",
            invalidAddress: "Dirección no válida",
            invalidAmount: "Cantidad no válida",
            invalidOldPassword: "Contraseña antigua incorrecta",
            invalidPassword: "Contraseña incorrecta",
            invalidPaymentId: "id de pago no válido",
            invalidPrivateViewKey: "Clave de visualización privada no válida",
            invalidPublicAddress: "Dirección pública no válida",
            invalidRestoreDate: "Fecha de restauración no válida",
            invalidRestoreHeight: "Altura de bloque no válida",
            invalidSeedLength: "Cantidad de palabras en la semilla incorrecta",
            invalidServiceNodeCommand: "Por favor, introduzca el comando para registrar el nodo de servicio",
            invalidServiceNodeKey: "Clave de nodo de servicio no válida",
            invalidWalletPath: "Ruta del monedero no válida",
            keyImages: {
                exporting: "Error exportando imágenes de clave",
                reading: "Error leyendo imágenes de clave",
                importing: "Error importando imágenes de clave"
            },
            negativeAmount: "La cantidad no puede ser negativa",
            newPasswordNoMatch: "Las contraseñas nuevas no coinciden",
            newPasswordSame: "La nueva contraseña debe ser diferente",
            notEnoughBalance: "No hay suficiente saldo libre",
            passwordNoMatch: "Las contraseñas no coinciden",
            remoteCannotBeReached: "No se puede conectar con el servicio remoto",
            selectWalletFile: "Select a wallet file",
            unknownError: "Ha ocurrido un error inesperado",
            walletAlreadyExists: "Ya existe un monedero con este nombre",
            walletPathNotFound: "Ruta no encontrada",
            zeroAmount: "La cantidad debe ser mayor que cero"
        },
        warnings: {
            noKeyImageExport: "No se han encontrado claves para exportar",
            usingLocalNode: "No se ha podido acceder al nodo remoto, volviendo al modo local",
            usingRemoteNode: "evolutiond no encontrado, utilizando nodo remoto"
        }
    },
    placeholders: {
        additionalNotes: "Notas adicionales",
        addressBookName: "Nombre asociado a esta dirección",
        filterTx: "Enter an ID, name, address or amount",
        hexCharacters: "{count} caracteres hexadecimales",
        mnemonicSeed: "Semilla mnemónica de 25 (o 24) palabras",
        pasteTransactionId: "Paste transaction ID",
        pasteTransactionProof: "Paste transaction proof",
        proveOptionalMessage: "Optional message against which the signature is signed",
        recipientWalletAddress: "Recipient's wallet address",
        selectAFile: "Seleccione un archivo por favor",
        transactionNotes: "Notas adicionales para agregar a la transacción",
        walletName: "Nombre para identificar su monedero",
        walletPassword: "Contraseña opcional para proteger su monedero",
        operations: "Acciones de billetera",
        walletOperations: "Abrir"
    },
    strings: {
        addAddressBookEntry: "Agregar registro a la libreta de direcciones",
        addressBookDetails: "Detalles de la libreta de direcciones",
        addressBookIsEmpty: "La libreta de direcciones está vacía",
        addresses: {
            myPrimaryAddress: "Mi dirección principal",
            myUnusedAddresses: "Mis direcciones no usadas",
            myUsedAddresses: "Mis direcciones usadas",
            primaryAddress: "Dirección principal",
            subAddress: "Dirección auxiliar",
            subAddressIndex: "Índice {index}"
        },
        advancedOptions: "Opciones avanzadas",
        bannedPeers: {
            title: "Pares vetados (los vetos se anularán si reinicia el monedero)",
            bannedUntil: "Vetado hasta {time}"
        },
        backupSeedWord: "¡Respalde sus palabras de origen en un lugar seguro! Esta es la única forma de acceder a sus fondos si cambia de dispositivo.",
        blockHeight: "Altura",
        confirmWords: "Confirma tus palabras de semilla mnemotécnicas",
        enter7words: "Ingrese las primeras siete palabras de su semilla mnemónica en el orden correcto:",
        usingEmptyPass: "¡Usar una contraseña vacía dejará su billetera sin cifrar en su sistema de archivos!",
        checkTransaction: {
            description: "Verify that funds were paid to an address by supplying the transaction ID, the recipient address, the message used for signing and the signature.\nFor a 'Spend Proof' you dont need to provide the recipient address.",
            infoTitles: {
                confirmations: "Confirmations",
                inPool: "In pool",
                validTransaction: "Valid transaction",
                received: "Received amount"
            },
            validTransaction: {
                no: "NO",
                yes: "YES"
            }
        },
        closing: "Cerrando",
        connectingToBackend: "Conectando con el servicio",
        contribution: "Contribution",
        daemon: {
            local: {
                title: "Solo Servicio Local",
                description: "Seguridad completa. Se descargará la cadena de bloques entera. No podrá operar hasta que finalice el proceso de sincronización."
            },
            localRemote: {
                title: "Servicio Local + Remoto",
                description: "Empiece a operar rápidamente gracias a esta opción predeterminada. Se descargará la cadena de bloques al completo pero se usará un nodo remoto mientras dure la descarga."
            },
            remote: {
                title: "Solo Servicio Remoto",
                description: "Menor seguridad. El monedero se conectará a un nodo remoto para realizar cualquier operación."
            }
        },
        destinationUnknown: "Destino Desconocido",
        editAddressBookEntry: "Modificar un registro de la libreta de direcciones",
        loading: "Cargando...",
        loadingSettings: "Cargando configuración",
        evolutionBalance: "Saldo",
        evolutionExchangeBalance: "Saldo",
        evolutionUnlockedBalance: "Saldo libre",
        evolutionUnlockedShort: "Libre",
        noTransactionsFound: "No se han encontrado transacciones",
        notes: "Notas",
        numberOfUnspentOutputs: "Número de salidas no gastadas",
        paymentID: "ID de pago",
        priorityOptions: {
            automatic: "Automática",
            slow: "Lenta",
            normal: "Normal",
            fast: "Rápida",
            fastest: "La más rápida"
        },
        peerList: "Lista de pares",
        proveTransactionDescription: "Generate a proof of your incoming/outgoing payment by supplying the transaction ID, the recipient address and an optional message.\nFor the case of outgoing payments, you can get a 'Spend Proof' that proves the authorship of a transaction. In this case, you don't need to specify the recipient address.",
        readingWalletList: "Leyendo el listado de monederos",
        recentIncomingTransactionsToAddress: "Transacciones recientes recibidas en esta dirección",
        recentTransactionsWithAddress: "Transacciones recientes con esta dirección",
        rescanModalDescription: "Escoja entre un examen completo o examinar solo las salidas gastadas.",
        saveSeedWarning: "¡Por favor, cópielas y guárdelas en un sitio seguro!",
        saveToAddressBook: "Guardar en la libreta de direcciones",
        seedWords: "Palabras semilla",
        selectLanguage: "Escoja un idioma",
        serviceNodeRegistrationDescription: "Introduzca la orden {registerCommand} generada por el servicio (evolutiond) que se está intentado registrar como Nodo de Servicio usando la instrucción \"{prepareCommand}\"",
        spendKey: "Clave de gasto",
        startingDaemon: "Iniciando servicio",
        startingWallet: "Iniciando monedero",
        switchToDateSelect: "Cambiar a selección por fecha",
        switchToHeightSelect: "Cambiar a selección por altura",
        transactionID: "ID de la transacción",
        transactionConfirmed: "confirmada",
        transactions: {
            amount: "Cantidad",
            description: "Transacción {type}",
            fee: "Comisión",
            paidBySender: "pagada por el remitente",
            received: "Recibida",
            sent: "Enviada",
            sentTo: "Transacción {type} enviada a",
            timestamp: "Fecha y hora",
            types: {
                all: "Todas",
                incoming: "Recibida",
                outgoing: "Emitida",
                pending: "Pendiente",
                pendingIncoming: "Recibida pendiente",
                pendingOutgoing: "Emitida pendiente",
                miner: "Minería",
                serviceNode: "Nodo de Servicio",
                governance: "Gobernanza",
                stake: "Retención participación",
                failed: "Fallida"
            }
        },
        unspentOutputs: "Salidas no gastadas",
        userNotUsedAddress: "No ha utilizado esta dirección",
        userUsedAddress: "Ha utilizado esta dirección",
        viewKey: "Clave de visualización",
        viewOnlyMode: "Este monedero solo permite visualizar operaciones. Por favor, abra uno completo para poder transferir fondos."
    },
    titles: {
        addressBook: "Libreta de direcciones",
        addressDetails: "Detalles de la dirección",
        advanced: {
            checkTransaction: "CHECK TRANSACTION",
            prove: "PROVE"
        },
        changePassword: "Modificar contraseña",
        configure: "Configurar",
        currentlyStakedNodes: "Currently staked nodes",
        privateKeys: "Claves privadas",
        rescanWallet: "Volver a examinar monedero",
        serviceNode: {
            registration: "REGISTRO",
            staking: "PARTICIPACIÓN"
        },
        settings: {
            title: "Configuración",
            tabs: {
                general: "General",
                language: "Idioma",
                peers: "Pares",
                exchange: "Intercambiar"
            }
        },
        transactionDetails: "Detalles de la transacción",
        transactions: "Transacciones",
        wallet: {
            createNew: "Crear un monedero nuevo",
            createdOrRestored: "Monedero creado/restaurado",
            importFromFile: "Importar monedero de un archivo",
            importFromLegacyGUI: "Importar monedero de una interfaz gráfica heredada",
            importFromOldGUI: "Importar monedero de una interfaz gráfica antigua",
            restoreFromSeed: "Restaurar monedero mediante semilla",
            restoreViewOnly: "Restaurar monedero de solo visualización"
        },
        welcome: "Bienvenido/a",
        yourWallets: "Sus Monederos"
    },
    headers: {
        address: "Dirección",
        amount: "Cantidad",
        confirmations: "Confirmaciones",
        double_spend_seen: "Doble gasto visto",
        fee: "Cuota",
        height: "Altura",
        note: "Nota",
        paymentid: "ID de pago",
        suggestedConfirmationsThreshold: "Umbral de confirmaciones sugerido",
        timestamp: "Sello de tiempo",
        txid: "TxID",
        type: "Tipo",
        unlockTime: "Tiempo de desbloqueo"
    }
}
