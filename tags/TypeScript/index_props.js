import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/TypeScript/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/TypeScript/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'title': "TypeScript",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/init-pagic.md",
                "title": "Init Pagic",
                "link": "posts/init-pagic.html",
                "date": "2023-07-23T19:31:08.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "TypeScript"
                ],
                "excerpt": "This is the first post build from Pagic."
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "TypeScript",
                "count": 1
            }
        ]
    }
};
