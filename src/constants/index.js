import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  mute, 
  eye, 
  battery,
  ear
} from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "clients",
    title: "Testimonials",
  },
  {
    id: "ContactPage",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon:ear,
    title: "Glasses for Deaf & Hard of Hearing",
    points:[
    "Patented Dome Bone Conduction Transducer",
    "Arrays of Microphones",
    "Bluetooth & Rechargeable"
    ]
  },
  {
    id: "feature-2",
    icon:mute,
    title: "Glasses for Mute",
    points:[
      "Real time sign language to audio conversion",
      "Pairs of side camera & speaker",
      "Offline processing"
    ]
  },
  {
    id: "feature-3",
    icon: eye,
    title: "Glasses for Blind",
    points: [
      "Objects & Face Recognition",
      "1080p front camera"
    ]
  },
  {
    id: "feature-4",
    icon: battery,
    title: "Smart Case",
    points: [
      "Day long battery backup",
      "Desktop computer mode"
    ]
  }
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "The Smart Aid Glasses have truly revolutionized my life. As someone who is visually impaired, these glasses have given me a newfound sense of independence. I can now navigate my surroundings with ease and confidence, thanks to the innovative features and intuitive design.",
    name: "Herman Jensen",
    title: "Visual Impairment Advocate",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I am amazed by the capabilities of the Smart Aid Glasses. As a deaf individual, I have struggled with communication in various situations. With these glasses, I can now easily communicate through text-to-speech technology, enabling me to interact with others more effectively.",
    name: "Jane Smith",
    title: "Deaf Community Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      " The Smart Aid Glasses have been a game-changer for me as a mute individual. The built-in speech recognition software allows me to communicate effortlessly by converting my gestures and expressions into spoken words. It's like having a voice wherever I go.",
    name: "Kenn Gallagher",
    title: "Disability Rights Activist",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "These glasses have exceeded my expectations in assisting the blind community. The incorporation of advanced sensors and AI technology enables users to navigate their surroundings with remarkable precision and safety. It's like having a reliable guide by your side at all times.",
    name: "Kencil Mandela",
    title: "Blind Community LEader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Revenue Generated",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.ksham.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.ksham.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.ksham.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.ksham.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.ksham.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.ksham.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.ksham.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.ksham.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.ksham.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.ksham.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.ksham.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.ksham.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/ksham_innovation/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/ksham-innovation/?originalSubdomain=in",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];