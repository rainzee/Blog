import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/nuitka-multi-os-support.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/nuitka-multi-os-support.html",
    'title': "Nuitka 多操作系统支持",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Nuitka 多操作系统支持</h1>\n<h2 id="nuitka-%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81">Nuitka 的跨平台支持<a class="anchor" href="#nuitka-%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81">§</a></h2>\n<p><code>Nuitka</code> 是跨平台支持的，对 Windows macOS 和 Linux 均有良好的支持，除了提供通用的操作系统支持之外，还针对三个操作系统做了特定控制的支持。下面将一一介绍。</p>\n<h2 id="%E9%80%9A%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6">通用操作系统控制<a class="anchor" href="#%E9%80%9A%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--disable-console</code> 在为 Windows 或 macOS 编译时，禁用控制台窗口并创建 GUI 应用程序。默认关闭。</p>\n</li>\n<li>\n<p><code>--enable-console</code> 在为 Windows 或 macOS 编译时，启用控制台窗口并创建控制台应用程序。这会禁用某些模块的提示，例如 <code>PySide</code>，建议禁用控制台。默认为 <code>true</code>。</p>\n</li>\n<li>\n<p><code>--force-stdout-spec=FORCE_STDOUT_SPEC</code> 强制将程序的标准输出发送到此位置。对于禁用控制台的程序和使用 Nuitka 商业版的 Windows Services 插件的程序非常有用。默认不激活，例如使用 <code>%PROGRAM_BASE%.out.txt</code>，即在程序附近的文件。</p>\n</li>\n<li>\n<p><code>--force-stderr-spec=FORCE_STDERR_SPEC</code> 强制将程序的标准错误发送到此位置。对于禁用控制台的程序和使用 Nuitka 商业版的 Windows Services 插件的程序非常有用。默认不激活，例如使用 <code>%PROGRAM_BASE%.err.txt</code>，即在程序附近的文件。</p>\n</li>\n</ul>\n<h2 id="windows-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">Windows 特定控制<a class="anchor" href="#windows-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--windows-icon-from-ico=ICON_PATH</code> 添加可执行文件图标。可以多次提供不同分辨率或具有多个图标的文件。在后一种情况下，还可以附加 <code>#&lt;n&gt;</code>，其中n是从1开始的整数索引，指定要包括的特定图标，所有其他图标都将被忽略。</p>\n</li>\n<li>\n<p><code>--windows-icon-from-exe=ICON_EXE_PATH</code> 从现有可执行文件中复制可执行文件图标（仅适用于Windows）。</p>\n</li>\n<li>\n<p><code>--onefile-windows-splash-screen-image=SPLASH_SCREEN_IMAGE</code> 在为Windows和onefile编译时，在加载应用程序时显示此图像。默认关闭。</p>\n</li>\n<li>\n<p><code>--windows-uac-admin</code> 请求Windows用户控制，以在执行时授予管理员权限（仅适用于Windows）。默认关闭。</p>\n</li>\n<li>\n<p><code>--windows-uac-uiaccess</code> 请求Windows用户控制，以强制仅从少数文件夹运行（仅适用于Windows远程桌面访问）。默认关闭。</p>\n</li>\n</ul>\n<h2 id="macos-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">macOS 特定控制<a class="anchor" href="#macos-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--macos-target-arch=MACOS_TARGET_ARCH</code> 指定该程序应该在哪些体系结构上运行。默认限制为当前运行Python允许的体系结构。默认为&quot;native&quot;，即与运行Python的体系结构相同。</p>\n</li>\n<li>\n<p><code>--macos-create-app-bundle</code> 在为 macOS 编译时，创建一个应用程序包而不是一个普通的二进制应用程序。目前是实验性和不完整的。目前这是解锁禁用控制台的唯一方法。默认关闭。</p>\n</li>\n<li>\n<p><code>--macos-app-icon=ICON_PATH</code> 为应用程序包添加图标以使用。只能提供一次。如果可用，将使用Python图标。默认情况下。</p>\n</li>\n<li>\n<p><code>--macos-signed-app-name=MACOS_SIGNED_APP_NAME</code> 用于 macOS 签名的应用程序的名称。最好按照 <code>com.YourCompany.AppName</code> 的命名结果进行命名，因为这些名称必须是全局唯一的，并且可能授予受保护的 API 访问权限。</p>\n</li>\n<li>\n<p><code>--macos-app-name=MACOS_APP_NAME</code> 在 macOS 包信息中使用的产品名称。默认为二进制文件的基本文件名。</p>\n</li>\n<li>\n<p><code>--macos-app-mode=MODE</code> 应用程序包的应用程序模式。当需要启动窗口并显示在 Docker 中时，默认值 <code>gui</code> 是一个很好的选择。如果根本没有窗口，该应用程序是一个 background 应用程序。对于稍后要显示的UI元素，ui-element 处于中间状态。该应用程序将不会出现在 dock 中，但在稍后打开窗口时将获得对桌面的完全访问。</p>\n</li>\n<li>\n<p><code>--macos-sign-identity=MACOS_APP_VERSION</code> 在 macOS 上签名时，默认情况下将使用临时标识符，但使用此选项，您可以指定另一个要使用的标识符。现在在 macOS 上强制签名代码，无法禁用。默认为 <code>ad-hoc</code>（即临时标识符）。</p>\n</li>\n<li>\n<p><code>--macos-sign-notarization</code> 在签名时进行标记，使用 Apple 的正确 TeamID 标识符，使用所需的运行时签名选项以便可以接受。</p>\n</li>\n<li>\n<p><code>--macos-app-version=MACOS_APP_VERSION</code> 在 macOS 包信息中使用的产品版本。默认为 <code>1.0</code>，如果未提供。</p>\n</li>\n<li>\n<p><code>--macos-app-protected-resource=RESOURCE_DESC</code> 请求访问 macOS 受保护资源的授权。例如，<code>NSMicrophoneUsageDescription:Microphone access for recording audio.</code> 请求访问麦克风并为用户提供有关为何需要该权限的信息。在冒号之前是一个 OS 标识符，用于访问权限的识别，然后是信息性文本。可以多次指定。默认为空。</p>\n</li>\n</ul>\n<h2 id="linux-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">Linux 特定控制<a class="anchor" href="#linux-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li><code>--linux-icon=ICON_PATH</code> 为 onefile 二进制文件添加可执行文件图标。只能提供一次。如果可用，将使用 Python 图标。</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "Nuitka \u591A\u64CD\u4F5C\u7CFB\u7EDF\u652F\u6301"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="nuitka-%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81">Nuitka 的跨平台支持<a class="anchor" href="#nuitka-%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81">§</a></h2>\n<p><code>Nuitka</code> 是跨平台支持的，对 Windows macOS 和 Linux 均有良好的支持，除了提供通用的操作系统支持之外，还针对三个操作系统做了特定控制的支持。下面将一一介绍。</p>\n<h2 id="%E9%80%9A%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6">通用操作系统控制<a class="anchor" href="#%E9%80%9A%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--disable-console</code> 在为 Windows 或 macOS 编译时，禁用控制台窗口并创建 GUI 应用程序。默认关闭。</p>\n</li>\n<li>\n<p><code>--enable-console</code> 在为 Windows 或 macOS 编译时，启用控制台窗口并创建控制台应用程序。这会禁用某些模块的提示，例如 <code>PySide</code>，建议禁用控制台。默认为 <code>true</code>。</p>\n</li>\n<li>\n<p><code>--force-stdout-spec=FORCE_STDOUT_SPEC</code> 强制将程序的标准输出发送到此位置。对于禁用控制台的程序和使用 Nuitka 商业版的 Windows Services 插件的程序非常有用。默认不激活，例如使用 <code>%PROGRAM_BASE%.out.txt</code>，即在程序附近的文件。</p>\n</li>\n<li>\n<p><code>--force-stderr-spec=FORCE_STDERR_SPEC</code> 强制将程序的标准错误发送到此位置。对于禁用控制台的程序和使用 Nuitka 商业版的 Windows Services 插件的程序非常有用。默认不激活，例如使用 <code>%PROGRAM_BASE%.err.txt</code>，即在程序附近的文件。</p>\n</li>\n</ul>\n<h2 id="windows-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">Windows 特定控制<a class="anchor" href="#windows-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--windows-icon-from-ico=ICON_PATH</code> 添加可执行文件图标。可以多次提供不同分辨率或具有多个图标的文件。在后一种情况下，还可以附加 <code>#&lt;n&gt;</code>，其中n是从1开始的整数索引，指定要包括的特定图标，所有其他图标都将被忽略。</p>\n</li>\n<li>\n<p><code>--windows-icon-from-exe=ICON_EXE_PATH</code> 从现有可执行文件中复制可执行文件图标（仅适用于Windows）。</p>\n</li>\n<li>\n<p><code>--onefile-windows-splash-screen-image=SPLASH_SCREEN_IMAGE</code> 在为Windows和onefile编译时，在加载应用程序时显示此图像。默认关闭。</p>\n</li>\n<li>\n<p><code>--windows-uac-admin</code> 请求Windows用户控制，以在执行时授予管理员权限（仅适用于Windows）。默认关闭。</p>\n</li>\n<li>\n<p><code>--windows-uac-uiaccess</code> 请求Windows用户控制，以强制仅从少数文件夹运行（仅适用于Windows远程桌面访问）。默认关闭。</p>\n</li>\n</ul>\n<h2 id="macos-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">macOS 特定控制<a class="anchor" href="#macos-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--macos-target-arch=MACOS_TARGET_ARCH</code> 指定该程序应该在哪些体系结构上运行。默认限制为当前运行Python允许的体系结构。默认为&quot;native&quot;，即与运行Python的体系结构相同。</p>\n</li>\n<li>\n<p><code>--macos-create-app-bundle</code> 在为 macOS 编译时，创建一个应用程序包而不是一个普通的二进制应用程序。目前是实验性和不完整的。目前这是解锁禁用控制台的唯一方法。默认关闭。</p>\n</li>\n<li>\n<p><code>--macos-app-icon=ICON_PATH</code> 为应用程序包添加图标以使用。只能提供一次。如果可用，将使用Python图标。默认情况下。</p>\n</li>\n<li>\n<p><code>--macos-signed-app-name=MACOS_SIGNED_APP_NAME</code> 用于 macOS 签名的应用程序的名称。最好按照 <code>com.YourCompany.AppName</code> 的命名结果进行命名，因为这些名称必须是全局唯一的，并且可能授予受保护的 API 访问权限。</p>\n</li>\n<li>\n<p><code>--macos-app-name=MACOS_APP_NAME</code> 在 macOS 包信息中使用的产品名称。默认为二进制文件的基本文件名。</p>\n</li>\n<li>\n<p><code>--macos-app-mode=MODE</code> 应用程序包的应用程序模式。当需要启动窗口并显示在 Docker 中时，默认值 <code>gui</code> 是一个很好的选择。如果根本没有窗口，该应用程序是一个 background 应用程序。对于稍后要显示的UI元素，ui-element 处于中间状态。该应用程序将不会出现在 dock 中，但在稍后打开窗口时将获得对桌面的完全访问。</p>\n</li>\n<li>\n<p><code>--macos-sign-identity=MACOS_APP_VERSION</code> 在 macOS 上签名时，默认情况下将使用临时标识符，但使用此选项，您可以指定另一个要使用的标识符。现在在 macOS 上强制签名代码，无法禁用。默认为 <code>ad-hoc</code>（即临时标识符）。</p>\n</li>\n<li>\n<p><code>--macos-sign-notarization</code> 在签名时进行标记，使用 Apple 的正确 TeamID 标识符，使用所需的运行时签名选项以便可以接受。</p>\n</li>\n<li>\n<p><code>--macos-app-version=MACOS_APP_VERSION</code> 在 macOS 包信息中使用的产品版本。默认为 <code>1.0</code>，如果未提供。</p>\n</li>\n<li>\n<p><code>--macos-app-protected-resource=RESOURCE_DESC</code> 请求访问 macOS 受保护资源的授权。例如，<code>NSMicrophoneUsageDescription:Microphone access for recording audio.</code> 请求访问麦克风并为用户提供有关为何需要该权限的信息。在冒号之前是一个 OS 标识符，用于访问权限的识别，然后是信息性文本。可以多次指定。默认为空。</p>\n</li>\n</ul>\n<h2 id="linux-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">Linux 特定控制<a class="anchor" href="#linux-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li><code>--linux-icon=ICON_PATH</code> 为 onefile 二进制文件添加可执行文件图标。只能提供一次。如果可用，将使用 Python 图标。</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#nuitka-%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81" }, "Nuitka \u7684\u8DE8\u5E73\u53F0\u652F\u6301")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%80%9A%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6" }, "\u901A\u7528\u64CD\u4F5C\u7CFB\u7EDF\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#windows-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6" }, "Windows \u7279\u5B9A\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#macos-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6" }, "macOS \u7279\u5B9A\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#linux-%E7%89%B9%E5%AE%9A%E6%8E%A7%E5%88%B6" }, "Linux \u7279\u5B9A\u63A7\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#reference" }, "Reference")))),
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-08-24T00:00:00.000Z",
    'updated': null,
    'excerpt': "Nuitka 的跨平台支持 Nuitka 是跨平台支持的，对 Windows macOS 和 Linux 均有良好的支持，除了提供通用的操作系统支持之外，还针对三个操作系统做了特定控制的支持。下面将一一介绍。 通用操作系统控制 - --disable-console 在...",
    'cover': undefined,
    'tags': [
        "Python",
        "Nuitka"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "count": 3
            },
            {
                "name": "Nuitka",
                "count": 2
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
