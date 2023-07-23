import { React } from 'https://deno.land/x/pagic@v1.6.3/mod.ts';

export default {
    srcDir: "src",
    outDir: "dist",
    theme: "blog",
    plugins: ["blog"],
    title: "Rainzee's Blog",
    description: "Coding For Living.",
    tools: { backToTop: true },
    nav: [
        {
            text: "文章",
            link: "/",
            icon: "czs-home-l"
        },
        {
            text: "标签",
            link: "/tags/",
            icon: "czs-tag-l"
        },
        {
            text: "归档",
            link: "/archives/",
            icon: "czs-box-l"
        },
        {
            text: "关于",
            link: "/about/",
            icon: "czs-about-l"
        },
    ],
    footer: (<footer></footer>),
    blog: {
        root: "/posts/",
        social: {
            github: "rainzee",
            email: "rainzee.w@gmail.com",
            twitter: "RainzeeWang",
        },
    },
};
