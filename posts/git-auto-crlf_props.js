import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/git-auto-crlf.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/git-auto-crlf.html",
    'title': "LF will be replaced by CRLF",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>LF will be replaced by CRLF</h1>\n<h2 id="%E8%AD%A6%E5%91%8A%E5%87%BA%E7%8E%B0%E7%9A%84%E5%8E%9F%E5%9B%A0">警告出现的原因<a class="anchor" href="#%E8%AD%A6%E5%91%8A%E5%87%BA%E7%8E%B0%E7%9A%84%E5%8E%9F%E5%9B%A0">§</a></h2>\n<p>Git 在 Windows 上的的 <code>core.autocrlf</code> 的默认值是 <code>true</code> 这导致了Git会始终尝试自动转换换行符</p>\n<h2 id="auto-crlf%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F">AUTO CRLF工作方式<a class="anchor" href="#auto-crlf%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F">§</a></h2>\n<p>在GIT中，当设置 <code>* text=auto</code> 或者 <code>core.autocrlf = true</code> 的时候，意味着，我们采用LF做为标准，当你在Windows上，使用CRLF做为换行符的时候，你的文件在硬盘（工作区）上的体现是CRLF，但是当你<code>git add</code> 到暂存区后，git会自动的将你的文件转换为LF，当你clone到本地后，又会回到CRLF。这样做的好处是，你不需要任何显式的修改，就能在本地用到原生的换行符，不会在跨平台协作的时候造成麻烦，在Git中，所有人，所有文件的状态都是统一的LF。</p>\n<p>也可以显式的指定为LF或者为CRLF</p>\n<h2 id="%E4%B8%89%E4%B8%AA%E9%85%8D%E7%BD%AE%E7%9A%84%E5%85%B7%E4%BD%93%E8%A1%8C%E4%B8%BA">三个配置的具体行为<a class="anchor" href="#%E4%B8%89%E4%B8%AA%E9%85%8D%E7%BD%AE%E7%9A%84%E5%85%B7%E4%BD%93%E8%A1%8C%E4%B8%BA">§</a></h2>\n<ul>\n<li><code>core.autocrlf = true</code> 允许Git进行autoCRLF，在Windows的表现是，当你工作区的文本文件中存在LF换行符，则会出现该警告，Git认为在当前平台上，工作区的所有换行符都应该是CRLF，由Git在提交时进行转换。</li>\n<li><code>core.autocrlf = false</code> 不允许Git进行autoCRLF，</li>\n<li><code>core.autocrlf = input</code></li>\n</ul>\n<p>以上配置为全局配置，会被项目级别的配置覆盖</p>\n<h2 id="%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">最佳实践<a class="anchor" href="#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">§</a></h2>\n<p>最好不要指定全局级别的Config，而是进行项目级隔离，在项目的根目录下 <code>.gitattributes</code> 配置，根据项目的文件类型，手动指定换行，如果工作区内的换行与指定的换行不符，那么允许Git在提交的时候进行Auto CRLF，在签出的时候恢复，这样可以最大程度的在不同的平台上进行合作，且不会影响本地工作区。<code>* text=auto</code> 是一个合理的默认设置，这允许Git来选择最佳的处理方式，默认的标准是LF，但是确保他在你配置的首行，这样允许之后的配置合理的覆盖。显式的指定换行，还能消除Git的换行警告，因为Git默认你当前系统使用CRLF，如果你的工作区文件不是CRLF，Git会尝试提醒你会从LF转化到CRLF，但是在我测试后，这似乎不会做任何事情，Git不会私自改动你工作区的任何内容，这也许是一个久远的BUG。</p>\n<p>下面是一份合理的 <code>.gitattributes</code></p>\n<pre class="language-autoit"><code class="language-autoit"># Auto detect text files <span class="token operator">and</span> perform LF normalization\n<span class="token operator">*</span> text<span class="token operator">=</span>auto\n<span class="token operator">*</span><span class="token punctuation">.</span>json text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span><span class="token punctuation">.</span>gitattributes text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span><span class="token punctuation">.</span>txt text eol<span class="token operator">=</span>lf\n</code></pre>\n<p>下面是<a href="https://github.com/django/django">Django</a>的</p>\n<pre class="language-autoit"><code class="language-autoit"># Normalize line endings <span class="token keyword">to</span> avoid spurious failures <span class="token keyword">in</span> the core test suite on Windows<span class="token punctuation">.</span>\n<span class="token operator">*</span>html text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span>css text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span>js text eol<span class="token operator">=</span>lf\ntests<span class="token operator">/</span>staticfiles_tests<span class="token operator">/</span>apps<span class="token operator">/</span>test<span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span>test<span class="token operator">/</span><span class="token operator">*</span>txt text eol<span class="token operator">=</span>lf\ntests<span class="token operator">/</span>staticfiles_tests<span class="token operator">/</span>project<span class="token operator">/</span>documents<span class="token operator">/</span>test<span class="token operator">/</span><span class="token operator">*</span>txt text eol<span class="token operator">=</span>lf\ndocs<span class="token operator">/</span>releases<span class="token operator">/</span><span class="token operator">*</span><span class="token punctuation">.</span>txt merge<span class="token operator">=</span>union\n</code></pre>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/">Mind the End of Your Line ∙ Adaptive Patchwork</a></p>\n<p><a href="https://docs.github.com/zh/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#further-reading">配置 Git 处理行结束符 - GitHub Docs</a></p>\n<p><a href="https://www.zhihu.com/question/50862500/answer/123197258">git如何避免”warning: LF will be replaced by CRLF“提示？ - 知乎 (zhihu.com)</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0" }, "LF will be replaced by CRLF"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E8%AD%A6%E5%91%8A%E5%87%BA%E7%8E%B0%E7%9A%84%E5%8E%9F%E5%9B%A0">警告出现的原因<a class="anchor" href="#%E8%AD%A6%E5%91%8A%E5%87%BA%E7%8E%B0%E7%9A%84%E5%8E%9F%E5%9B%A0">§</a></h2>\n<p>Git 在 Windows 上的的 <code>core.autocrlf</code> 的默认值是 <code>true</code> 这导致了Git会始终尝试自动转换换行符</p>\n<h2 id="auto-crlf%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F">AUTO CRLF工作方式<a class="anchor" href="#auto-crlf%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F">§</a></h2>\n<p>在GIT中，当设置 <code>* text=auto</code> 或者 <code>core.autocrlf = true</code> 的时候，意味着，我们采用LF做为标准，当你在Windows上，使用CRLF做为换行符的时候，你的文件在硬盘（工作区）上的体现是CRLF，但是当你<code>git add</code> 到暂存区后，git会自动的将你的文件转换为LF，当你clone到本地后，又会回到CRLF。这样做的好处是，你不需要任何显式的修改，就能在本地用到原生的换行符，不会在跨平台协作的时候造成麻烦，在Git中，所有人，所有文件的状态都是统一的LF。</p>\n<p>也可以显式的指定为LF或者为CRLF</p>\n<h2 id="%E4%B8%89%E4%B8%AA%E9%85%8D%E7%BD%AE%E7%9A%84%E5%85%B7%E4%BD%93%E8%A1%8C%E4%B8%BA">三个配置的具体行为<a class="anchor" href="#%E4%B8%89%E4%B8%AA%E9%85%8D%E7%BD%AE%E7%9A%84%E5%85%B7%E4%BD%93%E8%A1%8C%E4%B8%BA">§</a></h2>\n<ul>\n<li><code>core.autocrlf = true</code> 允许Git进行autoCRLF，在Windows的表现是，当你工作区的文本文件中存在LF换行符，则会出现该警告，Git认为在当前平台上，工作区的所有换行符都应该是CRLF，由Git在提交时进行转换。</li>\n<li><code>core.autocrlf = false</code> 不允许Git进行autoCRLF，</li>\n<li><code>core.autocrlf = input</code></li>\n</ul>\n<p>以上配置为全局配置，会被项目级别的配置覆盖</p>\n<h2 id="%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">最佳实践<a class="anchor" href="#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">§</a></h2>\n<p>最好不要指定全局级别的Config，而是进行项目级隔离，在项目的根目录下 <code>.gitattributes</code> 配置，根据项目的文件类型，手动指定换行，如果工作区内的换行与指定的换行不符，那么允许Git在提交的时候进行Auto CRLF，在签出的时候恢复，这样可以最大程度的在不同的平台上进行合作，且不会影响本地工作区。<code>* text=auto</code> 是一个合理的默认设置，这允许Git来选择最佳的处理方式，默认的标准是LF，但是确保他在你配置的首行，这样允许之后的配置合理的覆盖。显式的指定换行，还能消除Git的换行警告，因为Git默认你当前系统使用CRLF，如果你的工作区文件不是CRLF，Git会尝试提醒你会从LF转化到CRLF，但是在我测试后，这似乎不会做任何事情，Git不会私自改动你工作区的任何内容，这也许是一个久远的BUG。</p>\n<p>下面是一份合理的 <code>.gitattributes</code></p>\n<pre class="language-autoit"><code class="language-autoit"># Auto detect text files <span class="token operator">and</span> perform LF normalization\n<span class="token operator">*</span> text<span class="token operator">=</span>auto\n<span class="token operator">*</span><span class="token punctuation">.</span>json text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span><span class="token punctuation">.</span>gitattributes text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span><span class="token punctuation">.</span>txt text eol<span class="token operator">=</span>lf\n</code></pre>\n<p>下面是<a href="https://github.com/django/django">Django</a>的</p>\n<pre class="language-autoit"><code class="language-autoit"># Normalize line endings <span class="token keyword">to</span> avoid spurious failures <span class="token keyword">in</span> the core test suite on Windows<span class="token punctuation">.</span>\n<span class="token operator">*</span>html text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span>css text eol<span class="token operator">=</span>lf\n<span class="token operator">*</span>js text eol<span class="token operator">=</span>lf\ntests<span class="token operator">/</span>staticfiles_tests<span class="token operator">/</span>apps<span class="token operator">/</span>test<span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span>test<span class="token operator">/</span><span class="token operator">*</span>txt text eol<span class="token operator">=</span>lf\ntests<span class="token operator">/</span>staticfiles_tests<span class="token operator">/</span>project<span class="token operator">/</span>documents<span class="token operator">/</span>test<span class="token operator">/</span><span class="token operator">*</span>txt text eol<span class="token operator">=</span>lf\ndocs<span class="token operator">/</span>releases<span class="token operator">/</span><span class="token operator">*</span><span class="token punctuation">.</span>txt merge<span class="token operator">=</span>union\n</code></pre>\n<h2 id="reference">Reference<a class="anchor" href="#reference">§</a></h2>\n<p><a href="https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/">Mind the End of Your Line ∙ Adaptive Patchwork</a></p>\n<p><a href="https://docs.github.com/zh/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#further-reading">配置 Git 处理行结束符 - GitHub Docs</a></p>\n<p><a href="https://www.zhihu.com/question/50862500/answer/123197258">git如何避免”warning: LF will be replaced by CRLF“提示？ - 知乎 (zhihu.com)</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%AD%A6%E5%91%8A%E5%87%BA%E7%8E%B0%E7%9A%84%E5%8E%9F%E5%9B%A0" }, "\u8B66\u544A\u51FA\u73B0\u7684\u539F\u56E0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#auto-crlf%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F" }, "AUTO CRLF\u5DE5\u4F5C\u65B9\u5F0F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%89%E4%B8%AA%E9%85%8D%E7%BD%AE%E7%9A%84%E5%85%B7%E4%BD%93%E8%A1%8C%E4%B8%BA" }, "\u4E09\u4E2A\u914D\u7F6E\u7684\u5177\u4F53\u884C\u4E3A")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5" }, "\u6700\u4F73\u5B9E\u8DF5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#reference" }, "Reference")))),
    'author': "rainzee",
    'contributors': [
        "rainzee"
    ],
    'date': "2023-01-29T00:00:00.000Z",
    'updated': null,
    'excerpt': "警告出现的原因 Git 在 Windows 上的的 core.autocrlf 的默认值是 true 这导致了Git会始终尝试自动转换换行符 AUTO CRLF工作方式 在GIT中，当设置 * text=auto 或者 core.autocrlf = true 的时候，意味着，我们采用LF做为标准，...",
    'cover': undefined,
    'tags': [
        "Git"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "excerpt": "插件系统 插件可用于自定义和优化 Nuitka 编译的行为，根据项目的需求选择适当的插件以获得最佳性能和功能。在某些情况下，如果显式地启用插件可能会导致预期之外地错误。 插件控制 - --enable-plugin=PLUGIN_NAME: 启用插件。..."
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
                "name": "Nuitka",
                "count": 1
            },
            {
                "name": "TypeScript",
                "count": 1
            }
        ]
    }
};
