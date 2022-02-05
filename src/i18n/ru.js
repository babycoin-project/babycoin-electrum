export default {
    buttons: {
        // All button text is uppercased in the gui
        advanced: "ПРОДВИНУТЫЕ",
        addressBook: "АДРЕСНАЯ КНИГА",
        all: "ВСЕ",
        back: "НАЗАД",
        browse: "ОБЗОР",
        cancel: "ОТМЕНА",
        change: "ИЗМЕНИТЬ",
        check: "ПРОВЕРИТЬ",
        clear: "ОЧИСТИТЬ",
        close: "ЗАКРЫТЬ",
        contacts: "КОНТАКТЫ",
        copyAddress: "КОПИРОВАТЬ АДРЕС",
        copySignature: "КОПИРОВАТЬ ПОДПИСЬ",
        createWallet: "СОЗДАТЬ КОШЕЛЕК",
        delete: "УДАЛИТЬ",
        edit: "РЕДАКТИРОВАТЬ",
        export: "ЭКСПОРТ",
        generate: "ГЕНЕРИРОВАТЬ",
        import: "ИМПОРТ",
        importWallet: "ИМПОРТИРОВАТЬ КОШЕЛЕК | ИМПОРТИРОВАТЬ КОШЕЛЬКИ",
        next: "ДАЛЕЕ",
        openWallet: "ОТКРЫТЬ КОШЕЛЕК",
        receive: "ПОЛУЧИТЬ",
        registerServiceNode: "ЗАРЕГИСТРИРОВАТЬ СЕРВИСНЫЙ УЗЕЛ",
        rescan: "ПЕРЕСКАНИРОВАТЬ",
        restoreWallet: "ВОССТАНОВИТЬ КОШЕЛЕК",
        save: "СОХРАНИТЬ",
        saveTxNotes: "СОХРАНИТЬ ЗАМЕТКИ ТРАНЗАКЦИИ",
        selectLocation: "ОБЗОР",
        selectWalletFile: "ВЫБРАТЬ ФАЙЛ КОШЕЛЬКА",
        send: "ОТПРАВИТЬ",
        sendCoins: "ОТПРАВИТЬ МОНЕТЫ"
        serviceNode: "СЕРВИСНЫЙ УЗЕЛ",
        settings: "НАСТРОЙКИ",
        showQRCode: "ПОКАЗАТЬ QR-КОД",
        showTxDetails: "ПОКАЗАТЬ ПОДРОБНОСТИ ТРАНЗАКЦИИ",
        stake: "СТЭЙКИНГ",
        sweepAll: "SWEEP ALL",
        txHistory: "ИСТОРИЯ",
        unlock: "РАЗБЛОКИРОВАТЬ",
        viewOnExplorer: "ПОКАЗАТЬ В ПРОВОДНИКЕ",
        wallet: "КОШЕЛЕК"
    },
    dialog: {
        // Generic buttons
        buttons: {
            ok: "ОК",
            cancel: "ОТМЕНИТЬ",
            open: "ОТКРЫТЬ"
        },

        // Dialogs
        banPeer: {
            title: "Блокировка однораногового узла (пира)",
            peerDetailsTitle: "Данные однорангового узла",
            message: "Введите время блокировки в секундах.\nПо умолчанию 3600 секунд = 1 час.",
            ok: "ЗАБЛОКИРОВАТЬ"
        },
        copyAddress: {
            title: "Копировать адрес",
            message: "Идентификатор транзации, связанный с адресом.\nId платежа необходимо скопировать отдельно."
        },
        copyPrivateKeys: {
            // Copy {seedWords/viewKey/spendKey}
            title: "Копировать {type}",
            message: "Передавайте ваши приватные ключи только надежным лицам, поскольку они предоставляют полный доступ к вашему кошельку.",
            seedWords: "Seed фраза",
            viewKey: "View ключ",
            spendKey: "Spend ключ"
        },
        deleteWallet: {
            title: "Удалить кошелек",
            message: "Вы точно хотите удалить Ваш кошелек?\nУбедитесь, что сохранили свои приватные ключи.\nПРОЦЕСС НЕОБРАТИМ!",
            ok: "УДАЛИТЬ"
        },
        exit: {
            title: "Выход",
            message: "Вы точно хотите выйти?",
            ok: "ВЫЙТИ"
        },
        keyImages: {
            title: "{type} ключевые образы",
            message: "Вы хотите {type} ключевые образы?",
            export: "экспортировать",
            import: "импортировать"
        },
        noPassword: {
            title: "Пароль не задан",
            message: "Вы точно хотите создать кошелек без пароля?",
            ok: "ДА"
        },
        password: {
            title: "Пароль",
            message: "Введите пароль для получения доступа к кошельку."
        },
        registerServiceNode: {
            title: "Зарегистрировать сервисный узел",
            message: "Вы точно хотите зарегистрировать сервисный узел?",
            ok: "ЗАРЕГИСТРИРОВАТЬ"
        },
        rescan: {
            title: "Заново синхронизировать кошелек",
            message: "Предупреждение: некоторая информация относительно предыдущих транзакций,\nнапример, адрес получателя, будет утеряна.",
            ok: "СИНХРОНИЗИРОВАТЬ"
        },
        restart: {
            title: "Перезапустить",
            message: "Для сохранения изменений требуется перезагрузка. Перезагрузить сейчас?",
            ok: "ПЕРЕЗАГРУЗИТЬ"
        },
        showPrivateKeys: {
            title: "Показать приватные ключи",
            message: "Вы хотите просмотреть приватные ключи?",
            ok: "ПОКАЗАТЬ"
        },
        stake: {
            title: "Стэйкинг",
            message: "Вы хотите стэйкать монеты?",
            ok: "СТЭЙКАТЬ"
        },
        sweepAll: {
            title: "Sweep all",
            message: "Do you want to sweep all? Если увидете это сообщение, напишите в discord, что это за функция :)",
            ok: "SWEEP ALL"
        },
        sweepAllWarning: {
            title: "Sweep all warning", 
            message: "You are about to combine all of your unspent funds by sending a transaction to yourself, your wallet may show a balance of 0 temporarily, after 18 blocks your funds will unlock and you may stake normally.",
            ok: "ПРОДОЛЖИТЬ" 
        },
        switchWallet: {
            title: "Сменить кошелек",
            closeMessage: "Вы уверены, что хотите переключить текущий кошелек?",
            restartMessage: "RPC кошелька в настоящее время синхронизируется. \nДля смены кошелька необходимо перезагрузить приложение. \nПрогресс синхронизации будет утерян."
        },
        transactionDetails: {
            title: "Подробности транзации",
            ok: "ЗАКРЫТЬ"
        },
        transfer: {
            title: "Подтверждение транзации",
            message: "Выполнить транзацию? \nЕсли у кошелька нет пароля, нажмите ОТПРАВИТЬ",
            ok: "ОТПРАВИТЬ"
        },
        unlockConfirm: {
            title: "Подтверждение разблокировки",
            ok: "РАЗБЛОКИРОВАТЬ"
        },
        unlockServiceNode: {
            title: "Разблокировать сервисный узел",
            confirmTitle: "Подтвердить разблокировку",
            message: "Вы хотите разблокировать сервисный узел?",
            ok: "РАЗБЛОКИРОВАТЬ"
        },
        unlockServiceNodeWarning: { 
            title: "Предупрждение о разблокировке сервисного узла",
            message: "Unlocking a partial stake in a node will also unstake for any other participants, if staking in a shared node its best to let the operator and other participants know you are unstaking.",
            ok: "ПРОДОЛЖИТЬ"
        }
    },
    fieldLabels: {
        // Field labels are also all uppercased
        address: "АДРЕС",
        amount: "СУММА",
        confirmPassword: "ПОДТВЕРДИТЬ ПАРОЛЬ",
        daemonLogLevel: "УРОВЕНЬ ЛОГИРОВАНИЯ ДЕМОНА",
        daemonP2pPort: "P2P ПОРТ ДЕМОНА",
        daemonZMQPort: "ZMQ ПОРТ ДЕМОНА",
        dataStoragePath: "МЕСТО ХРАНЕНИЯ ДАННЫХ",
        filter: "ФИЛЬТРАЦИЯ",
        filterTransactionType: "ФИЛЬТРАЦИЯ ПО ТИПУ ТРАНЗАКЦИИ",
        internalWalletPort: "ВНУТРЕННИЙ ПОРТ КОШЕЛЬКА",
        keyImages: {
            exportDirectory: "ПАПКА ЭКСПОРТА КЛЮЧЕВЫХ ОБРАЗОВ/",
            importFile: "ПАПКА ИМПОРТА КЛЮЧЕВЫХ ОБРАЗОВ"
        },
        limitDownloadRate: "ОГРАНИЧЕНИЕ СКОРОСТИ ЗАГРУЗКИ",
        limitUploadRate: "ОГРАНИЧЕНИЕ СКОРОСТИ ОТПРАВКИ",
        localDaemonIP: "IP-АДРЕС ЛОКАЛЬНОГО ДЕМОНА",
        localDaemonPort: "ПОРТ ЛОКАЛЬНОГО ДЕМОНА (RPC)",
        maxIncomingPeers: "МАКСИМАЛЬНОЕ КОЛИЧЕСТВО ВХОДЯЩИХ ОДНОРАНГОВЫХ УЗЛОВ (ПИРОВ)",
        maxOutgoingPeers: "МАКСИМАЛЬНОЕ КОЛИЧЕСТВО ИСХОДЯЩИХ ОДНОРАНГОВЫХ УЗЛОВ (ПИРОВ)",
        message: "СООБЩЕНИЕ",
        mnemonicSeed: "МНЕМОНИЧЕСКАЯ SEED-ФРАЗА",
        name: "НАЗВАНИЕ",
        newWalletName: "НАЗВАНИЕ НОВОГО КОШЕЛЬКА",
        notes: "ЗАМЕТКИ",
        optional: "НЕОБЯЗАТЕЛЬНО",
        password: "ПАРОЛЬ",
        paymentId: "ID ПЛАТЕЖА",
        priority: "ПРИОРИТЕТ",
        remoteNodeHost: "ХОСТ УДАЛЕННОГО УЗЛА",
        remoteNodePort: "ПОРТ УДАЛЕННОГО УЗЛА",
        restoreFromBlockHeight: "ВОССТАНОВИТЬ НАЧИНАЯ С ВЫСОТЫ БЛОКА",
        restoreFromDate: "ВОССТАНОВИТЬ НАЧИНАЯ С ДАТЫ",
        seedLanguage: "ЯЗЫК SEED-ФРАЗЫ",
        serviceNodeCommand: "КОМАНДА СЕРВИСНОГО УЗЛА",
        serviceNodeKey: "КЛЮЧ СЕРВИСНОГО УЗЛА",
        signature: "ПОДПИСЬ (СИГНАТУРА)",
        transactionId: "ID ТРАНЗАКЦИИ",
        walletFile: "ФАЙЛ КОШЕЛЬКА",
        walletLogLevel: "УРОВЕНЬ ЛОГИРОВАНИЯ КОШЕЛЬКА",
        walletName: "НАЗВАНИЕ КОШЕЛЬКА",
        walletRPCPort: "RPC ПОРТ КОШЕЛЬКА",
        walletStoragePath: "ПУТЬ ХРАНЕНИЯ ДАННЫХ КОШЕЛЬКА",
        protocol: "ПРОТОКОЛ",
        hostname: "ИМЯ ХОСТА",
        endpoint: "КОНЕЧНАЯ ТОЧКА",
        port: "ПОРТ",

        // These are specific labels which do not get uppercased
        confirmNewPassword: "Подтвердите новый пароль",
        newPassword: "Новый пароль",
        oldPassword: "Старый пароль",
        rescanFullBlockchain: "Заново полностью синхронизировать сеть",
        rescanSpentOutputs: "Заново синхронизировать потраченные выходы",
        transactionNotes: "Заметки транзакции",
        chooseNetwork: "Выберите сеть",
        network: "Сеть"
    },
    footer: {
        ready: "СИНХРОНИЗИРОВАН",
        scanning: "СКАНИРОВАНИЕ",
        status: "Статус",
        syncing: "СИНХРОНИЗАЦИЯ",
        remote: "Удаленная нода",
        wallet: "Кошелек"
    },
    menuItems: {
        about: "Информация",
        changePassword: "Изменить пароль",
        copyAddress: "Копировать адрес",
        copyQR: "Копировать QR-код",
        copySeedWords: "Копировать seed-фразу",
        copySpendKey: "Копировать spend ключ",
        copyServiceNodeKey: "Копировать ключ сервисного узла",
        copyTransactionId: "Копировать ID транзакции",
        copyViewKey: "Копировать view ключ",
        createNewWallet: "Создать новый кошелек",
        deleteWallet: "Удалить кошелек",
        exportTransactions: "Экспортировать транзакции",
        exportWallet: "Экспортировать кошелек",
        exit: "Выйти из BabyCoin GUI Кошелька",
        importOldGUIWallet: "Импортировать кошельки из старого GUI",
        manageKeyImages: "Управление ключевыми образами",
        openWallet: "Открыть кошелек",
        rescanWallet: "Заново синхронизировать кошелек",
        restoreWalletFile: "Восстановить кошелек из файла",
        restoreWalletSeed: "Восстановить кошелек из seed фразы",
        saveQR: "Сохранить QR-код в файл",
        sendToThisAddress: "Отправить на этот адрес",
        settings: "Настройки",
        showDetails: "Показать подробности",
        showPrivateKeys: "Показать приватные ключи",
        showQRCode: "Показать QR-код",
        switchWallet: "Сменить кошелек",
        viewOnExplorer: "Отобразить в проводнике"
    },
    notification: {
        positive: {
            addressCopied: "Адрес скопирован в буфер обмена",
            bannedPeer: "Забанен {host} до {time}",
            copied: "{item} скопирован(а) в буфер обмена",
            itemSaved: "{item} сохранен(а) в {filename}",
            keyImages: {
                exported: "Ключевые образы экспортированы в {filename}",
                imported: "Ключевые образы импортированы"
            },
            passwordUpdated: "Пароль обновлен",
            qrCopied: "QR-код скопирован в буфер обмена",
            registerServiceNodeSuccess: "Сервисный узел успешно зарегистрирован",
            sendSuccess: "Транзакция успешно отправлена",
            signatureCopied: "Подпись скопирована в буфер обмена",
            stakeSuccess: "Стэйкинг успешно активирован",
            transactionNotesSaved: "Заметки транзакции сохранены"
        },
        errors: {
            banningPeer: "Не удалось заблокировать участника",
            cannotAccessRemoteNode: "Не удалось получить доступ к удаленному узлу, пожалуйста, используете иной узел",
            changingPassword: "Не удалось измененить пароль",
            copyWalletFail: "Не удалось скопировать кошелек",
            copyingPrivateKeys: "Не удалось скопировать приватные ключи",
            dataPathNotFound: "Путь хранения данных не найден",
            differentNetType: "Удаленный узел использует иной тип сети (nettype)",
            enterSeedWords: "Введите seed-фразу",
            enterTransactionId: "Введите ID транзакции",
            enterTransactionProof: "Введите доказательство транзакции",
            enterWalletName: "Введите название кошелька",
            errorSavingItem: "Не удалось сохраненить {item}",
            failedServiceNodeUnlock: "Не удалось разблокировать сервисный узел",
            failedToSetLanguage: "Не удалось изменить язык на {lang}",
            failedWalletImport: "Не удалось импортировать кошелек",
            failedWalletOpen: "Не удалось открыть кошелек. Пожалуйста, попробуйте снова.",
            internalError: "Внутренняя ошибка",
            invalidAddress: "Неверный адрес",
            invalidAmount: "Неверная сумма",
            invalidOldPassword: "Неправильный старый пароль",
            invalidPassword: "Неправильный пароль",
            invalidPaymentId: "Id платежа неверен",
            invalidPrivateViewKey: "Неверный ключ просмотра",
            invalidPublicAddress: "Неправильный публичный адрес",
            invalidRestoreDate: "Неверно восстановленные данные",
            invalidRestoreHeight: "Неверно восстановленные по высоте блока данные",
            invalidSeedLength: "Неверная длина seed-фразы",
            invalidServiceNodeCommand: "Пожалуйста, введите команду регистрации сервисного узла",
            invalidServiceNodeKey: "Ключ сервисного узла неверен",
            invalidWalletPath: "Неправильный путь до кошелька",
            keyImages: {
                exporting: "Не удалось экспортировать ключевые образы",
                reading: "Не удалось считать ключевые образы",
                importing: "Не удалось импортировать ключевые образы"
            },
            negativeAmount: "Сумма не может быть отрицательной",
            newPasswordNoMatch: "Введенные пароли не совпадают",
            newPasswordSame: "Новый пароль должен отличаться от старого",
            notEnoughBalance: "Недостаточно разблокированного баланса",
            passwordNoMatch: "Пароли не совпадают",
            remoteCannotBeReached: "Удаленный демон недоступен",
            selectWalletFile: "Выберите файл кошелька",
            unknownError: "Произошла неизвестная ошибка",
            walletAlreadyExists: "Кошелек с таким названием уже существует",
            walletPathNotFound: "Не найден путь до хранилища данных кошелька",
            zeroAmount: "Сумма должна быть больше нуля"
        },
        warnings: {
            noKeyImageExport: "Не найдено ключевых образов для экспорта",
            usingLocalNode: "Не удалось получить доступ к удаленному узлу, переключаемся на локальный режим",
            usingRemoteNode: "evolutiond не найдена, используйте удаленный узел"
        }
    },
    placeholders: {
        additionalNotes: "Примечания",
        addressBookName: "Сохранненое имя для этого адреса",
        filterTx: "Введите ID, название, адрес или сумму",
        hexCharacters: "{count} шестнадцатеричных символов",
        mnemonicSeed: "25 (или 24) слов мнемонической seed-фразы",
        pasteTransactionId: "Вставьте ID транзакции",
        pasteTransactionProof: "Вставьте доказательство транзакции",
        proveOptionalMessage: "Необязательное сообщение обратное тому, что использовался для создания подписи",
        recipientWalletAddress: "Адрес кошелька получателя",
        selectAFile: "Пожалуйста, выберите файл",
        transactionNotes: "Прикрепленные к переводу примечания",
        walletName: "Название вашего кошелька",
        walletPassword: "Необязательный пароль для кошелька",
        operations: "Действия с кошельком",
        walletOperations: "Показать"
    },
    strings: {
        addAddressBookEntry: "Добавить адрес в адресную книгу",
        addressBookDetails: "Подробности адресной книги",
        addressBookIsEmpty: "Адресная книга пуста",
        addresses: {
            myPrimaryAddress: "Мой основной адрес",
            myUnusedAddresses: "Мои неиспользованные адреса",
            myUsedAddresses: "Мои использованные адреса",
            primaryAddress: "Основной адрес",
            subAddress: "Второстепенный адрес",
            subAddressIndex: "Номер {index}"
        },
        advancedOptions: "Продвинутые настройки",
        bannedPeers: {
            title: "Забаненные одноранговые узлы (блокировки будут сброшены после перезагрузки кошелька)",
            bannedUntil: "Заблокирован до {time}"
        },
        backupSeedWord: "Сохраните вашу seed-фразу в безопасном месте! Она - единственный способ получить доступ к вашему кошельку при смене устройства.",
        blockHeight: "Высота",
        confirmWords: "Подтвердите вашу мнемоническую фразу",
        enter7words: "Введите первые семь слов вашей мнемонической фразы в правильном порядке:",
        usingEmptyPass: "Кошелек без пароля не будет зашифрован!",
        checkTransaction: {
            description: "Убедитесь, что средства были переведены по ID транзакции, адресу получателя, и сообщению, которое использователось для создания сигнатуры.\nДля 'Доказательства дохода' вам не нужно указывать адрес получателя.",
            infoTitles: {
                confirmations: "Подтверждения",
                inPool: "В пуле",
                validTransaction: "Действительная транзакция",
                received: "Полученная сумма"
            },
            validTransaction: {
                no: "НЕТ",
                yes: "ДА"
            }
        },
        closing: "Закрываем..",
        connectingToBackend: "Подключение..",
        contribution: "Вклад",
        daemon: {
            local: {
                title: "Полностью локальный узел",
                description: "Полная безопасность, кошелек скачает полную копию сети. Вы не сможете совершать транзакции до окончания синхронизации."
            },
            localRemote: {
                title: "Локальный + удаленный узлы",
                description: "Быстрый старт со стандартными настройками. Кошелек скачает полную копию сети, но до окончания синхронизации будет использовать удаленный узел."
            },
            remote: {
                title: "Только удаленный узел",
                description: "Наименее безопасный метод, кошелек будет подключаться к удаленному узлу для выполнения любых транзакций."
            }
        },
        destinationUnknown: "Destination Unknown (если увидете эту строку - напишите в discord, не понял, в каком месте вызывается)",
        editAddressBookEntry: "Редактировать запись в адресной книге",
        loading: "Загрузка...",
        loadingSettings: "Загружаем настройки",
        evolutionBalance: "Баланс",
        evolutionExchangeBalance: "Баланс",
        evolutionUnlockedBalance: "Разблокированный баланс",
        evolutionUnlockedShort: "Разблокированно",
        noTransactionsFound: "Транзакции не найдены",
        notes: "Заметки",
        numberOfUnspentOutputs: "Количество непотраченных выходов",
        paymentID: "ID платежа",
        peerList: "Список одноранговых узлов",
        priorityOptions: {
            automatic: "Авто",
            slow: "Медленно",
            normal: "Нормально",
            fast: "Быстро",
            fastest: "Очень быстро"
        },
        proveTransactionDescription: "Создайте доказательство входящего/исходящего платежа, указав ID транзакции, адрес получателя и необязательное сообщение.\nВ случае с исходящими платежами, вы можете создать 'Доказательство расхода' для подтверждения авторства. В этом случае вам не нужно указывать адрес получателя.",
        readingWalletList: "Получение списка кошельков",
        recentIncomingTransactionsToAddress: "Последние входящие транзакции с этим адресом",
        recentTransactionsWithAddress: "Последние транзакции с этим адресом",
        rescanModalDescription: "Выберите либо полное сканирование сети, либо сканирование только потраченных выходов",
        saveSeedWarning: "Пожалуйста, скопируйте их в безопасное место!",
        saveToAddressBook: "Сохранить в адресную книгу",
        seedWords: "Seed-фраза",
        selectLanguage: "Выберите язык",
        serviceNodeRegistrationDescription: "Введите созданную демоном команду {registerCommand} для формирования сервисного узла по комнаде \"{prepareCommand}\"",
        spendKey: "Spend ключ",
        startingDaemon: "Запускаем узел",
        startingWallet: "Запускаем кошелек",
        switchToDateSelect: "Переключиться на выбор даты",
        switchToHeightSelect: "Переключиться на выбор высоты",
        syncingDaemon: "Синхронизация узла",
        transactionID: "ID транзакции",
        transactionConfirmed: "подтверждена",
        transactions: {
            amount: "Количество",
            description: "{type} транзакция",
            fee: "Комиссия",
            paidBySender: "оплачено отправителем",
            received: "Получено",
            sent: "Отправленно",
            sentTo: "{type} транзакция отправлена ",
            timestamp: "Отметка времени",
            types: {
                all: "Все",
                incoming: "Входящие",
                outgoing: "Исходящие",
                pending: "Ожидаемый",
                pendingIncoming: "Входящий (ожидание)",
                pendingOutgoing: "Исходящий (ожидание)",
                miner: "Майнер",
                serviceNode: "Сервисный узел",
                governance: "Governance ?",
                stake: "Стэйкинг",
                failed: "Провалено"
            }
        },
        unspentOutputs: "Неиспользованные выходы",
        userNotUsedAddress: "Вы не использовали этот адррес",
        userUsedAddress: "Вы использовали этот адрес",
        viewKey: "Ключ просмотра",
        viewOnlyMode: "Просмотр в режиме 'только для чтения'. Пожалуйста, полностью синхронизируйтесь для отправки монет."
    },
    titles: {
        addressBook: "Адресная книга",
        addressDetails: "Информация об адресе",
        advanced: {
            checkTransaction: "ПРОВЕРИТЬ ТРАНЗАКЦИЮ",
            prove: "ДОКАЗАТЬ"
        },
        changePassword: "Поменять пароль",
        configure: "Настроить",
        currentlyStakedNodes: "Текущие узлы для стэйкинга",
        privateKeys: "Приватные ключи",
        rescanWallet: "Заново отсканировать кошелек",
        serviceNode: {
            registration: "РЕГИСТРАЦИЯ",
            staking: "Стэйкинг"
        },
        settings: {
            title: "Настройки",
            tabs: {
                general: "Основные",
                language: "Язык",
                peers: "Узлы",
                exchange: "Обмен"
            }
        },
        transactionDetails: "Описание транзакции",
        transactions: "Транзакции",
        wallet: {
            createNew: "Создать новый кошелек",
            mcreateNew: "Создать новый кошелек с мультиподписью",
            createdOrRestored: "Кошелек создан\восстановлен",
            importFromFile: "Импортировать кошелек из файла",
            importFromLegacyGUI: "Импортировать кошелек из устаревшего GUI",
            importFromOldGUI: "Импортировать кошелек из старого GUI",
            restoreFromSeed: "Восстановить кошелек из seed фразы",
            restoreViewOnly: "Восстановить кошелек 'только для просмотра'"
        },
        welcome: "Добро пожаловать",
        yourWallets: "Ваши Кошельки"
    },
    headers: {
        address: "Адрес",
        amount: "Количество",
        confirmations: "Подтверждения",
        double_spend_seen: "Замечена Двойная Трата",
        fee: "Комиссия",
        height: "Высота",
        note: "Заметки",
        paymentid: "ID платежа",
        suggestedConfirmationsThreshold: "Рекомендуемый порог подтверждений",
        timestamp: "Временная метка",
        txid: "ID транзакции",
        type: "Тип",
        unlockTime: "Время разблокировки"
    }
}