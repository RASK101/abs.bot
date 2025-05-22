document.addEventListener('DOMContentLoaded', () => {
    const WebApp = window.Telegram.WebApp;
    WebApp.ready();
    WebApp.expand();

    const userFirstName = WebApp.initDataUnsafe?.user?.first_name || 'Friend';
    const greetingElement = document.getElementById('welcome-greeting');
    if (greetingElement) {
        greetingElement.textContent = `Hello, ${userFirstName}!`;
    }

    const translations = {
        ru: {
            welcomeGreeting: `Привет, ${userFirstName}!`,
            welcomeText: "Откройте для себя InlineQueryResult! L2 блокчейн, позволяющий взаимодействовать с web3 приложениями так же просто, как и с обычными. На Abstract каждое взаимодействие приносит XP. Это как очки опыта в игре, награждающие за активность. Они открывают доступ к наградам, включая аирдроп токена Abstract. Чем больше XP, тем выше шансы на получение. Продолжайте исследовать через наше приложение, чтобы максимизировать заработок!",
            walletPrompt: "Давайте заведем кошелек Abstract",
            yesLetsSetUp: "Да, давайте заведем",
            noIHaveWallet: "Нет, у меня уже есть кошелек Abstract",
            popupQuestion: "Нужна ли вам помощь с пополнением Abstract кошелька?",
            yesHelpMe: "Да, помогите",
            noIManage: "Нет, я справлюсь",
            close: "Закрыть",
            createTitle: "Давайте заведем кошелек Abstract",
            createInstructions: "Это проще, чем вы думаете! Перейдите на страницу входа Abstract (<a href='https://portal.abs.xyz/login' target='_blank'>https://portal.abs.xyz/login</a>) и войдите так же как на любой другой сайт с помощью электронной почты или Google аккаунта. Так же вы можете зарегистрироваться с помощью вашего EVM кошелька. Важно, что в сети Abstract вам будет сгенерирован другой адрес кошелька, учтите это при переводе средств в сеть Abstract!",
            fundPrompt: "Нужна ли вам помощь с пополнением Abstract кошелька?",
            fundTitle: "Давайте пополним кошелек Abstract",
            fundInstructions: "Это проще, чем вы думаете! Перейдите в свой профиль Abstract (<a href='https://portal.abs.xyz/profile' target='_blank'>https://portal.abs.xyz/profile</a>) и найдите кнопку +Fund. После чего выберите способ пополнения. Самым простым способом будет пополнение через Moonpay с помощью Apple Pay или вашей банковской карты.",
            fundOptions: "Если у вас уже есть криптовалюта, то вы можете использовать: вывод с централизованной биржи, перевод с другого кошелька, бридж из другой сети. Помните, что адрес кошелька в сети Abstract может принимать средства только в сети Abstract!",
            whatToDo: "Чем заняться в Abstract?",
            earnTitle: "Заработайте XP!",
            earnText: "На Abstract каждое взаимодействие приносит XP. Это как очки опыта в игре, награждающие за активность. Они открывают доступ к наградам, включая аирдроп токена Abstract. Чем больше XP, тем выше шансы на получение. Продолжайте исследовать через наше приложение, чтобы максимизировать заработок!",
            earnSubtitle: "Как вы хотите это сделать?",
            earnDesc: "Все ваши действия на Abstract будут вознаграждать вас XP. Но платные взаимодействия принесут вам больше XP.",
            budget: "Бюджетно",
            readyToInvest: "Готов вложиться",
            freeTitle: "Бюджетные игры",
            premiumTitle: "Платные игры",
            roachTitle: "Roach Racing Club",
            roachDesc: "Увлекательная гонка на цифровых тараканах, где игроки могут зарабатывать уникальные NFT в зависимости от результатов гонок.",
            duperTitle: "DUPER",
            duperDesc: "Весёлая Play-to-Earn игра с уникальной механикой, позволяющая собирать токены через выполнение миссий и сражений.",
            penguTitle: "Pengu Clash",
            penguDesc: "Битвы с пингвинами в Telegram-боте, где игроки зарабатывают награды за победы в PvP-сражениях.",
            gigaTitle: "Giga Verse",
            gigaDesc: "Огромная игровая вселенная GameFi, где игроки исследуют миры и зарабатывают токены через квесты и торговлю.",
            bigcoinTitle: "BigCoin",
            bigcoinDesc: "Премиум-игра, сочетающая ставки, торговлю и заработок токенов через стратегические решения.",
            gachaTitle: "Gacha",
            gachaDesc: "Захватывающая игра с механикой gacha, где игроки собирают редкие NFT, открывая сундуки.",
            multiplierTitle: "Multiplier",
            multiplierDesc: "Стратегическая игра, где игроки умножают свои заработки через умные вложения и миссии.",
            roachPopupTitle: "Roach Racing Club",
            roachPopupDesc: "Увлекательная гонка на цифровых тараканах с возможностью улучшения и заработка уникальных NFT. XP начисляется за гонки, улучшения и приглашение друзей.",
            play: "Играть",
            details: "Подробнее",
            help: "Помощь"
        },
        en: {
            welcomeGreeting: `Hello, ${userFirstName}!`,
            welcomeText: "Discover Abstract! An L2 blockchain that makes interacting with web3 apps as simple as regular ones. Every interaction on Abstract earns XP, like experience points in a game, rewarding your activity. They unlock rewards, including the Abstract token airdrop, with higher XP boosting your chances. Keep exploring through our app to maximize your earnings!",
            walletPrompt: "Let's set up an Abstract wallet",
            yesLetsSetUp: "Yes, let's set up",
            noIHaveWallet: "No, I already have an Abstract wallet",
            popupQuestion: "Do you need help funding your Abstract wallet?",
            yesHelpMe: "Yes, help me",
            noIManage: "No, I’ll manage",
            close: "Close",
            createTitle: "Let's set up an Abstract wallet",
            createInstructions: "It's easier than you think! Go to the Abstract login page (<a href='https://portal.abs.xyz/login' target='_blank'>https://portal.abs.xyz/login</a>) and sign in with your email or Google account, just like on any other site. You can also register using your EVM wallet. Note that a different wallet address will be generated in the Abstract network, so consider this when transferring funds to Abstract!",
            fundPrompt: "Do you need help funding your Abstract wallet?",
            fundTitle: "Let's fund your Abstract wallet",
            fundInstructions: "It's easier than you think! Go to your Abstract profile (<a href='https://portal.abs.xyz/profile' target='_blank'>https://portal.abs.xyz/profile</a>) and find the +Fund button. Then choose your funding method; the easiest option is through Moonpay with Apple Pay or your bank card.",
            fundOptions: "If you already have cryptocurrency, you can use: withdrawal from a centralized exchange, transfer from another wallet, or bridging from another network. Remember that the Abstract wallet address only accepts funds in the Abstract network!",
            whatToDo: "What to do in Abstract?",
            earnTitle: "Earn XP!",
            earnText: "Every interaction on Abstract earns XP, like experience points in a game, rewarding your activity. They unlock rewards, including the Abstract token airdrop, with higher XP boosting your chances. Keep exploring through our app to maximize your earnings!",
            earnSubtitle: "How would you like to do it?",
            earnDesc: "All your actions on Abstract will reward you with XP. However, paid interactions will earn you more XP.",
            budget: "Budget",
            readyToInvest: "Ready to invest",
            freeTitle: "Budget Games",
            premiumTitle: "Premium Games",
            roachTitle: "Roach Racing Club",
            roachDesc: "An exciting digital roach racing game where players can earn unique NFTs based on race results.",
            duperTitle: "DUPER",
            duperDesc: "A fun Play-to-Earn game with unique mechanics, allowing token collection through missions and battles.",
            penguTitle: "Pengu Clash",
            penguDesc: "Penguin battles in a Telegram bot, where players earn rewards for PvP victories.",
            gigaTitle: "Giga Verse",
            gigaDesc: "A vast GameFi universe where players explore worlds and earn tokens through quests and trading.",
            bigcoinTitle: "BigCoin",
            bigcoinDesc: "A premium game combining staking, trading, and token earnings through strategic decisions.",
            gachaTitle: "Gacha",
            gachaDesc: "An exciting gacha game where players collect rare NFTs by opening chests.",
            multiplierTitle: "Multiplier",
            multiplierDesc: "A strategic game where players multiply earnings through smart investments and missions.",
            roachPopupTitle: "Roach Racing Club",
            roachPopupDesc: "An exciting digital roach racing game with upgrade options and unique NFT earnings. XP is earned through races, upgrades, and friend invitations.",
            play: "Play",
            details: "Details",
            help: "Help"
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'en';

    function switchLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateText();
    }

    function updateText() {
        const elements = {
            'welcome-greeting': 'welcomeGreeting',
            'welcome-text': 'welcomeText',
            'wallet-prompt': 'walletPrompt',
            'yes-lets-set-up': 'yesLetsSetUp',
            'no-i-have-wallet': 'noIHaveWallet',
            'popup-question': 'popupQuestion',
            'yes-help-me': 'yesHelpMe',
            'no-i-manage': 'noIManage',
            'close': 'close',
            'create-title': 'createTitle',
            'create-instructions': 'createInstructions',
            'fund-prompt': 'fundPrompt',
            'fund-title': 'fundTitle',
            'fund-instructions': 'fundInstructions',
            'fund-options': 'fundOptions',
            'what-to-do': 'whatToDo',
            'earn-title': 'earnTitle',
            'earn-text': 'earnText',
            'earn-subtitle': 'earnSubtitle',
            'earn-desc': 'earnDesc',
            'budget': 'budget',
            'ready-to-invest': 'readyToInvest',
            'free-title': 'freeTitle',
            'premium-title': 'premiumTitle',
            'roach-title': 'roachTitle',
            'roach-desc': 'roachDesc',
            'duper-title': 'duperTitle',
            'duper-desc': 'duperDesc',
            'pengu-title': 'penguTitle',
            'pengu-desc': 'penguDesc',
            'giga-title': 'gigaTitle',
            'giga-desc': 'gigaDesc',
            'bigcoin-title': 'bigcoinTitle',
            'bigcoin-desc': 'bigcoinDesc',
            'gacha-title': 'gachaTitle',
            'gacha-desc': 'gachaDesc',
            'multiplier-title': 'multiplierTitle',
            'multiplier-desc': 'multiplierDesc',
            'roach-popup-title': 'roachPopupTitle',
            'roach-popup-desc': 'roachPopupDesc',
            'play': 'play',
            'details': 'details',
            'help': 'help'
        };

        for (const [elementId, translationKey] of Object.entries(elements)) {
            const element = document.getElementById(elementId);
            if (element) {
                if (element.tagName === 'BUTTON' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'P') {
                    element.innerHTML = translations[currentLanguage][translationKey];
                }
            }
        }
    }

    window.showPopup = function(popupId) {
        document.getElementById(popupId).classList.remove('hidden');
    };

    window.hidePopup = function(popupId) {
        document.getElementById(popupId).classList.add('hidden');
    };

    updateText();
});
