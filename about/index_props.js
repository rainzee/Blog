import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-07-24T07:43:10.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/init-pagic.md",
                "title": "Init Pagic",
                "link": "posts/init-pagic.html",
                "date": "2023-07-24T07:43:10.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "TypeScript"
                ],
                "excerpt": "This is the first post build from Pagic."
            },
            {
                "pagePath": "posts/code-readability-and-length-trade-offs.md",
                "title": "代码可读性和长度的取舍",
                "link": "posts/code-readability-and-length-trade-offs.html",
                "date": "2023-07-24T07:43:10.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Coding",
                    "Python"
                ],
                "excerpt": "完全等价的代码 一般而言，在不改变任何代码行为，或者完全等价的代码来说，更短的代码，也许意味着更好地性能，或者更紧凑的结构，但是牺牲了可读性和可维护性，在工程上来说，这种交易一般是不划算的，考虑下面两段代码： te..."
            },
            {
                "pagePath": "posts/git-auto-crlf.md",
                "title": "LF will be replaced by CRLF",
                "link": "posts/git-auto-crlf.html",
                "date": "2023-01-29T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Git"
                ],
                "excerpt": "警告出现的原因 Git 在 Windows 上的的 core.autocrlf 的默认值是 true 这导致了Git会始终尝试自动转换换行符 AUTO CRLF工作方式 在GIT中，当设置 * text=auto 或者 core.autocrlf = true 的时候，意味着，我们采用LF做为标准，..."
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "Coding",
                "count": 1
            },
            {
                "name": "Git",
                "count": 1
            },
            {
                "name": "Python",
                "count": 1
            },
            {
                "name": "TypeScript",
                "count": 1
            }
        ]
    }
};
