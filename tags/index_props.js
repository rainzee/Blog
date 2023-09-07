import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/README.md",
    'layoutPath': "tags/_layout.tsx",
    'outputPath': "tags/index.html",
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
    'date': "2023-09-07T22:37:53.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/nuitka-debug-and-report.md",
                "title": "Nuitka 调试与追踪",
                "link": "posts/nuitka-debug-and-report.html",
                "date": "2023-09-08T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Python",
                    "Nuitka"
                ],
                "excerpt": "强大的调试与追踪控制 其实在 Nuitka 中，自带了许多强大的调试和追踪报告功能，能够允许你对程序运行的诸多细节进行追踪和调试，这对于部署真正的生产级别的代码是至关重要地。但是在中文互联网甚至是英文我鲜少有看到实际介绍..."
            },
            {
                "pagePath": "posts/nuitka-advanced-compilation-control.md",
                "title": "Nuitka 高级编译控制",
                "link": "posts/nuitka-advanced-compilation-control.html",
                "date": "2023-08-31T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Python",
                    "Nuitka"
                ],
                "excerpt": "进阶编译控制 从这里开始，我们可以更加精细的控制 Nuitka 的编译控制，包括控制 C 编译器，启用链接优化，控制缓存，启用 C 级别的分析优化，注意，这些控制涉及到 C 级别的控制，如果你不知道自己做什么，那么请不要尝试，可..."
            },
            {
                "pagePath": "posts/nuitka-binary-metadata.md",
                "title": "Nuitka 版本元数据",
                "link": "posts/nuitka-binary-metadata.html",
                "date": "2023-08-25T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Python",
                    "Nuitka"
                ],
                "excerpt": "什么是版本元数据 版本元数据就是用来描述二进制文件的信息，版本等数据的，例如下面在 Windows 上的属性截图，在不同的操作系统上都可以提供对可执行文件的元数据支持。 在 Nuitka 中，允许你进行二进制版本信息控制。 二进制...",
                "cover": "../assets/binary-metadata.png"
            },
            {
                "pagePath": "posts/nuitka-multi-os-support.md",
                "title": "Nuitka 多操作系统支持",
                "link": "posts/nuitka-multi-os-support.html",
                "date": "2023-08-24T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Python",
                    "Nuitka"
                ],
                "excerpt": "Nuitka 的跨平台支持 Nuitka 是跨平台支持的，对 Windows macOS 和 Linux 均有良好的支持，除了提供通用的操作系统支持之外，还针对三个操作系统做了特定控制的支持。下面将一一介绍。 通用操作系统控制 - --disable-console 在..."
            },
            {
                "pagePath": "posts/nuitka-plugin-system.md",
                "title": "Nuitka 插件系统",
                "link": "posts/nuitka-plugin-system.html",
                "date": "2023-08-23T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Python",
                    "Nuitka"
                ],
                "excerpt": "插件系统 插件可用于自定义和优化 Nuitka 编译的行为，根据项目的需求选择适当的插件以获得最佳性能和功能。在某些情况下，如果未显式地启用插件可能会导致预期之外地错误。 插件控制 - --enable-plugin=PLUGIN_NAME: 启用插件..."
            },
            {
                "pagePath": "posts/init-pagic.md",
                "title": "Init Pagic",
                "link": "posts/init-pagic.html",
                "date": "2023-07-01T00:00:00.000Z",
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
            },
            {
                "pagePath": "posts/code-readability-and-length-trade-offs.md",
                "title": "代码可读性和长度的取舍",
                "link": "posts/code-readability-and-length-trade-offs.html",
                "date": "2023-01-26T00:00:00.000Z",
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
                "count": 6
            },
            {
                "name": "Nuitka",
                "count": 5
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
