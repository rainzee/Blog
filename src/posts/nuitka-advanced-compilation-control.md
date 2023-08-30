---
date: 2023-08-31
tags:
  - Python
  - Nuitka
---

# Nuitka 高级编译控制


## 进阶编译控制

从这里开始，我们可以更加精细的控制 Nuitka 的编译控制，包括控制 C 编译器，启用链接优化，控制缓存，启用 C 级别的分析优化，注意，这些控制涉及到 C 级别的控制，如果你不知道自己做什么，那么请不要尝试，可能导致无法预知的行为。

## C 编译器控制

- `--clang`  强制使用 clang 编译器。在 Windows 上，这需要一个可用的 Visual Studio版本来支持。默认关闭。

- `--mingw64`  强制在 Windows 上使用 MinGW64。默认关闭，除非使用 MSYS2 与 MinGW  Python。

- `--msvc=MSVC_VERSION`  强制在 Windows 上使用特定的 MSVC 版本。允许的值例如 `"14.3"（MSVC 2022）` 和其他 MSVC 版本号，指定 `"list"` 以获取已安装的编译器列表，或使用 `"latest"`。默认为安装的最新 MSVC 版本，否则使用 MinGW64。

- `--jobs=N`  指定允许的并行 C 编译器作业数量。默认为系统CPU数量。如果编译期间负载过大，可能手动指定，但是我一般在编译的时候去摸鱼。

- `--lto=choice`  使用链接时间优化（MSVC、gcc、clang）。允许的值为 `"yes"`、`"no"` 和 `"auto"`（已知可用时）。默认为 `"auto"`。

- `--static-libpython=choice`  使用 Python 的静态链接库。允许的值为 `"yes"`、`"no"` 和 `"auto"`（已知可用时）。默认为 `"auto"`。

## 缓存控制

- `--disable-cache=DISABLED_CACHES`  禁用选定的缓存，指定 `"all"` 以禁用所有缓存。目前允许的值包括：`"all"`、`"ccache"`、`"bytecode"`、`"dll-dependencies"`。可以多次指定或以逗号分隔的方式提供。默认为无。

- `--clean-cache=CLEAN_CACHES`  在执行之前清除给定的缓存，指定 `"all"` 以清除所有缓存。目前允许的值包括：`"all"`、`"ccache"`、`"bytecode"`、`"dll-dependencies"`。可以多次指定或以逗号分隔的方式提供。默认为无。

- `--disable-bytecode-cache`  不重用模块的依赖分析结果，特别是来自标准库的模块，它们被包含为字节码。等同于 `--disable-cache=bytecode`。

- `--disable-ccache`  不尝试使用 ccache（gcc、clang等）或 clcache（MSVC、clangcl）。等同于 `--disable-cache=ccache`。

- `--disable-dll-dependency-cache`  禁用依赖关系分析器缓存。这将导致创建分发文件夹的时间大大增加，但如果怀疑缓存可能导致错误，则可能会使用它。等同于 `--disable-cache=dll-dependencies`。

- `--force-dll-dependency-cache-update`  用于更新依赖关系分析器缓存。这将导致创建分发文件夹的时间大大增加，但如果怀疑缓存可能导致错误或已知需要更新，则可能会使用它。

## PGO 编译控制

- `--pgo`  启用 C 级别的分析优化（PGO），通过首先执行专用的构建以进行分析运行，然后将结果反馈到 C 编译中。注意：这是实验性的，尚不适用于 Nuitka 的独立模式。默认关闭。

- `--pgo-args=PGO_ARGS`  在进行分析优化时要传递的参数。这些参数传递给在 PGO 分析运行期间使用的特殊构建可执行文件。默认为空。

- `--pgo-executable=PGO_EXECUTABLE`  在收集配置文件信息时要执行的命令。仅在需要通过准备运行它的脚本来启动它时使用。默认使用创建的程序。

## Reference

[Nuitka the Python Compiler — Nuitka the Python Compiler documentation](https://nuitka.net/)
