import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/compilation-output-and-completion-control.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/compilation-output-and-completion-control.html",
    'title': "Nuitka 编译输出和完成时控制",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Nuitka 编译输出和完成时控制</h1>\n<h2 id="%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9%E5%92%8C%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA%E6%8E%A7%E5%88%B6">编译选项和完成时行为控制<a class="anchor" href="#%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9%E5%92%8C%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA%E6%8E%A7%E5%88%B6">§</a></h2>\n<p>在编译完成后，我们可以立刻启动或者直接进入调试，在编译过程中我们也可以严格规定兼容 CPython，以及控制产物的输出等等。</p>\n<h2 id="%E7%BC%96%E8%AF%91%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA">编译完成时行为<a class="anchor" href="#%E7%BC%96%E8%AF%91%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA">§</a></h2>\n<ul>\n<li>\n<p><code>--run</code>  立即执行创建的二进制文件（或导入已编译的模块）。默认关闭。</p>\n</li>\n<li>\n<p><code>--debugger</code>  在调试器中执行，例如 <code>gdb</code> 或 <code>lldb</code>，以自动获取堆栈跟踪。默认关闭。</p>\n</li>\n<li>\n<p><code>--execute-with-pythonpath</code>  在使用 <code>--run</code> 立即执行创建的二进制文件或模块时，不重置 <code>PYTHONPATH</code> 环境变量。当所有模块都成功包含时，不再需要 <code>PYTHONPATH</code>，特别是在独立模式下。这非常适合调试不同版本。</p>\n</li>\n</ul>\n<h2 id="%E7%BC%96%E8%AF%91%E9%80%89%E6%8B%A9">编译选择<a class="anchor" href="#%E7%BC%96%E8%AF%91%E9%80%89%E6%8B%A9">§</a></h2>\n<ul>\n<li>\n<p><code>--user-package-configuration-file=YAML_FILENAME</code>  用户提供的包配置的 YAML 文件。可以包括 DLL，删除庞杂内容，添加隐藏的依赖项。查看用户手册以获取要使用的格式的完整描述。可以多次提供。默认为空。</p>\n</li>\n<li>\n<p><code>--full-compat</code>  强制与 CPython 的绝对兼容性。甚至不允许对 CPython 行为的微小偏差，例如没有更好的回溯或不真正不兼容但只是不同或更差的异常消息。<strong>这仅用于测试，不应使用</strong>。</p>\n</li>\n<li>\n<p><code>--file-reference-choice=MODE</code>  选择 <code>__file__</code> 的值。使用 <code>runtime</code>（独立二进制模式和模块模式的默认值）时，创建的二进制文件和模块使用它们自身的位置来推断 <code>__file__</code> 的值。包含的包会伪装成在该位置下的目录中。这允许在部署中包含数据文件。如果您只是寻求加速，最好使用 <code>original</code> 值，其中源文件位置将被使用。使用 <code>frozen </code>时，使用 <code>&lt;frozen module_name&gt;</code> 的表示法。出于兼容性原因，<code>__file__</code> 值始终将具有 &quot;.py&quot; 后缀，不管它实际上是什么。这里其实我也没有搞球太懂。</p>\n</li>\n<li>\n<p><code>--module-name-choice=MODE</code>  选择 <code>__name__</code> 和 <code>__package__</code> 的值。使用 <code>runtime</code>（模块模式的默认值）时，创建的模块使用父包来推断 <code>__package__</code> 的值，以实现完全兼容。使用 <code>original</code>（其他模式的默认值）允许进行更多的静态优化，但对于通常可以加载到任何包中的模块来说是不兼容的。也是没搞懂。</p>\n</li>\n</ul>\n<h2 id="%E8%BE%93%E5%87%BA%E9%80%89%E9%A1%B9">输出选项<a class="anchor" href="#%E8%BE%93%E5%87%BA%E9%80%89%E9%A1%B9">§</a></h2>\n<ul>\n<li>\n<p><code>--output-filename=FILENAME</code>  指定可执行文件的命名方式。对于扩展模块，没有选择，也不适用于独立模式，使用它将会报错。但是，它可能包含需要存在的路径信息。默认为平台上的 \'&lt;program_name&gt;\' + \'.exe\'。</p>\n</li>\n<li>\n<p><code>--output-dir=DIRECTORY</code>  指定中间和最终输出文件的位置。DIRECTORY将填充具有构建文件夹、分发文件夹、二进制文件等的文件夹。默认为当前目录。</p>\n</li>\n<li>\n<p><code>--remove-output</code>  在生成模块或二进制产物后删除构建目录。默认关闭。</p>\n</li>\n<li>\n<p><code>--no-pyi-file</code>  不为由 Nuitka 创建的扩展模块创建 &quot;.pyi&quot; 文件。这用于检测隐式导入。默认关闭。</p>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "Nuitka \u7F16\u8BD1\u8F93\u51FA\u548C\u5B8C\u6210\u65F6\u63A7\u5236"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9%E5%92%8C%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA%E6%8E%A7%E5%88%B6">编译选项和完成时行为控制<a class="anchor" href="#%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9%E5%92%8C%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA%E6%8E%A7%E5%88%B6">§</a></h2>\n<p>在编译完成后，我们可以立刻启动或者直接进入调试，在编译过程中我们也可以严格规定兼容 CPython，以及控制产物的输出等等。</p>\n<h2 id="%E7%BC%96%E8%AF%91%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA">编译完成时行为<a class="anchor" href="#%E7%BC%96%E8%AF%91%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA">§</a></h2>\n<ul>\n<li>\n<p><code>--run</code>  立即执行创建的二进制文件（或导入已编译的模块）。默认关闭。</p>\n</li>\n<li>\n<p><code>--debugger</code>  在调试器中执行，例如 <code>gdb</code> 或 <code>lldb</code>，以自动获取堆栈跟踪。默认关闭。</p>\n</li>\n<li>\n<p><code>--execute-with-pythonpath</code>  在使用 <code>--run</code> 立即执行创建的二进制文件或模块时，不重置 <code>PYTHONPATH</code> 环境变量。当所有模块都成功包含时，不再需要 <code>PYTHONPATH</code>，特别是在独立模式下。这非常适合调试不同版本。</p>\n</li>\n</ul>\n<h2 id="%E7%BC%96%E8%AF%91%E9%80%89%E6%8B%A9">编译选择<a class="anchor" href="#%E7%BC%96%E8%AF%91%E9%80%89%E6%8B%A9">§</a></h2>\n<ul>\n<li>\n<p><code>--user-package-configuration-file=YAML_FILENAME</code>  用户提供的包配置的 YAML 文件。可以包括 DLL，删除庞杂内容，添加隐藏的依赖项。查看用户手册以获取要使用的格式的完整描述。可以多次提供。默认为空。</p>\n</li>\n<li>\n<p><code>--full-compat</code>  强制与 CPython 的绝对兼容性。甚至不允许对 CPython 行为的微小偏差，例如没有更好的回溯或不真正不兼容但只是不同或更差的异常消息。<strong>这仅用于测试，不应使用</strong>。</p>\n</li>\n<li>\n<p><code>--file-reference-choice=MODE</code>  选择 <code>__file__</code> 的值。使用 <code>runtime</code>（独立二进制模式和模块模式的默认值）时，创建的二进制文件和模块使用它们自身的位置来推断 <code>__file__</code> 的值。包含的包会伪装成在该位置下的目录中。这允许在部署中包含数据文件。如果您只是寻求加速，最好使用 <code>original</code> 值，其中源文件位置将被使用。使用 <code>frozen </code>时，使用 <code>&lt;frozen module_name&gt;</code> 的表示法。出于兼容性原因，<code>__file__</code> 值始终将具有 &quot;.py&quot; 后缀，不管它实际上是什么。这里其实我也没有搞球太懂。</p>\n</li>\n<li>\n<p><code>--module-name-choice=MODE</code>  选择 <code>__name__</code> 和 <code>__package__</code> 的值。使用 <code>runtime</code>（模块模式的默认值）时，创建的模块使用父包来推断 <code>__package__</code> 的值，以实现完全兼容。使用 <code>original</code>（其他模式的默认值）允许进行更多的静态优化，但对于通常可以加载到任何包中的模块来说是不兼容的。也是没搞懂。</p>\n</li>\n</ul>\n<h2 id="%E8%BE%93%E5%87%BA%E9%80%89%E9%A1%B9">输出选项<a class="anchor" href="#%E8%BE%93%E5%87%BA%E9%80%89%E9%A1%B9">§</a></h2>\n<ul>\n<li>\n<p><code>--output-filename=FILENAME</code>  指定可执行文件的命名方式。对于扩展模块，没有选择，也不适用于独立模式，使用它将会报错。但是，它可能包含需要存在的路径信息。默认为平台上的 \'&lt;program_name&gt;\' + \'.exe\'。</p>\n</li>\n<li>\n<p><code>--output-dir=DIRECTORY</code>  指定中间和最终输出文件的位置。DIRECTORY将填充具有构建文件夹、分发文件夹、二进制文件等的文件夹。默认为当前目录。</p>\n</li>\n<li>\n<p><code>--remove-output</code>  在生成模块或二进制产物后删除构建目录。默认关闭。</p>\n</li>\n<li>\n<p><code>--no-pyi-file</code>  不为由 Nuitka 创建的扩展模块创建 &quot;.pyi&quot; 文件。这用于检测隐式导入。默认关闭。</p>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9%E5%92%8C%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA%E6%8E%A7%E5%88%B6" }, "\u7F16\u8BD1\u9009\u9879\u548C\u5B8C\u6210\u65F6\u884C\u4E3A\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BC%96%E8%AF%91%E5%AE%8C%E6%88%90%E6%97%B6%E8%A1%8C%E4%B8%BA" }, "\u7F16\u8BD1\u5B8C\u6210\u65F6\u884C\u4E3A")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BC%96%E8%AF%91%E9%80%89%E6%8B%A9" }, "\u7F16\u8BD1\u9009\u62E9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%BE%93%E5%87%BA%E9%80%89%E9%A1%B9" }, "\u8F93\u51FA\u9009\u9879")),
            React.createElement("li", null,
                React.createElement("a", { href: "#reference" }, "Reference")))),
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-09-18T00:00:00.000Z",
    'updated': null,
    'excerpt': "编译选项和完成时行为控制 在编译完成后，我们可以立刻启动或者直接进入调试，在编译过程中我们也可以严格规定兼容 CPython，以及控制产物的输出等等。 编译完成时行为 - --run 立即执行创建的二进制文件（或导入已编译的模块）...",
    'cover': undefined,
    'tags': [
        "Python",
        "Nuitka"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/compilation-output-and-completion-control.md",
                "title": "Nuitka 编译输出和完成时控制",
                "link": "posts/compilation-output-and-completion-control.html",
                "date": "2023-09-18T00:00:00.000Z",
                "updated": null,
                "author": "rainzee",
                "contributors": [
                    "rainzee"
                ],
                "tags": [
                    "Python",
                    "Nuitka"
                ],
                "excerpt": "编译选项和完成时行为控制 在编译完成后，我们可以立刻启动或者直接进入调试，在编译过程中我们也可以严格规定兼容 CPython，以及控制产物的输出等等。 编译完成时行为 - --run 立即执行创建的二进制文件（或导入已编译的模块）..."
            },
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
                "count": 7
            },
            {
                "name": "Nuitka",
                "count": 6
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
