import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/Typecho/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/Typecho/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'title': "Typecho",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/after-a-thousand-calls-it-comes-out.md",
                "title": "千呼万唤始出来",
                "link": "posts/after-a-thousand-calls-it-comes-out.html",
                "date": "2013-07-27T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Typecho"
                ],
                "excerpt": "原因 一直就有在网上记录生活的冲动，以前想着用新浪或者点点、lofter之类的免费博客，但是用过之后发现不是审核严重，就是自由度太低，什么都不能修改，而且大家的博客都像一样的，毫无特色可言。于是乎就萌生了建立独立博客的..."
            },
            {
                "pagePath": "posts/welcome-typecho.md",
                "title": "欢迎使用Typecho",
                "link": "posts/welcome-typecho.html",
                "date": "2013-04-13T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Typecho"
                ],
                "excerpt": "如果您看到这篇文章，表示您的blog已经安装成功。"
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "Python",
                "count": 4
            },
            {
                "name": "Nuitka",
                "count": 3
            },
            {
                "name": "Typecho",
                "count": 2
            },
            {
                "name": "Coding",
                "count": 1
            },
            {
                "name": "Git",
                "count": 1
            },
            {
                "name": "TypeScript",
                "count": 1
            }
        ]
    }
};
