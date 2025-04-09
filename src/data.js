import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Team",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Body Soap",
        info: "The Body soap for Proper Body Cleaning with Body Soap Products",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Face Product",
        info: "The Face Product to keep your facials glowing and smooth",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Body Cream",
        info: "The Body Cream Products makes the body glowing and have Clear skin",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Hair Product",
        info: "The Hair Care Product is one of a kind that helps with good hair treatments",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Realness You Can Trust",
        desc: "We’re all about keeping it real,genuine products, honest recommendations, and no hidden agendas. Your trust means everything to us."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Beauty for Everyone",
        desc: "We believe beauty isn’t a luxury; it’s for all of us. That’s why we’re committed to making high-quality skincare and haircare accessible and affordable, no matter your budget or background."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Confidence is Key",
        desc: "Beauty is personal, and we’re here to help you own it. Whether through expert advice or thoughtful product curation, we want you to feel confident in your skin every day."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Innovation with Heart",
        desc: "We’re blending tech and human expertise to create something special,personalized beauty solutions that actually work for you."
    }
]









export const faqs = [
    {
        id: 1,
        question: "What’s CoilSkin all about?",
        answer: "CoilSkin is here to change the game for beauty lovers. We’re an online space where you can find authentic skincare and haircare products that actually work—no fakes, no fuss. We’re all about making beauty simple, affordable, and personal."
    },
    {
        id: 2,
        question: "Why should I choose CoilSkin?",
        answer: "We’re not just another beauty store. At CoilSkin, we put you first. From trusted products to expert advice, everything we do is designed to help you feel confident in your choices. Plus, we’re working on cool tech to make shopping even more personal in the future."
    },
    {
        id: 3,
        question: " Can I trust your products on CoilSkin?",
        answer: "100%. Every product on CoilSkin is the real deal, sourced directly from brands you know and trust. No counterfeits, no shortcuts—just products that are safe and effective."
    },
    {
        id: 4,
        question: "Are your products budget-friendly?",
        answer: "Definitely! We know that beauty shouldn’t break the bank. That’s why we offer amazing products at prices you’ll love, so you don’t have to choose between quality and affordability."
    },
    {
        id: 5,
        question: "When will the full platform launch?",
        answer: " It’s coming soon, and we can’t wait to share it with you! Right now, we’re putting the finishing touches on something truly special. Stick with us for updates,you’ll be the first to know when it’s live!"
    },
    {
        id: 6,
        question: "How do I reach you if I have questions?",
        answer: "We’d love to hear from you! Drop us an email at coilskin17@gmail.com or hit us up on social media. Whether you have questions, feedback, or just want to say hi, we’re always here for you."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Favour",
        quote: "The Body lotion is very nice, my skin feels smooth. The Body Wash smells amazing too. I've been getting lots of compliments about my skin.",
        job: "Nurse",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Fredrick",
        quote: "My dry skin has become soft after using the moisturizer for few days .",
        job: "Content creator",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Folu",
        quote: "My skin that was once dull has become much brighter and I'm literally glowing. I get lots of compliments about how nice my skin looks whenever I go out",
        job: "Forex trader",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Precious",
        quote: "I've tried quite a number of products in the past to help with my dark spots but none worked. This particular product has made my face become free from dark spots",
        job: "Intern Nurse",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Chioma",
        quote: "The Skincare products are really working on my body. My skin is really glowing. Infact i've been getting lots of compliments about the improvement in my skin.",
        job: "Model",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: '(Affordable & Accessible) Budget-conscious customers who need guidance but don’t require intensive personalization.',
        price: 9000,
        features: [
            {feature: 'Access to curated product recommendations', available: true},
            {feature: 'Monthly skincare/haircare routine guide', available: true},
            {feature: 'Community access (forums, expert Q&A)', available: true},
            {feature: 'Discounts on selected products (e.g 5%)', available: true}
            // {feature: 'Fifth Product', available: true},
            // {feature: 'Fifth Product Plus', available: false},
            // {feature: 'Sixth Product', available: false},
            // {feature: 'Seventh Product', available: false},
            // {feature: 'Seventh Product Plus', available: false},
            // {feature: 'Eighth Product', available: false},
            // {feature: 'Ninth Product', available: false},
            // {feature: 'Tenth Product', available: false},
            // {feature: 'eleventh Product', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: '(Enhanced Personalization) Customers who want expert-backed recommendations and personalized care.',
        price: 18000,
        features: [
            {feature: 'Everything in Silver plus:', available: true},
            {feature: 'Personalized consultations (e.g:AI-driven or expert-recommended routine)', available: true},
            {feature: 'Early access to new products and exclusive sales', available: true},
            {feature: 'Higher discounts (e.g: 10%)', available: true},
            {feature: 'One free product sample per month', available: true}
            // {feature: 'Fifth Product Plus', available: true},
            // {feature: 'Sixth Product', available: true},
            // {feature: 'Seventh Product', available: true},
            // {feature: 'Seventh Product Plus', available: true},
            // {feature: 'Eighth Product', available: false},
            // {feature: 'Ninth Product', available: false},
            // {feature: 'Tenth Product', available: false},
            // {feature: 'Eleventh Product', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: '(VIP Experience) Beauty enthusiasts and loyal customers who want a fully tailored experience.',
        price: 36000,
        features: [
            {feature: 'Everything in Gold plus:', available: true},
            {feature: 'One-on-one consultations with beauty/skincare experts', available: true},
            {feature: 'Priority customer support', available: true},
            {feature: 'Custom product bundles based on personal needs', available: true},
            {feature: 'Highest discount (e.g: 15-20%)', available: true},
            {feature: 'Exclusive gifts and early access to limited-edition products', available: true}
            // {feature: 'Sixth Product', available: true},
            // {feature: 'Seventh Product', available: true},
            // {feature: 'Seventh Product Plus', available: true},
            // {feature: 'Eighth Product', available: true},
            // {feature: 'Ninth Product', available: true},
            // {feature: 'Tenth Product', available: true},
            // {feature: 'Eleventh Product', available: true}
        ]
    }
]









const Trainer1 = require('./images/founder.jpg')
const Trainer2 = require('./images/co founder.jpg')
const Trainer3 = require('./images/Ayodeji CTO.jpg')
const Trainer4 = require('./images/frontend lead.jpg')
const Trainer5 = require('./images/Evidence.jpg')
const Trainer6 = require('./images/Hikay.jpg')
const Trainer7 = require('./images/Stephen UIUX.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Goodness',
        job: 'Founder',
        socials: ['https://www.instagram.com/_ireoluwaaa?igsh=cGNuNXJ3M3BtNnYy', 'https://x.com/ireoluwaaaa_?s=21', 'https://facebook.com/', 'https://www.linkedin.com/in/goodnessojo1717/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Emmanuel',
        job: 'Co-Founder',
        socials: ['https://www.instagram.com/', 'https://x.com/meet_manny?s=21', 'https://facebook.com/', 'https://linkedin.com/in/emmanuel-ajibokun']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Ayodeji',
        job: 'CTO',
        socials: ['https://www.instagram.com/dev.emmah?igsh=Y2t6b2c5OXhiazc3&utm_source=qr', 'https://x.com/emmahdev?s=21', 'https://facebook.com/', 'https://linkedin.com/in/ayodeji-emmanuel-b39756250']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Abiola',
        job: 'Frontend Lead',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://www.linkedin.com/in/abiola-daniel-ogunsola/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Evidence',
        job: 'Backend Lead',
        socials: ['https://instagram.com/evidence_ade', 'https://x.com/@evidence_codes', 'https://facebook.com/', 'https://www.linkedin.com/in/evidence-adejuwon']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Hikay',
        job: 'Design Lead',
        socials: ['https://instagram.com/', 'https://x.com/emmydesigner001?s=21', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 7,
        image: Trainer7,
        name: 'Stephen',
        job: 'UI/UX Designer',
        socials: ['https://www.instagram.com/_sthephen?igsh=MTV6bmd0MTVub3Uzcw==', 'https://x.com/klite6304?s=21', 'https://facebook.com/', 'https://www.linkedin.com/in/stephen-obembe-53867a1b5/']
    }
]