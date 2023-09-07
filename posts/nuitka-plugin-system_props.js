import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/nuitka-plugin-system.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/nuitka-plugin-system.html",
    'title': "Nuitka 插件系统",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Nuitka 插件系统</h1>\n<h2 id="%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F">插件系统<a class="anchor" href="#%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F">§</a></h2>\n<p>插件可用于自定义和优化 Nuitka 编译的行为，根据项目的需求选择适当的插件以获得最佳性能和功能。在某些情况下，如果未显式地启用插件可能会导致预期之外地错误。</p>\n<h2 id="%E6%8F%92%E4%BB%B6%E6%8E%A7%E5%88%B6">插件控制<a class="anchor" href="#%E6%8F%92%E4%BB%B6%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--enable-plugin=PLUGIN_NAME</code>: 启用插件。必须是插件名称。使用 <code>--plugin-list</code> 查询完整列表并退出。默认为空。</p>\n</li>\n<li>\n<p><code>--disable-plugin=PLUGIN_NAME</code>: 禁用插件。必须是插件名称。使用 <code>--plugin-list</code> 查询完整列表并退出。大多数标准插件禁用后可能不是一个好主意。默认为空。</p>\n</li>\n<li>\n<p><code>--plugin-no-detection</code>: 插件可以检测是否可能会被使用，然后您可以通过 <code>--disable-plugin=plugin-that-warned</code> 禁用警告，或者您可以使用此选项完全禁用机制，这也会稍微加快编译速度，因为这个检测代码在您确定要使用哪些插件后就是徒劳的。默认关闭。</p>\n</li>\n<li>\n<p><code>--plugin-list</code>: 显示所有可用插件的列表并退出。默认关闭。</p>\n</li>\n<li>\n<p><code>--user-plugin=PATH</code>: 用户插件的文件名。可以多次提供。默认为空。</p>\n</li>\n<li>\n<p><code>--show-source-changes</code>: 显示编译前原始Python文件内容的源更改。主要用于开发插件。默认为False。</p>\n</li>\n</ul>\n<h4 id="anti-bloat-%E6%8F%92%E4%BB%B6%E7%9A%84%E9%80%89%E9%A1%B9"><code>anti-bloat</code> 插件的选项<a class="anchor" href="#anti-bloat-%E6%8F%92%E4%BB%B6%E7%9A%84%E9%80%89%E9%A1%B9">§</a></h4>\n<ul>\n<li>\n<p><code>--show-anti-bloat-changes</code>: 注释插件所做的更改。</p>\n</li>\n<li>\n<p><code>--noinclude-setuptools-mode=NOINCLUDE_SETUPTOOLS_MODE</code>: 当遇到 <code>setuptools</code> 或相关导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。还处理 <code>setuptools_scm</code> 导入。</p>\n</li>\n<li>\n<p><code>--noinclude-pytest-mode=NOINCLUDE_PYTEST_MODE</code>: 当遇到 <code>pytest</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。还处理<code>nose</code>导入。</p>\n</li>\n<li>\n<p><code>--noinclude-unittest-mode=NOINCLUDE_UNITTEST_MODE</code>: 当遇到 <code>unittest</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-IPython-mode=NOINCLUDE_IPYTHON_MODE</code>: 当遇到 <code>IPython</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-dask-mode=NOINCLUDE_DASK_MODE</code>: 当遇到 <code>dask</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-numba-mode=NOINCLUDE_NUMBA_MODE</code>: 当遇到 <code>numba</code> 导入时的处理方式。这个包包含大量依赖项，目前不适用于独立模式。应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-default-mode=NOINCLUDE_DEFAULT_MODE</code>: 实际上提供了上述选项的默认 “warning” 值，可用于将所有这些选项都打开。</p>\n</li>\n<li>\n<p><code>--noinclude-custom-mode=CUSTOM_CHOICES</code>: 当遇到特定导入时的处理方式。格式为模块名称，这应该是一个顶级包，然后是一个选项，例如“error”，“warning”，“nofollow”，例如 <code>PyQt5:error</code>。</p>\n</li>\n</ul>\n<h2 id="%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">支持的插件<a class="anchor" href="#%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">§</a></h2>\n<ul>\n<li>\n<p><strong>anti-bloat</strong></p>\n<ul>\n<li>修补不必要的导入，来自库模块源代码。</li>\n</ul>\n</li>\n<li>\n<p><strong>data-files</strong></p>\n<ul>\n<li>包括包配置文件指定的数据文件。</li>\n</ul>\n</li>\n<li>\n<p><strong>delvewheel</strong></p>\n<ul>\n<li>支持使用delvewheel包的&quot;support&quot;，适用于独立模式。</li>\n</ul>\n</li>\n<li>\n<p><strong>dill-compat</strong></p>\n<ul>\n<li>用于与&quot;dill&quot;包兼容性的支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>dll-files</strong></p>\n<ul>\n<li>包括DLL，根据包配置文件。</li>\n</ul>\n</li>\n<li>\n<p><strong>enum-compat</strong></p>\n<ul>\n<li>支持Python 2 和&quot;enum&quot;包。</li>\n</ul>\n</li>\n<li>\n<p><strong>eventlet</strong></p>\n<ul>\n<li>支持&quot;eventlet&quot;依赖项和对&quot;dns&quot;包的猴子补丁。</li>\n</ul>\n</li>\n<li>\n<p><strong>gevent</strong></p>\n<ul>\n<li>为\'gevent\'包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>gi</strong></p>\n<ul>\n<li>支持GI包typelib依赖。</li>\n</ul>\n</li>\n<li>\n<p><strong>glfw</strong></p>\n<ul>\n<li>OpenGL和\'glfw\'包的支持，适用于独立模式。</li>\n</ul>\n</li>\n<li>\n<p><strong>implicit-imports</strong></p>\n<ul>\n<li>根据包配置文件提供包的隐式导入。</li>\n</ul>\n</li>\n<li>\n<p><strong>kivy</strong></p>\n<ul>\n<li>为\'kivy\'包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>matplotlib</strong></p>\n<ul>\n<li>支持\'matplotlib\'模块。</li>\n</ul>\n</li>\n<li>\n<p><strong>multiprocessing</strong></p>\n<ul>\n<li>支持Python的\'multiprocessing\'模块。</li>\n</ul>\n</li>\n<li>\n<p><strong>no-qt</strong></p>\n<ul>\n<li>禁用所有Qt绑定，适用于独立模式。</li>\n</ul>\n</li>\n<li>\n<p><strong>options-nanny</strong></p>\n<ul>\n<li>根据包配置文件通知用户潜在问题。</li>\n</ul>\n</li>\n<li>\n<p><strong>pbr-compat</strong></p>\n<ul>\n<li>为\'pbr\'包在独立模式下提供兼容性支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pkg-resources</strong></p>\n<ul>\n<li>解决\'pkg_resources\'的问题。</li>\n</ul>\n</li>\n<li>\n<p><strong>pmw-freezer</strong></p>\n<ul>\n<li>为\'Pmw\'包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pylint-warnings</strong></p>\n<ul>\n<li>支持PyLint / PyDev的linting源标记。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyqt5</strong></p>\n<ul>\n<li>为PyQt5包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyqt6</strong></p>\n<ul>\n<li>为PyQt6包在独立模式下提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyside2</strong></p>\n<ul>\n<li>为PySide2包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyside6</strong></p>\n<ul>\n<li>为PySide6包在独立模式下提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pywebview</strong></p>\n<ul>\n<li>为\'webview\'包 (PyPI上的pywebview) 提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>tk-inter</strong></p>\n<ul>\n<li>支持Python的Tk模块。</li>\n</ul>\n</li>\n<li>\n<p><strong>transformers</strong></p>\n<ul>\n<li>为transformers包提供隐式导入。</li>\n</ul>\n</li>\n<li>\n<p><strong>upx</strong></p>\n<ul>\n<li>自动使用UPX压缩创建的二进制文件。</li>\n</ul>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "Nuitka \u63D2\u4EF6\u7CFB\u7EDF"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F">插件系统<a class="anchor" href="#%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F">§</a></h2>\n<p>插件可用于自定义和优化 Nuitka 编译的行为，根据项目的需求选择适当的插件以获得最佳性能和功能。在某些情况下，如果未显式地启用插件可能会导致预期之外地错误。</p>\n<h2 id="%E6%8F%92%E4%BB%B6%E6%8E%A7%E5%88%B6">插件控制<a class="anchor" href="#%E6%8F%92%E4%BB%B6%E6%8E%A7%E5%88%B6">§</a></h2>\n<ul>\n<li>\n<p><code>--enable-plugin=PLUGIN_NAME</code>: 启用插件。必须是插件名称。使用 <code>--plugin-list</code> 查询完整列表并退出。默认为空。</p>\n</li>\n<li>\n<p><code>--disable-plugin=PLUGIN_NAME</code>: 禁用插件。必须是插件名称。使用 <code>--plugin-list</code> 查询完整列表并退出。大多数标准插件禁用后可能不是一个好主意。默认为空。</p>\n</li>\n<li>\n<p><code>--plugin-no-detection</code>: 插件可以检测是否可能会被使用，然后您可以通过 <code>--disable-plugin=plugin-that-warned</code> 禁用警告，或者您可以使用此选项完全禁用机制，这也会稍微加快编译速度，因为这个检测代码在您确定要使用哪些插件后就是徒劳的。默认关闭。</p>\n</li>\n<li>\n<p><code>--plugin-list</code>: 显示所有可用插件的列表并退出。默认关闭。</p>\n</li>\n<li>\n<p><code>--user-plugin=PATH</code>: 用户插件的文件名。可以多次提供。默认为空。</p>\n</li>\n<li>\n<p><code>--show-source-changes</code>: 显示编译前原始Python文件内容的源更改。主要用于开发插件。默认为False。</p>\n</li>\n</ul>\n<h4 id="anti-bloat-%E6%8F%92%E4%BB%B6%E7%9A%84%E9%80%89%E9%A1%B9"><code>anti-bloat</code> 插件的选项<a class="anchor" href="#anti-bloat-%E6%8F%92%E4%BB%B6%E7%9A%84%E9%80%89%E9%A1%B9">§</a></h4>\n<ul>\n<li>\n<p><code>--show-anti-bloat-changes</code>: 注释插件所做的更改。</p>\n</li>\n<li>\n<p><code>--noinclude-setuptools-mode=NOINCLUDE_SETUPTOOLS_MODE</code>: 当遇到 <code>setuptools</code> 或相关导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。还处理 <code>setuptools_scm</code> 导入。</p>\n</li>\n<li>\n<p><code>--noinclude-pytest-mode=NOINCLUDE_PYTEST_MODE</code>: 当遇到 <code>pytest</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。还处理<code>nose</code>导入。</p>\n</li>\n<li>\n<p><code>--noinclude-unittest-mode=NOINCLUDE_UNITTEST_MODE</code>: 当遇到 <code>unittest</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-IPython-mode=NOINCLUDE_IPYTHON_MODE</code>: 当遇到 <code>IPython</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-dask-mode=NOINCLUDE_DASK_MODE</code>: 当遇到 <code>dask</code> 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-numba-mode=NOINCLUDE_NUMBA_MODE</code>: 当遇到 <code>numba</code> 导入时的处理方式。这个包包含大量依赖项，目前不适用于独立模式。应该绝对避免。</p>\n</li>\n<li>\n<p><code>--noinclude-default-mode=NOINCLUDE_DEFAULT_MODE</code>: 实际上提供了上述选项的默认 “warning” 值，可用于将所有这些选项都打开。</p>\n</li>\n<li>\n<p><code>--noinclude-custom-mode=CUSTOM_CHOICES</code>: 当遇到特定导入时的处理方式。格式为模块名称，这应该是一个顶级包，然后是一个选项，例如“error”，“warning”，“nofollow”，例如 <code>PyQt5:error</code>。</p>\n</li>\n</ul>\n<h2 id="%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">支持的插件<a class="anchor" href="#%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">§</a></h2>\n<ul>\n<li>\n<p><strong>anti-bloat</strong></p>\n<ul>\n<li>修补不必要的导入，来自库模块源代码。</li>\n</ul>\n</li>\n<li>\n<p><strong>data-files</strong></p>\n<ul>\n<li>包括包配置文件指定的数据文件。</li>\n</ul>\n</li>\n<li>\n<p><strong>delvewheel</strong></p>\n<ul>\n<li>支持使用delvewheel包的&quot;support&quot;，适用于独立模式。</li>\n</ul>\n</li>\n<li>\n<p><strong>dill-compat</strong></p>\n<ul>\n<li>用于与&quot;dill&quot;包兼容性的支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>dll-files</strong></p>\n<ul>\n<li>包括DLL，根据包配置文件。</li>\n</ul>\n</li>\n<li>\n<p><strong>enum-compat</strong></p>\n<ul>\n<li>支持Python 2 和&quot;enum&quot;包。</li>\n</ul>\n</li>\n<li>\n<p><strong>eventlet</strong></p>\n<ul>\n<li>支持&quot;eventlet&quot;依赖项和对&quot;dns&quot;包的猴子补丁。</li>\n</ul>\n</li>\n<li>\n<p><strong>gevent</strong></p>\n<ul>\n<li>为\'gevent\'包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>gi</strong></p>\n<ul>\n<li>支持GI包typelib依赖。</li>\n</ul>\n</li>\n<li>\n<p><strong>glfw</strong></p>\n<ul>\n<li>OpenGL和\'glfw\'包的支持，适用于独立模式。</li>\n</ul>\n</li>\n<li>\n<p><strong>implicit-imports</strong></p>\n<ul>\n<li>根据包配置文件提供包的隐式导入。</li>\n</ul>\n</li>\n<li>\n<p><strong>kivy</strong></p>\n<ul>\n<li>为\'kivy\'包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>matplotlib</strong></p>\n<ul>\n<li>支持\'matplotlib\'模块。</li>\n</ul>\n</li>\n<li>\n<p><strong>multiprocessing</strong></p>\n<ul>\n<li>支持Python的\'multiprocessing\'模块。</li>\n</ul>\n</li>\n<li>\n<p><strong>no-qt</strong></p>\n<ul>\n<li>禁用所有Qt绑定，适用于独立模式。</li>\n</ul>\n</li>\n<li>\n<p><strong>options-nanny</strong></p>\n<ul>\n<li>根据包配置文件通知用户潜在问题。</li>\n</ul>\n</li>\n<li>\n<p><strong>pbr-compat</strong></p>\n<ul>\n<li>为\'pbr\'包在独立模式下提供兼容性支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pkg-resources</strong></p>\n<ul>\n<li>解决\'pkg_resources\'的问题。</li>\n</ul>\n</li>\n<li>\n<p><strong>pmw-freezer</strong></p>\n<ul>\n<li>为\'Pmw\'包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pylint-warnings</strong></p>\n<ul>\n<li>支持PyLint / PyDev的linting源标记。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyqt5</strong></p>\n<ul>\n<li>为PyQt5包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyqt6</strong></p>\n<ul>\n<li>为PyQt6包在独立模式下提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyside2</strong></p>\n<ul>\n<li>为PySide2包提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pyside6</strong></p>\n<ul>\n<li>为PySide6包在独立模式下提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>pywebview</strong></p>\n<ul>\n<li>为\'webview\'包 (PyPI上的pywebview) 提供支持。</li>\n</ul>\n</li>\n<li>\n<p><strong>tk-inter</strong></p>\n<ul>\n<li>支持Python的Tk模块。</li>\n</ul>\n</li>\n<li>\n<p><strong>transformers</strong></p>\n<ul>\n<li>为transformers包提供隐式导入。</li>\n</ul>\n</li>\n<li>\n<p><strong>upx</strong></p>\n<ul>\n<li>自动使用UPX压缩创建的二进制文件。</li>\n</ul>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://nuitka.net/">Nuitka the Python Compiler — Nuitka the Python Compiler documentation</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F" }, "\u63D2\u4EF6\u7CFB\u7EDF")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8F%92%E4%BB%B6%E6%8E%A7%E5%88%B6" }, "\u63D2\u4EF6\u63A7\u5236"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6" }, "\u652F\u6301\u7684\u63D2\u4EF6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#reference" }, "Reference")))),
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-08-23T00:00:00.000Z",
    'updated': null,
    'excerpt': "插件系统 插件可用于自定义和优化 Nuitka 编译的行为，根据项目的需求选择适当的插件以获得最佳性能和功能。在某些情况下，如果未显式地启用插件可能会导致预期之外地错误。 插件控制 - --enable-plugin=PLUGIN_NAME: 启用插件...",
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
