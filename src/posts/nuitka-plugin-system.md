---
date: 2023-08-23
tags:
  - Python
  - Nuitka
---

# Nuitka 插件系统


## 插件系统

插件可用于自定义和优化 Nuitka 编译的行为，根据项目的需求选择适当的插件以获得最佳性能和功能。在某些情况下，如果显式地启用插件可能会导致预期之外地错误。

## 插件控制

- `--enable-plugin=PLUGIN_NAME`: 启用插件。必须是插件名称。使用 `--plugin-list` 查询完整列表并退出。默认为空。

- `--disable-plugin=PLUGIN_NAME`: 禁用插件。必须是插件名称。使用 `--plugin-list` 查询完整列表并退出。大多数标准插件禁用后可能不是一个好主意。默认为空。

- `--plugin-no-detection`: 插件可以检测是否可能会被使用，然后您可以通过 `--disable-plugin=plugin-that-warned` 禁用警告，或者您可以使用此选项完全禁用机制，这也会稍微加快编译速度，因为这个检测代码在您确定要使用哪些插件后就是徒劳的。默认关闭。

- `--plugin-list`: 显示所有可用插件的列表并退出。默认关闭。

- `--user-plugin=PATH`: 用户插件的文件名。可以多次提供。默认为空。

- `--show-source-changes`: 显示编译前原始Python文件内容的源更改。主要用于开发插件。默认为False。

#### `anti-bloat` 插件的选项

- `--show-anti-bloat-changes`: 注释插件所做的更改。

- `--noinclude-setuptools-mode=NOINCLUDE_SETUPTOOLS_MODE`: 当遇到 `setuptools` 或相关导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。还处理 `setuptools_scm` 导入。

- `--noinclude-pytest-mode=NOINCLUDE_PYTEST_MODE`: 当遇到 `pytest` 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。还处理`nose`导入。

- `--noinclude-unittest-mode=NOINCLUDE_UNITTEST_MODE`: 当遇到 `unittest` 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。

- `--noinclude-IPython-mode=NOINCLUDE_IPYTHON_MODE`: 当遇到 `IPython` 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。

- `--noinclude-dask-mode=NOINCLUDE_DASK_MODE`: 当遇到 `dask` 导入时的处理方式。这个包可能包含大量依赖项，应该绝对避免。

- `--noinclude-numba-mode=NOINCLUDE_NUMBA_MODE`: 当遇到 `numba` 导入时的处理方式。这个包包含大量依赖项，目前不适用于独立模式。应该绝对避免。

- `--noinclude-default-mode=NOINCLUDE_DEFAULT_MODE`: 实际上提供了上述选项的默认 “warning” 值，可用于将所有这些选项都打开。

- `--noinclude-custom-mode=CUSTOM_CHOICES`: 当遇到特定导入时的处理方式。格式为模块名称，这应该是一个顶级包，然后是一个选项，例如“error”，“warning”，“nofollow”，例如 `PyQt5:error`。

## 支持的插件

1. **anti-bloat**
   - 修补不必要的导入，来自库模块源代码。

2. **data-files**
   - 包括包配置文件指定的数据文件。

3. **delvewheel**
   - 支持使用delvewheel包的"support"，适用于独立模式。

4. **dill-compat**
   - 用于与"dill"包兼容性的支持。

5. **dll-files**
   - 包括DLL，根据包配置文件。

6. **enum-compat**
   - 支持Python 2 和"enum"包。

7. **eventlet**
   - 支持"eventlet"依赖项和对"dns"包的猴子补丁。

8. **gevent**
   - 为'gevent'包提供支持。

9. **gi**
   - 支持GI包typelib依赖。

10. **glfw**
   - OpenGL和'glfw'包的支持，适用于独立模式。

11. **implicit-imports**
   - 根据包配置文件提供包的隐式导入。

12. **kivy**
   - 为'kivy'包提供支持。

13. **matplotlib**
   - 支持'matplotlib'模块。

14. **multiprocessing**
   - 支持Python的'multiprocessing'模块。

15. **no-qt**
   - 禁用所有Qt绑定，适用于独立模式。

16. **options-nanny**
   - 根据包配置文件通知用户潜在问题。

17. **pbr-compat**
   - 为'pbr'包在独立模式下提供兼容性支持。

18. **pkg-resources**
   - 解决'pkg_resources'的问题。

19. **pmw-freezer**
   - 为'Pmw'包提供支持。

20. **pylint-warnings**
   - 支持PyLint / PyDev的linting源标记。

21. **pyqt5**
   - 为PyQt5包提供支持。

22. **pyqt6**
   - 为PyQt6包在独立模式下提供支持。

23. **pyside2**
   - 为PySide2包提供支持。

24. **pyside6**
   - 为PySide6包在独立模式下提供支持。

25. **pywebview**
   - 为'webview'包 (PyPI上的pywebview) 提供支持。

26. **tk-inter**
   - 支持Python的Tk模块。

27. **transformers**
   - 为transformers包提供隐式导入。

28. **upx**
   - 自动使用UPX压缩创建的二进制文件。

## Reference

[Nuitka the Python Compiler — Nuitka the Python Compiler documentation](https://nuitka.net/)
