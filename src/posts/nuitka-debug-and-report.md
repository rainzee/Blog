---
date: 2023-09-08
tags:
  - Python
  - Nuitka
---

# Nuitka 调试与追踪


## 强大的调试与追踪控制

其实在 Nuitka 中，自带了许多强大的调试和追踪报告功能，能够允许你对程序运行的诸多细节进行追踪和调试，这对于部署真正的生产级别的代码是至关重要地。但是在中文互联网甚至是英文我鲜少有看到实际介绍这部分的文章，这未免有些浪费，下面我将介绍如何使用 Nuitka 内置的调试与追踪功能来生成详细的报告。

## 调试

- `--debug`  执行尽可能多的自检以查找Nuitka中的错误。不要用于生产。默认关闭。

- `--unstripped`  在生成的对象文件中保留调试信息，以实现更好的调试器交互。默认关闭。

- `--profile`  启用基于vmprof的时间分析。目前不工作。默认关闭。

- `--internal-graph`  创建优化过程内部的图形，不要用于整个程序，仅用于小型测试案例。默认关闭。

- `--trace-execution`  追踪执行输出，在执行代码之前输出代码行。默认关闭。

- `--recompile-c-only`  这不是增量编译，而仅用于 Nuitka 开发。它采用现有文件，仅将其重新编译为 C。允许编译已编辑的 C 文件，以快速调试生成的源代码更改，例如查看代码是否被通过，输出值等。默认关闭。取决于编译 Python 源代码来确定应查看哪些文件。

- `--xml=XML_FILENAME`  将优化过程的内部程序结构以 XML 形式写入给定的文件名。

- `--generate-c-only`  仅生成 C 源代码，不编译为二进制或模块。这用于不浪费 CPU 的调试和代码覆盖分析。默认关闭。不要认为你可以直接使用它。

- `--experimental=FLAG`  使用声明为 `“experimental”` 的功能。如果代码中没有实验性功能，则可能不起作用。使用实验性标签（检查源代码）进行每个实验的功能。

- `--low-memory`  尝试使用更少的内存，通过减少 C 编译作业的分支和使用使用更少内存的选项。用于嵌入式设备。如果遇到内存不足问题，请使用此选项。默认关闭。但是根据我的经验来看，大部分告警内存不足基本都是由于你的编译姿势不对所导致的，请优先排除其他错误，最后考虑此选项。

- `--create-environment-from-report=CREATE_ENVIRONMENT_FROM_REPORT`  从给定的报告文件创建新的虚拟环境，例如 `'--report=compilation-report.xml'` 。默认不执行。

## 报告与追踪

- `--report=REPORT_FILENAME`  以 XML 输出文件的形式报告模块、数据文件、编译、插件等详细信息。这对于问题报告也非常有用。这些报告可以用于通过 `'--create-environment-from-report'` 轻松重新创建环境，但包含大量信息。默认关闭。

- `--report-diffable`  以可比较的形式报告数据，即没有时间或内存使用值的变化。默认关闭。

- `--report-user-provided=KEY_VALUE`  报告来自您的数据。可以多次提供，格式为 `'key=value'`，其中 `key` 应为标识符，例如，使用 `'--report-user-provided=pipenv-lock-hash=64a5e4'` 来跟踪某些输入值。默认为空。

- `--report-template=REPORT_DESC`  通过模板进行报告。提供模板和输出文件名 `"template.rst.j2:output.rst"`。对于内置模板，请查看用户手册以了解这些模板是什么。可以多次提供。默认为空。

- `--quiet`  禁用所有信息输出，但显示警告。默认关闭。

- `--show-scons`  以详细信息运行 C 构建后端 Scons，显示执行的命令和检测到的编译器。默认关闭。

- `--no-progressbar`  禁用进度条。默认关闭。

- `--show-progress`  提供进度信息和统计信息。禁用正常的进度条。默认关闭。现在已经停止支持。

- `--show-memory`  提供内存信息和统计信息。默认关闭。

- `--show-modules`  提供包含的模块和 DLL 的信息。已过时，你应该使用 `'--report'` 文件代替。默认关闭。

- `--show-modules-output=PATH`  指定 `'--show-modules'` 的输出位置，应为文件名。默认为标准输出。

- `--verbose`  输出所采取的行动的详细信息，特别是在优化中。可能会变得非常多。默认关闭。

- `--verbose-output=PATH`  指定 `'--verbose'`。

## Reference

[Nuitka the Python Compiler — Nuitka the Python Compiler documentation](https://nuitka.net/)
