
const slug = "text-typing";

export const dashboardInfo = (info) => {
    const { version, isPremium, hasPro, licenseActiveNonce } = info;

    const proSuffix = isPremium ? ' Pro' : '';

    return {
        name: `Typing Text${proSuffix}`,
        displayName: `Typing Text${proSuffix} - Add Animated Typing Effects to Headings or Text`,
        description:
            "Typing Text Block is a powerful and easy-to-use WordPress block that lets you create realistic typing text animations without any coding. Perfect for hero sections, banners, headlines, and call-to-action areas, it helps you highlight key messages in an engaging and modern way.",
        slug,
        version,
        isPremium,
        hasPro,
        displayOurPlugins: true,
        media: {
            logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
            banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
            thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
            // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
            // video: 'https://youtu.be/n3B4SpbDS30',
            // isYoutube: true
        },
        pages: {
            org: `https://wordpress.org/plugins/${slug}/`,
            landing: `https://bplugins.com/products/${slug}/`,
            docs: `https://bplugins.com/docs/typing-text-block/`,
            pricing: `https://bplugins.com/products/${slug}/pricing`,
        },
        freemius: {
            product_id: 20170,
            plan_id: 33453,
            public_key: 'pk_b0a805a4574f7a1db93e8859282de'
        },
        
        licenseActiveNonce,

        changelogs: [
            {
                version: '2.0.6 - 28 Feb 26',
                type: 'Update',
                list: [
                    'Update dashboard and menu item rename'
                ]
            },
            {
                version: '2.0.5 – 15 Feb 26',
                type: 'update',
                list: [
                    'Some make pro features available on frontend without licenses',
                    'Pro modal premium quality designed',
                    ' Instantly switch between predefined themes to change the typing text appearance'
                ]
            },
            {
                version: '2.0.4 – 17 Jan 26',
                type: 'update',
                list: [
                    'Dashboard info updated',
                ]
            },
            {
                version: '2.0.3 – 16 Nov 25',
                type: 'update',
                list: [
                    'freemius latest sdk version updated',
                    'Demo page created for this plugin'
                ]
            },
        ],
        proFeatures: [
            'Choose from a variety of pre-designed themes for unique text animations',
            'Custom Colors & Gradients: Text, cursor, background, with smooth gradient support',
            'Access premium animation styles for stunning visuals',
            'Loop & Delay Options: Repeat or pause typing with precise timing',
            'Cursor Styling: Change style, size, and color for a personalized look',
            'Prefix & Suffix Text: Add extra words before or after typing text',
            'Optional Icons for Each Text: Users can add icons before/after text or skip entirely',
            'Premium Animations: Exclusive smooth effects available only in Pro'
        ],
        startButton: {
			label: 'Start Now',
			url: 'wp-admin/post-new.php?post_type=text-typing'
		}
    }
}

export const demoInfo = {
    allInOneLabel: 'See All Demos',
    allInOneLink: 'https://bblockswp.com/demo/text-typing/',
    demos: [
        {
            "title": "Default Style",
            "description": "Clean player with basic controls.",
            "url": "https://bblockswp.com/demo/typing-text-default/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Terminal",
            "description": "Starts muted and plays automatically.",
            "url": "https://bblockswp.com/demo/typing-text-terminal/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Star Flower",
            "description": "Resize player to fit your layout.",
            "url": "https://bblockswp.com/demo/typing-text-star-flower/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Neon Grid",
            "description": "Resize player to fit your layout.",
            "url": "https://bblockswp.com/demo/typing-text-neon-grid/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Aurora Glow",
            "description": "Shows every available control option.",
            "url": "https://bblockswp.com/demo/typing-text-aurora-glow/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Cyber Wave",
            "description": "Skip 2s and set preload behavior.",
            "url": "https://bblockswp.com/demo/typing-text-cyber-wave/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        }
    ]
}

export const pricingInfo = {
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
    pluginId: 17879,
    planId: 29699,
    licenses: [
        1,
        3,
        null
    ],
    button: {
        label: 'Buy Now ➜'
    },
    featured: {
        selected: 3, // choose from licenses item
    }
}