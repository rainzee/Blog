---
date: 2023-01-29
tags:
  - Git
---

# LF will be replaced by CRLF

## 警告出现的原因

Git 在 Windows 上的的 `core.autocrlf` 的默认值是 `true` 这导致了Git会始终尝试自动转换换行符

## AUTO CRLF工作方式

在GIT中，当设置 `* text=auto` 或者 `core.autocrlf = true` 的时候，意味着，我们采用LF做为标准，当你在Windows上，使用CRLF做为换行符的时候，你的文件在硬盘（工作区）上的体现是CRLF，但是当你`git add` 到暂存区后，git会自动的将你的文件转换为LF，当你clone到本地后，又会回到CRLF。这样做的好处是，你不需要任何显式的修改，就能在本地用到原生的换行符，不会在跨平台协作的时候造成麻烦，在Git中，所有人，所有文件的状态都是统一的LF。

也可以显式的指定为LF或者为CRLF

## 三个配置的具体行为

- `core.autocrlf = true` 允许Git进行autoCRLF，在Windows的表现是，当你工作区的文本文件中存在LF换行符，则会出现该警告，Git认为在当前平台上，工作区的所有换行符都应该是CRLF，由Git在提交时进行转换。
- `core.autocrlf = false` 不允许Git进行autoCRLF，
- `core.autocrlf = input`

以上配置为全局配置，会被项目级别的配置覆盖 

## 最佳实践

最好不要指定全局级别的Config，而是进行项目级隔离，在项目的根目录下 `.gitattributes` 配置，根据项目的文件类型，手动指定换行，如果工作区内的换行与指定的换行不符，那么允许Git在提交的时候进行Auto CRLF，在签出的时候恢复，这样可以最大程度的在不同的平台上进行合作，且不会影响本地工作区。`* text=auto` 是一个合理的默认设置，这允许Git来选择最佳的处理方式，默认的标准是LF，但是确保他在你配置的首行，这样允许之后的配置合理的覆盖。显式的指定换行，还能消除Git的换行警告，因为Git默认你当前系统使用CRLF，如果你的工作区文件不是CRLF，Git会尝试提醒你会从LF转化到CRLF，但是在我测试后，这似乎不会做任何事情，Git不会私自改动你工作区的任何内容，这也许是一个久远的BUG。

下面是一份合理的 `.gitattributes`

```
# Auto detect text files and perform LF normalization
* text=auto
*.json text eol=lf
*.gitattributes text eol=lf
*.txt text eol=lf
```

下面是[Django](https://github.com/django/django)的

```
# Normalize line endings to avoid spurious failures in the core test suite on Windows.
*html text eol=lf
*css text eol=lf
*js text eol=lf
tests/staticfiles_tests/apps/test/static/test/*txt text eol=lf
tests/staticfiles_tests/project/documents/test/*txt text eol=lf
docs/releases/*.txt merge=union
```

## Reference

[Mind the End of Your Line ∙ Adaptive Patchwork](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)
[配置 Git 处理行结束符 - GitHub Docs](https://docs.github.com/zh/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#further-reading)
[git如何避免”warning: LF will be replaced by CRLF“提示？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/50862500/answer/123197258)
