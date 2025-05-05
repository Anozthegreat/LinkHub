// Links database - global variable
var links = [
    {
        id: 1,
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        category: 'development',
        description: 'Resources for developers, by developers',
        dateAdded: '2023-05-15'
    },
    {
        id: 2,
        title: 'Dribbble',
        url: 'https://dribbble.com',
        category: 'design',
        description: 'Show and tell for designers',
        dateAdded: '2023-06-20'
    },
    {
        id: 3,
        title: 'Notion',
        url: 'https://notion.so',
        category: 'productive',
        description: 'All-in-one workspace for notes, tasks, wikis, and databases',
        dateAdded: '2023-04-10'
    },
    {
        id: 4,
        title: 'Coursera',
        url: 'https://coursera.org',
        category: 'education',
        description: 'Online courses from top universities and companies',
        dateAdded: '2023-07-05'
    },
    {
        id: 5,
        title: 'Project Gutenberg',
        url: 'https://www.gutenberg.org/',
        category: 'education',
        description: 'Project Gutenberg is a library of over 75,000 free eBooks',
        dateAdded: '2023-03-18'
    },
    {
        id: 6,
        title: 'GitHub',
        url: 'https://github.com',
        category: 'development',
        description: 'Where the world builds software',
        dateAdded: '2023-02-22'
    },
    {
        id: 7,
        title: 'Behance',
        url: 'https://behance.net',
        category: 'design',
        description: 'Showcase and discover creative work',
        dateAdded: '2023-08-12'
    },
    {
        id: 8,
        title: 'Trello',
        url: 'https://trello.com',
        category: 'productive',
        description: 'Collaborate, manage projects, and reach new productivity peaks',
        dateAdded: '2023-01-30'
    },
    {
        id: 9,
        title: 'Godot Engine',
        url: 'https://godotengine.org',
        category: 'development',
        description: 'An open source 2D and 3D game engine',
        dateAdded: '2024-01-30'
    },
    {
        id: 10,
        title: 'Free Media Heck Yeah',
        url: 'https://fmhy.net/',
        category: 'productive',
        description: 'The largest collection of free stuffs on the internet.',
        dateAdded: '2024-02-21'
    },
    {
        id: 11,
        title: 'Udemy',
        url: 'https://www.udemy.com/',
        category: 'education',
        description: 'Learning that gets you.',
        dateAdded: '2024-02-21'
    },
    {
        id: 12,
        title: 'Flathub',
        url: 'https://flathub.org/',
        category: 'productive',
        description: 'the App Store for Linux.',
        dateAdded: '2024-02-22'
    },
    {
        id: 13,
        title: 'VirusTotal',
        url: 'https://www.virustotal.com/gui/home/upload',
        category: 'security',
        description: 'Powerful Antivirus system.',
        dateAdded: '2024-02-25'
    },
    {
        id: 14,
        title: 'KhanAcademy',
        url: 'https://www.khanacademy.org/',
        category: 'education',
        description: 'Provides free, world-class education for anyone, anywhere.',
        dateAdded: '2024-02-28'
    },
    {
        id: 15,
        title: 'Defold',
        url: 'https://defold.com/',
        category: 'development',
        description: 'The game engine for high-performance cross-platform games.',
        dateAdded: '2024-03-02'
    },
    {
        id: 16,
        title: 'PDF24',
        url: 'https://www.pdf24.org/en/',
        category: 'productive',
        description: 'Free and easy to use online PDF tools.',
        dateAdded: '2024-03-02'
    },
    {
        id: 17,
        title: 'Myrient',
        url: 'https://myrient.erista.me/',
        category: 'game',
        description: 'Organized and publicly available collection.',
        dateAdded: '2024-03-05'
    },
    {
        id: 18,
        title: 'Itch.io',
        url: 'https://itch.io/',
        category: 'game',
        description: 'A simple way to find and share indie games online for free.',
        dateAdded: '2024-03-08'
    },
    {
        id: 19,
        title: 'Project Gutenberg',
        url: 'https://gutenberg.org/',
        category: 'education',
        description: 'Project Gutenberg is a library of over 75,000 free eBooks.',
        dateAdded: '2024-03-09'
    },
    {
        id: 20,
        title: 'Warsow',
        url: 'https://warsow.net/',
        category: 'game',
        description: 'Warsow is a free fast-paced first-person shooter (FPS) for Windows, Linux and macOS.',
        dateAdded: '2024-03-14'
    },
    {
        id: 21,
        title: 'Unciv',
        url: 'https://github.com/yairm210/Unciv',
        category: 'game',
        description: 'Open-source Android/Desktop remake of Civ V.',
        dateAdded: '2024-03-21'
    },
    {
        id: 22,
        title: 'Project Ignis',
        url: 'https://projectignis.github.io/index.html',
        category: 'game',
        description: 'The open-source automatic duel simulator.',
        dateAdded: '2024-07-21'
    },
    {
        id: 23,
        title: 'Jan AI',
        url: 'https://jan.ai/',
        category: 'productive',
        description: 'Chat with AI without any privacy concerns.',
        dateAdded: '2024-07-21'
    },
    {
        id: 24,
        title: 'ImageResizer',
        url: 'https://imageresizer.com/',
        category: 'design',
        description: 'Easily resize images online for free.',
        dateAdded: '2024-07-21'
    },
    {
        id: 25,
        title: 'BlackJack21',
        url: 'https://anozthegreat.github.io/BlackJack-21/',
        category: 'game',
        description: 'Easily play BlackJack21 online for free.',
        dateAdded: '2024-07-21'
    },
    {
        id: 26,
        title: 'PixilArt',
        url: 'https://www.pixilart.com/draw',
        category: 'development',
        description: 'Draw pixel art for free.',
        dateAdded: '2024-07-21'
    },
    {
        id: 27,
        title: 'Sacred Texts Archive',
        url: 'https://sacred-texts.com/',
        category: 'education',
        description: 'Books Archive about Religion, philosophy etc..',
        dateAdded: '2024-09-21'
    },
    {
        id: 28,
        title: 'PokeMMO',
        url: 'https://pokemmo.com/en/',
        category: 'game',
        description: 'Welcome to a new era of online monster battles.',
        dateAdded: '2024-09-21'
    },
    {
        id: 29,
        title: 'GB Studio',
        url: 'https://www.gbstudio.dev/',
        category: 'development',
        description: 'Free Game Engine for retro-game development.',
        dateAdded: '2024-09-21'
    },
    {
        id: 30,
        title: 'Renpy',
        url: 'https://www.renpy.org/',
        category: 'development',
        description: 'Free Game Engine for Visual Novel creation.',
        dateAdded: '2024-09-21'
    },
    {
        id: 31,
        title: 'PPSSPP',
        url: 'https://www.ppsspp.org/',
        category: 'game',
        description: 'Free PSP emulator for many platforms.',
        dateAdded: '2024-09-21'
    },
    {
        id: 32,
        title: 'PCSX2',
        url: 'https://pcsx2.net/',
        category: 'game',
        description: 'Free PS2 emulator for desktop.',
        dateAdded: '2024-09-21'
    },
    {
        id: 33,
        title: 'Solarus',
        url: 'https://www.solarus-games.org/',
        category: 'development',
        description: 'A lightweight, multiplatform, free and open-source 2D game engine.',
        dateAdded: '2024-09-21'
    },
    {
        id: 34,
        title: 'Internet Archive',
        url: 'https://archive.org/',
        category: 'education',
        description: 'Non-profit library of millions of free texts, movies, software, music etc.',
        dateAdded: '2024-09-21'
    },
    {
        id: 35,
        title: 'Quaternius',
        url: 'https://quaternius.com/',
        category: 'development',
        description: 'Free 3D assets for development.',
        dateAdded: '2024-10-21'
    },
    {
        id: 36,
        title: 'LLamafile-AI',
        url: 'https://github.com/Mozilla-Ocho/llamafile',
        category: 'productive',
        description: 'Resource friendly offline AI tool.',
        dateAdded: '2024-10-21'
    },
    {
        id: 37,
        title: 'Redot Engine',
        url: 'https://www.redotengine.org/',
        category: 'development',
        description: 'Performant Game Engine, fork of Godot.',
        dateAdded: '2024-10-21'
    },
    {
        id: 38,
        title: 'Blender',
        url: 'https://www.blender.org/',
        category: 'design',
        description: 'Open source 3D modelling tool.',
        dateAdded: '2024-10-21'
    },
    {
        id: 39,
        title: 'V Roid Studio',
        url: 'https://vroid.com/en/studio',
        category: 'design',
        description: 'Free 3D Character Creation Software.',
        dateAdded: '2024-10-21'
    },
    {
        id: 40,
        title: 'TV garden',
        url: 'https://tv.garden/',
        category: 'entertainment',
        description: 'Free IPTV web player.',
        dateAdded: '2024-10-21'
    },
    {
        id: 41,
        title: 'Stremio',
        url: 'https://www.stremio.com/',
        category: 'entertainment',
        description: 'Stremio offers a secure, modern and seamless entertainment experience.',
        dateAdded: '2024-10-21'
    }
];
