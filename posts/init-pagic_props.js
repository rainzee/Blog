import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/init-pagic.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/init-pagic.html",
    'title': "Init Pagic",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Init Pagic</h1>\n<p>This is the first post build from Pagic.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "Init Pagic"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is the first post build from Pagic.</p>'
        } }),
    'toc': null,
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-07-23T17:32:03.000Z",
    'updated': null,
    'excerpt': "This is the first post build from Pagic.",
    'cover': undefined,
    'tags': [
        "TypeScript"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/init-pagic.md",
                "title": "Init Pagic",
                "link": "posts/init-pagic.html",
                "date": "2023-07-23T17:32:03.000Z",
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
