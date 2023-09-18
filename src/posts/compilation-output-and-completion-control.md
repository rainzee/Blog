---
date: 2023-09-18
tags:
  - Python
  - Nuitka
---

# Nuitka 编译输出和完成时控制


## 编译选项和完成时行为控制

在编译完成后，我们可以立刻启动或者直接进入调试，在编译过程中我们也可以严格规定兼容 CPython，以及控制产物的输出等等。

## 编译完成时行为

- `--run`  立即执行创建的二进制文件（或导入已编译的模块）。默认关闭。

- `--debugger`  在调试器中执行，例如 `gdb` 或 `lldb`，以自动获取堆栈跟踪。默认关闭。

- `--execute-with-pythonpath`  在使用 `--run` 立即执行创建的二进制文件或模块时，不重置 `PYTHONPATH` 环境变量。当所有模块都成功包含时，不再需要 `PYTHONPATH`，特别是在独立模式下。这非常适合调试不同版本。

## 编译选择

- `--user-package-configuration-file=YAML_FILENAME`  用户提供的包配置的 YAML 文件。可以包括 DLL，删除庞杂内容，添加隐藏的依赖项。查看用户手册以获取要使用的格式的完整描述。可以多次提供。默认为空。

- `--full-compat`  强制与 CPython 的绝对兼容性。甚至不允许对 CPython 行为的微小偏差，例如没有更好的回溯或不真正不兼容但只是不同或更差的异常消息。**这仅用于测试，不应使用**。

- `--file-reference-choice=MODE`  选择 `__file__` 的值。使用 `runtime`（独立二进制模式和模块模式的默认值）时，创建的二进制文件和模块使用它们自身的位置来推断 `__file__` 的值。包含的包会伪装成在该位置下的目录中。这允许在部署中包含数据文件。如果您只是寻求加速，最好使用 `original` 值，其中源文件位置将被使用。使用 `frozen `时，使用 `<frozen module_name>` 的表示法。出于兼容性原因，`__file__` 值始终将具有 ".py" 后缀，不管它实际上是什么。这里其实我也没有搞球太懂。

- `--module-name-choice=MODE`  选择 `__name__` 和 `__package__` 的值。使用 `runtime`（模块模式的默认值）时，创建的模块使用父包来推断 `__package__` 的值，以实现完全兼容。使用 `original`（其他模式的默认值）允许进行更多的静态优化，但对于通常可以加载到任何包中的模块来说是不兼容的。也是没搞懂。

## 输出选项

- `--output-filename=FILENAME`  指定可执行文件的命名方式。对于扩展模块，没有选择，也不适用于独立模式，使用它将会报错。但是，它可能包含需要存在的路径信息。默认为平台上的 '<program_name>' + '.exe'。

- `--output-dir=DIRECTORY`  指定中间和最终输出文件的位置。DIRECTORY将填充具有构建文件夹、分发文件夹、二进制文件等的文件夹。默认为当前目录。

- `--remove-output`  在生成模块或二进制产物后删除构建目录。默认关闭。

- `--no-pyi-file`  不为由 Nuitka 创建的扩展模块创建 ".pyi" 文件。这用于检测隐式导入。默认关闭。

## Reference

[Nuitka the Python Compiler — Nuitka the Python Compiler documentation](https://nuitka.net/)
