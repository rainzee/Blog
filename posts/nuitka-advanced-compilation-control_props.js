import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/nuitka-advanced-compilation-control.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/nuitka-advanced-compilation-control.html",
    'title': "Nuitka 高级编译控制",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Nuitka 高级编译控制</h1>\n<h2 id="%E8%BF%9B%E9%98%B6%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">进阶编译控制<a class="anchor" href="#%E8%BF%9B%E9%98%B6%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">§</a></h2>\n<p>从这里开始，我们可以更加精细的控制 Nuitka 的编译控制，包括控制 C 编译器，启用链接优化，控制缓存，启用 C 级别的分析优化，注意，这些控制涉及到 C 级别的控制，如果你不知道自己做什么，那么请不要尝试，可能导致无法预知的行为。</p>\n<h2 id="c-%E7%BC%96%E8%AF%91%E5%99%A8%E6%8E%A7%E5%88%B6">C 编译器控制<a class="anchor" href="#c-%E7%BC%96%E8%AF%91%E5%99%A8%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--clang</code>  强制使用 clang 编译器。在 Windows 上，这需要一个可用的 Visual Studio版本来支持。默认关闭。</p>\n</li>\n<li>\n<p><code>--mingw64</code>  强制在 Windows 上使用 MinGW64。默认关闭，除非使用 MSYS2 与 MinGW  Python。</p>\n</li>\n<li>\n<p><code>--msvc=MSVC_VERSION</code>  强制在 Windows 上使用特定的 MSVC 版本。允许的值例如 <code>&quot;14.3&quot;（MSVC 2022）</code> 和其他 MSVC 版本号，指定 <code>&quot;list&quot;</code> 以获取已安装的编译器列表，或使用 <code>&quot;latest&quot;</code>。默认为安装的最新 MSVC 版本，否则使用 MinGW64。</p>\n</li>\n<li>\n<p><code>--jobs=N</code>  指定允许的并行 C 编译器作业数量。默认为系统CPU数量。如果编译期间负载过大，可能手动指定，但是我一般在编译的时候去摸鱼。</p>\n</li>\n<li>\n<p><code>--lto=choice</code>  使用链接时间优化（MSVC、gcc、clang）。允许的值为 <code>&quot;yes&quot;</code>、<code>&quot;no&quot;</code> 和 <code>&quot;auto&quot;</code>（已知可用时）。默认为 <code>&quot;auto&quot;</code>。</p>\n</li>\n<li>\n<p><code>--static-libpython=choice</code>  使用 Python 的静态链接库。允许的值为 <code>&quot;yes&quot;</code>、<code>&quot;no&quot;</code> 和 <code>&quot;auto&quot;</code>（已知可用时）。默认为 <code>&quot;auto&quot;</code>。</p>\n</li>\n</ul>\n<h2 id="%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6">缓存控制<a class="anchor" href="#%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--disable-cache=DISABLED_CACHES</code>  禁用选定的缓存，指定 <code>&quot;all&quot;</code> 以禁用所有缓存。目前允许的值包括：<code>&quot;all&quot;</code>、<code>&quot;ccache&quot;</code>、<code>&quot;bytecode&quot;</code>、<code>&quot;dll-dependencies&quot;</code>。可以多次指定或以逗号分隔的方式提供。默认为无。</p>\n</li>\n<li>\n<p><code>--clean-cache=CLEAN_CACHES</code>  在执行之前清除给定的缓存，指定 <code>&quot;all&quot;</code> 以清除所有缓存。目前允许的值包括：<code>&quot;all&quot;</code>、<code>&quot;ccache&quot;</code>、<code>&quot;bytecode&quot;</code>、<code>&quot;dll-dependencies&quot;</code>。可以多次指定或以逗号分隔的方式提供。默认为无。</p>\n</li>\n<li>\n<p><code>--disable-bytecode-cache</code>  不重用模块的依赖分析结果，特别是来自标准库的模块，它们被包含为字节码。等同于 <code>--disable-cache=bytecode</code>。</p>\n</li>\n<li>\n<p><code>--disable-ccache</code>  不尝试使用 ccache（gcc、clang等）或 clcache（MSVC、clangcl）。等同于 <code>--disable-cache=ccache</code>。</p>\n</li>\n<li>\n<p><code>--disable-dll-dependency-cache</code>  禁用依赖关系分析器缓存。这将导致创建分发文件夹的时间大大增加，但如果怀疑缓存可能导致错误，则可能会使用它。等同于 <code>--disable-cache=dll-dependencies</code>。</p>\n</li>\n<li>\n<p><code>--force-dll-dependency-cache-update</code>  用于更新依赖关系分析器缓存。这将导致创建分发文件夹的时间大大增加，但如果怀疑缓存可能导致错误或已知需要更新，则可能会使用它。</p>\n</li>\n</ul>\n<h2 id="pgo-%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">PGO 编译控制<a class="anchor" href="#pgo-%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--pgo</code>  启用 C 级别的分析优化（PGO），通过首先执行专用的构建以进行分析运行，然后将结果反馈到 C 编译中。注意：这是实验性的，尚不适用于 Nuitka 的独立模式。默认关闭。</p>\n</li>\n<li>\n<p><code>--pgo-args=PGO_ARGS</code>  在进行分析优化时要传递的参数。这些参数传递给在 PGO 分析运行期间使用的特殊构建可执行文件。默认为空。</p>\n</li>\n<li>\n<p><code>--pgo-executable=PGO_EXECUTABLE</code>  在收集配置文件信息时要执行的命令。仅在需要通过准备运行它的脚本来启动它时使用。默认使用创建的程序。</p>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "Nuitka \u9AD8\u7EA7\u7F16\u8BD1\u63A7\u5236"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E8%BF%9B%E9%98%B6%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">进阶编译控制<a class="anchor" href="#%E8%BF%9B%E9%98%B6%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">§</a></h2>\n<p>从这里开始，我们可以更加精细的控制 Nuitka 的编译控制，包括控制 C 编译器，启用链接优化，控制缓存，启用 C 级别的分析优化，注意，这些控制涉及到 C 级别的控制，如果你不知道自己做什么，那么请不要尝试，可能导致无法预知的行为。</p>\n<h2 id="c-%E7%BC%96%E8%AF%91%E5%99%A8%E6%8E%A7%E5%88%B6">C 编译器控制<a class="anchor" href="#c-%E7%BC%96%E8%AF%91%E5%99%A8%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--clang</code>  强制使用 clang 编译器。在 Windows 上，这需要一个可用的 Visual Studio版本来支持。默认关闭。</p>\n</li>\n<li>\n<p><code>--mingw64</code>  强制在 Windows 上使用 MinGW64。默认关闭，除非使用 MSYS2 与 MinGW  Python。</p>\n</li>\n<li>\n<p><code>--msvc=MSVC_VERSION</code>  强制在 Windows 上使用特定的 MSVC 版本。允许的值例如 <code>&quot;14.3&quot;（MSVC 2022）</code> 和其他 MSVC 版本号，指定 <code>&quot;list&quot;</code> 以获取已安装的编译器列表，或使用 <code>&quot;latest&quot;</code>。默认为安装的最新 MSVC 版本，否则使用 MinGW64。</p>\n</li>\n<li>\n<p><code>--jobs=N</code>  指定允许的并行 C 编译器作业数量。默认为系统CPU数量。如果编译期间负载过大，可能手动指定，但是我一般在编译的时候去摸鱼。</p>\n</li>\n<li>\n<p><code>--lto=choice</code>  使用链接时间优化（MSVC、gcc、clang）。允许的值为 <code>&quot;yes&quot;</code>、<code>&quot;no&quot;</code> 和 <code>&quot;auto&quot;</code>（已知可用时）。默认为 <code>&quot;auto&quot;</code>。</p>\n</li>\n<li>\n<p><code>--static-libpython=choice</code>  使用 Python 的静态链接库。允许的值为 <code>&quot;yes&quot;</code>、<code>&quot;no&quot;</code> 和 <code>&quot;auto&quot;</code>（已知可用时）。默认为 <code>&quot;auto&quot;</code>。</p>\n</li>\n</ul>\n<h2 id="%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6">缓存控制<a class="anchor" href="#%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--disable-cache=DISABLED_CACHES</code>  禁用选定的缓存，指定 <code>&quot;all&quot;</code> 以禁用所有缓存。目前允许的值包括：<code>&quot;all&quot;</code>、<code>&quot;ccache&quot;</code>、<code>&quot;bytecode&quot;</code>、<code>&quot;dll-dependencies&quot;</code>。可以多次指定或以逗号分隔的方式提供。默认为无。</p>\n</li>\n<li>\n<p><code>--clean-cache=CLEAN_CACHES</code>  在执行之前清除给定的缓存，指定 <code>&quot;all&quot;</code> 以清除所有缓存。目前允许的值包括：<code>&quot;all&quot;</code>、<code>&quot;ccache&quot;</code>、<code>&quot;bytecode&quot;</code>、<code>&quot;dll-dependencies&quot;</code>。可以多次指定或以逗号分隔的方式提供。默认为无。</p>\n</li>\n<li>\n<p><code>--disable-bytecode-cache</code>  不重用模块的依赖分析结果，特别是来自标准库的模块，它们被包含为字节码。等同于 <code>--disable-cache=bytecode</code>。</p>\n</li>\n<li>\n<p><code>--disable-ccache</code>  不尝试使用 ccache（gcc、clang等）或 clcache（MSVC、clangcl）。等同于 <code>--disable-cache=ccache</code>。</p>\n</li>\n<li>\n<p><code>--disable-dll-dependency-cache</code>  禁用依赖关系分析器缓存。这将导致创建分发文件夹的时间大大增加，但如果怀疑缓存可能导致错误，则可能会使用它。等同于 <code>--disable-cache=dll-dependencies</code>。</p>\n</li>\n<li>\n<p><code>--force-dll-dependency-cache-update</code>  用于更新依赖关系分析器缓存。这将导致创建分发文件夹的时间大大增加，但如果怀疑缓存可能导致错误或已知需要更新，则可能会使用它。</p>\n</li>\n</ul>\n<h2 id="pgo-%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">PGO 编译控制<a class="anchor" href="#pgo-%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--pgo</code>  启用 C 级别的分析优化（PGO），通过首先执行专用的构建以进行分析运行，然后将结果反馈到 C 编译中。注意：这是实验性的，尚不适用于 Nuitka 的独立模式。默认关闭。</p>\n</li>\n<li>\n<p><code>--pgo-args=PGO_ARGS</code>  在进行分析优化时要传递的参数。这些参数传递给在 PGO 分析运行期间使用的特殊构建可执行文件。默认为空。</p>\n</li>\n<li>\n<p><code>--pgo-executable=PGO_EXECUTABLE</code>  在收集配置文件信息时要执行的命令。仅在需要通过准备运行它的脚本来启动它时使用。默认使用创建的程序。</p>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%BF%9B%E9%98%B6%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6" }, "\u8FDB\u9636\u7F16\u8BD1\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#c-%E7%BC%96%E8%AF%91%E5%99%A8%E6%8E%A7%E5%88%B6" }, "C \u7F16\u8BD1\u5668\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6" }, "\u7F13\u5B58\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#pgo-%E7%BC%96%E8%AF%91%E6%8E%A7%E5%88%B6" }, "PGO \u7F16\u8BD1\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#reference" }, "Reference")))),
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-08-31T00:00:00.000Z",
    'updated': null,
    'excerpt': "进阶编译控制 从这里开始，我们可以更加精细的控制 Nuitka 的编译控制，包括控制 C 编译器，启用链接优化，控制缓存，启用 C 级别的分析优化，注意，这些控制涉及到 C 级别的控制，如果你不知道自己做什么，那么请不要尝试，可...",
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
