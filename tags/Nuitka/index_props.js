import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/Nuitka/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/Nuitka/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'title': "Nuitka",
    'content': null,
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
