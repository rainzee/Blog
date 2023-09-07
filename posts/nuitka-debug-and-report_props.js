import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/nuitka-debug-and-report.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/nuitka-debug-and-report.html",
    'title': "Nuitka 调试与追踪",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Nuitka 调试与追踪</h1>\n<h2 id="%E5%BC%BA%E5%A4%A7%E7%9A%84%E8%B0%83%E8%AF%95%E4%B8%8E%E8%BF%BD%E8%B8%AA%E6%8E%A7%E5%88%B6">强大的调试与追踪控制<a class="anchor" href="#%E5%BC%BA%E5%A4%A7%E7%9A%84%E8%B0%83%E8%AF%95%E4%B8%8E%E8%BF%BD%E8%B8%AA%E6%8E%A7%E5%88%B6">§</a></h2>\n<p>其实在 Nuitka 中，自带了许多强大的调试和追踪报告功能，能够允许你对程序运行的诸多细节进行追踪和调试，这对于部署真正的生产级别的代码是至关重要地。但是在中文互联网甚至是英文我鲜少有看到实际介绍这部分的文章，这未免有些浪费，下面我将介绍如何使用 Nuitka 内置的调试与追踪功能来生成详细的报告。</p>\n<h2 id="%E8%B0%83%E8%AF%95">调试<a class="anchor" href="#%E8%B0%83%E8%AF%95">§</a></h2>\n<ul>\n<li>\n<p><code>--debug</code>  执行尽可能多的自检以查找Nuitka中的错误。不要用于生产。默认关闭。</p>\n</li>\n<li>\n<p><code>--unstripped</code>  在生成的对象文件中保留调试信息，以实现更好的调试器交互。默认关闭。</p>\n</li>\n<li>\n<p><code>--profile</code>  启用基于vmprof的时间分析。目前不工作。默认关闭。</p>\n</li>\n<li>\n<p><code>--internal-graph</code>  创建优化过程内部的图形，不要用于整个程序，仅用于小型测试案例。默认关闭。</p>\n</li>\n<li>\n<p><code>--trace-execution</code>  追踪执行输出，在执行代码之前输出代码行。默认关闭。</p>\n</li>\n<li>\n<p><code>--recompile-c-only</code>  这不是增量编译，而仅用于 Nuitka 开发。它采用现有文件，仅将其重新编译为 C。允许编译已编辑的 C 文件，以快速调试生成的源代码更改，例如查看代码是否被通过，输出值等。默认关闭。取决于编译 Python 源代码来确定应查看哪些文件。</p>\n</li>\n<li>\n<p><code>--xml=XML_FILENAME</code>  将优化过程的内部程序结构以 XML 形式写入给定的文件名。</p>\n</li>\n<li>\n<p><code>--generate-c-only</code>  仅生成 C 源代码，不编译为二进制或模块。这用于不浪费 CPU 的调试和代码覆盖分析。默认关闭。不要认为你可以直接使用它。</p>\n</li>\n<li>\n<p><code>--experimental=FLAG</code>  使用声明为 <code>“experimental”</code> 的功能。如果代码中没有实验性功能，则可能不起作用。使用实验性标签（检查源代码）进行每个实验的功能。</p>\n</li>\n<li>\n<p><code>--low-memory</code>  尝试使用更少的内存，通过减少 C 编译作业的分支和使用使用更少内存的选项。用于嵌入式设备。如果遇到内存不足问题，请使用此选项。默认关闭。但是根据我的经验来看，大部分告警内存不足基本都是由于你的编译姿势不对所导致的，请优先排除其他错误，最后考虑此选项。</p>\n</li>\n<li>\n<p><code>--create-environment-from-report=CREATE_ENVIRONMENT_FROM_REPORT</code>  从给定的报告文件创建新的虚拟环境，例如 <code>\'--report=compilation-report.xml\'</code> 。默认不执行。</p>\n</li>\n</ul>\n<h2 id="%E6%8A%A5%E5%91%8A%E4%B8%8E%E8%BF%BD%E8%B8%AA">报告与追踪<a class="anchor" href="#%E6%8A%A5%E5%91%8A%E4%B8%8E%E8%BF%BD%E8%B8%AA">§</a></h2>\n<ul>\n<li>\n<p><code>--report=REPORT_FILENAME</code>  以 XML 输出文件的形式报告模块、数据文件、编译、插件等详细信息。这对于问题报告也非常有用。这些报告可以用于通过 <code>\'--create-environment-from-report\'</code> 轻松重新创建环境，但包含大量信息。默认关闭。</p>\n</li>\n<li>\n<p><code>--report-diffable</code>  以可比较的形式报告数据，即没有时间或内存使用值的变化。默认关闭。</p>\n</li>\n<li>\n<p><code>--report-user-provided=KEY_VALUE</code>  报告来自您的数据。可以多次提供，格式为 <code>\'key=value\'</code>，其中 <code>key</code> 应为标识符，例如，使用 <code>\'--report-user-provided=pipenv-lock-hash=64a5e4\'</code> 来跟踪某些输入值。默认为空。</p>\n</li>\n<li>\n<p><code>--report-template=REPORT_DESC</code>  通过模板进行报告。提供模板和输出文件名 <code>&quot;template.rst.j2:output.rst&quot;</code>。对于内置模板，请查看用户手册以了解这些模板是什么。可以多次提供。默认为空。</p>\n</li>\n<li>\n<p><code>--quiet</code>  禁用所有信息输出，但显示警告。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-scons</code>  以详细信息运行 C 构建后端 Scons，显示执行的命令和检测到的编译器。默认关闭。</p>\n</li>\n<li>\n<p><code>--no-progressbar</code>  禁用进度条。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-progress</code>  提供进度信息和统计信息。禁用正常的进度条。默认关闭。现在已经停止支持。</p>\n</li>\n<li>\n<p><code>--show-memory</code>  提供内存信息和统计信息。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-modules</code>  提供包含的模块和 DLL 的信息。已过时，你应该使用 <code>\'--report\'</code> 文件代替。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-modules-output=PATH</code>  指定 <code>\'--show-modules\'</code> 的输出位置，应为文件名。默认为标准输出。</p>\n</li>\n<li>\n<p><code>--verbose</code>  输出所采取的行动的详细信息，特别是在优化中。可能会变得非常多。默认关闭。</p>\n</li>\n<li>\n<p><code>--verbose-output=PATH</code>  指定 <code>\'--verbose\'</code>。</p>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "Nuitka \u8C03\u8BD5\u4E0E\u8FFD\u8E2A"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%BC%BA%E5%A4%A7%E7%9A%84%E8%B0%83%E8%AF%95%E4%B8%8E%E8%BF%BD%E8%B8%AA%E6%8E%A7%E5%88%B6">强大的调试与追踪控制<a class="anchor" href="#%E5%BC%BA%E5%A4%A7%E7%9A%84%E8%B0%83%E8%AF%95%E4%B8%8E%E8%BF%BD%E8%B8%AA%E6%8E%A7%E5%88%B6">§</a></h2>\n<p>其实在 Nuitka 中，自带了许多强大的调试和追踪报告功能，能够允许你对程序运行的诸多细节进行追踪和调试，这对于部署真正的生产级别的代码是至关重要地。但是在中文互联网甚至是英文我鲜少有看到实际介绍这部分的文章，这未免有些浪费，下面我将介绍如何使用 Nuitka 内置的调试与追踪功能来生成详细的报告。</p>\n<h2 id="%E8%B0%83%E8%AF%95">调试<a class="anchor" href="#%E8%B0%83%E8%AF%95">§</a></h2>\n<ul>\n<li>\n<p><code>--debug</code>  执行尽可能多的自检以查找Nuitka中的错误。不要用于生产。默认关闭。</p>\n</li>\n<li>\n<p><code>--unstripped</code>  在生成的对象文件中保留调试信息，以实现更好的调试器交互。默认关闭。</p>\n</li>\n<li>\n<p><code>--profile</code>  启用基于vmprof的时间分析。目前不工作。默认关闭。</p>\n</li>\n<li>\n<p><code>--internal-graph</code>  创建优化过程内部的图形，不要用于整个程序，仅用于小型测试案例。默认关闭。</p>\n</li>\n<li>\n<p><code>--trace-execution</code>  追踪执行输出，在执行代码之前输出代码行。默认关闭。</p>\n</li>\n<li>\n<p><code>--recompile-c-only</code>  这不是增量编译，而仅用于 Nuitka 开发。它采用现有文件，仅将其重新编译为 C。允许编译已编辑的 C 文件，以快速调试生成的源代码更改，例如查看代码是否被通过，输出值等。默认关闭。取决于编译 Python 源代码来确定应查看哪些文件。</p>\n</li>\n<li>\n<p><code>--xml=XML_FILENAME</code>  将优化过程的内部程序结构以 XML 形式写入给定的文件名。</p>\n</li>\n<li>\n<p><code>--generate-c-only</code>  仅生成 C 源代码，不编译为二进制或模块。这用于不浪费 CPU 的调试和代码覆盖分析。默认关闭。不要认为你可以直接使用它。</p>\n</li>\n<li>\n<p><code>--experimental=FLAG</code>  使用声明为 <code>“experimental”</code> 的功能。如果代码中没有实验性功能，则可能不起作用。使用实验性标签（检查源代码）进行每个实验的功能。</p>\n</li>\n<li>\n<p><code>--low-memory</code>  尝试使用更少的内存，通过减少 C 编译作业的分支和使用使用更少内存的选项。用于嵌入式设备。如果遇到内存不足问题，请使用此选项。默认关闭。但是根据我的经验来看，大部分告警内存不足基本都是由于你的编译姿势不对所导致的，请优先排除其他错误，最后考虑此选项。</p>\n</li>\n<li>\n<p><code>--create-environment-from-report=CREATE_ENVIRONMENT_FROM_REPORT</code>  从给定的报告文件创建新的虚拟环境，例如 <code>\'--report=compilation-report.xml\'</code> 。默认不执行。</p>\n</li>\n</ul>\n<h2 id="%E6%8A%A5%E5%91%8A%E4%B8%8E%E8%BF%BD%E8%B8%AA">报告与追踪<a class="anchor" href="#%E6%8A%A5%E5%91%8A%E4%B8%8E%E8%BF%BD%E8%B8%AA">§</a></h2>\n<ul>\n<li>\n<p><code>--report=REPORT_FILENAME</code>  以 XML 输出文件的形式报告模块、数据文件、编译、插件等详细信息。这对于问题报告也非常有用。这些报告可以用于通过 <code>\'--create-environment-from-report\'</code> 轻松重新创建环境，但包含大量信息。默认关闭。</p>\n</li>\n<li>\n<p><code>--report-diffable</code>  以可比较的形式报告数据，即没有时间或内存使用值的变化。默认关闭。</p>\n</li>\n<li>\n<p><code>--report-user-provided=KEY_VALUE</code>  报告来自您的数据。可以多次提供，格式为 <code>\'key=value\'</code>，其中 <code>key</code> 应为标识符，例如，使用 <code>\'--report-user-provided=pipenv-lock-hash=64a5e4\'</code> 来跟踪某些输入值。默认为空。</p>\n</li>\n<li>\n<p><code>--report-template=REPORT_DESC</code>  通过模板进行报告。提供模板和输出文件名 <code>&quot;template.rst.j2:output.rst&quot;</code>。对于内置模板，请查看用户手册以了解这些模板是什么。可以多次提供。默认为空。</p>\n</li>\n<li>\n<p><code>--quiet</code>  禁用所有信息输出，但显示警告。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-scons</code>  以详细信息运行 C 构建后端 Scons，显示执行的命令和检测到的编译器。默认关闭。</p>\n</li>\n<li>\n<p><code>--no-progressbar</code>  禁用进度条。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-progress</code>  提供进度信息和统计信息。禁用正常的进度条。默认关闭。现在已经停止支持。</p>\n</li>\n<li>\n<p><code>--show-memory</code>  提供内存信息和统计信息。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-modules</code>  提供包含的模块和 DLL 的信息。已过时，你应该使用 <code>\'--report\'</code> 文件代替。默认关闭。</p>\n</li>\n<li>\n<p><code>--show-modules-output=PATH</code>  指定 <code>\'--show-modules\'</code> 的输出位置，应为文件名。默认为标准输出。</p>\n</li>\n<li>\n<p><code>--verbose</code>  输出所采取的行动的详细信息，特别是在优化中。可能会变得非常多。默认关闭。</p>\n</li>\n<li>\n<p><code>--verbose-output=PATH</code>  指定 <code>\'--verbose\'</code>。</p>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BC%BA%E5%A4%A7%E7%9A%84%E8%B0%83%E8%AF%95%E4%B8%8E%E8%BF%BD%E8%B8%AA%E6%8E%A7%E5%88%B6" }, "\u5F3A\u5927\u7684\u8C03\u8BD5\u4E0E\u8FFD\u8E2A\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%B0%83%E8%AF%95" }, "\u8C03\u8BD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8A%A5%E5%91%8A%E4%B8%8E%E8%BF%BD%E8%B8%AA" }, "\u62A5\u544A\u4E0E\u8FFD\u8E2A")),
            React.createElement("li", null,
                React.createElement("a", { href: "#reference" }, "Reference")))),
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-09-08T00:00:00.000Z",
    'updated': null,
    'excerpt': "强大的调试与追踪控制 其实在 Nuitka 中，自带了许多强大的调试和追踪报告功能，能够允许你对程序运行的诸多细节进行追踪和调试，这对于部署真正的生产级别的代码是至关重要地。但是在中文互联网甚至是英文我鲜少有看到实际介绍...",
    'cover': undefined,
    'tags': [
        "Python",
        "Nuitka"
    ],
    'blog': {
        "isPost": true,
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
