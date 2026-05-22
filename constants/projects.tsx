export type Project = {
    title: string;
    src: string;
    href: string;
    description: string;
}

export const projects: Project[] = [
    {
        title: "Quick AI",
        src: "/images/projects/QuickAI.png",
        href: "https://quick-ai-client-blush.vercel.app/",
        description:
            "Quick AI is a web application that allows users to generate AI-powered content.",
    },
    {
        title: "pgEzy",
        src: "/images/projects/pgezy.png",
        href: "https://play.google.com/store/apps/details?id=com.adinila.pgezy&hl=en_IN",
        description:
            "pgEzy is a mobile application that allows users to find and book PG accommodations.",
    },
    {
        title: "Style Unit",
        src: "/images/projects/styleUnit.png",
        href: "https://play.google.com/store/apps/details?id=com.styleplusunit.user&hl=en_IN",
        description:
            "Style Unit is a salon application that allows users to book salon services.",
    },
   
    {
        title: "Home Services",
        src: "/images/projects/homeservice.jpeg",
        href: "https://play.google.com/store/apps/details?id=com.styleplusunit.user&hl=en_IN",
        description:
            "Home Services is an mobile application that allows users to find and book home services.",
    },
    {
        title: "Pulse News",
        src: "/images/projects/news.jpeg",
        href: "/projects/news",
        description:
            "A premium, real-time news aggregator featuring personalized AI summaries, customized category feeds, and dynamic reading views.",
    },
];