---
date: 2023-08-24
tags:
  - Python
  - Nuitka
---

# Nuitka 多操作系统支持


## Nuitka 的跨平台支持

`Nuitka` 是跨平台支持的，对 Windows macOS 和 Linux 均有良好的支持，除了提供通用的操作系统支持之外，还针对三个操作系统做了特定控制的支持。下面将一一介绍。

## 通用操作系统控制

- `--disable-console` 在为 Windows 或 macOS 编译时，禁用控制台窗口并创建 GUI 应用程序。默认关闭。

- `--enable-console` 在为 Windows 或 macOS 编译时，启用控制台窗口并创建控制台应用程序。这会禁用某些模块的提示，例如 `PySide`，建议禁用控制台。默认为 `true`。

- `--force-stdout-spec=FORCE_STDOUT_SPEC` 强制将程序的标准输出发送到此位置。对于禁用控制台的程序和使用 Nuitka 商业版的 Windows Services 插件的程序非常有用。默认不激活，例如使用 `%PROGRAM_BASE%.out.txt`，即在程序附近的文件。

- `--force-stderr-spec=FORCE_STDERR_SPEC` 强制将程序的标准错误发送到此位置。对于禁用控制台的程序和使用 Nuitka 商业版的 Windows Services 插件的程序非常有用。默认不激活，例如使用 `%PROGRAM_BASE%.err.txt`，即在程序附近的文件。

## Windows 特定控制

- `--windows-icon-from-ico=ICON_PATH` 添加可执行文件图标。可以多次提供不同分辨率或具有多个图标的文件。在后一种情况下，还可以附加 `#<n>`，其中n是从1开始的整数索引，指定要包括的特定图标，所有其他图标都将被忽略。

- `--windows-icon-from-exe=ICON_EXE_PATH` 从现有可执行文件中复制可执行文件图标（仅适用于Windows）。

-  `--onefile-windows-splash-screen-image=SPLASH_SCREEN_IMAGE` 在为Windows和onefile编译时，在加载应用程序时显示此图像。默认关闭。

- `--windows-uac-admin` 请求Windows用户控制，以在执行时授予管理员权限（仅适用于Windows）。默认关闭。

- `--windows-uac-uiaccess` 请求Windows用户控制，以强制仅从少数文件夹运行（仅适用于Windows远程桌面访问）。默认关闭。

## macOS 特定控制

- `--macos-target-arch=MACOS_TARGET_ARCH` 指定该程序应该在哪些体系结构上运行。默认限制为当前运行Python允许的体系结构。默认为"native"，即与运行Python的体系结构相同。

- `--macos-create-app-bundle` 在为 macOS 编译时，创建一个应用程序包而不是一个普通的二进制应用程序。目前是实验性和不完整的。目前这是解锁禁用控制台的唯一方法。默认关闭。

- `--macos-app-icon=ICON_PATH` 为应用程序包添加图标以使用。只能提供一次。如果可用，将使用Python图标。默认情况下。

- `--macos-signed-app-name=MACOS_SIGNED_APP_NAME` 用于 macOS 签名的应用程序的名称。最好按照 `com.YourCompany.AppName` 的命名结果进行命名，因为这些名称必须是全局唯一的，并且可能授予受保护的 API 访问权限。

- `--macos-app-name=MACOS_APP_NAME` 在 macOS 包信息中使用的产品名称。默认为二进制文件的基本文件名。

- `--macos-app-mode=MODE` 应用程序包的应用程序模式。当需要启动窗口并显示在 Docker 中时，默认值 `gui` 是一个很好的选择。如果根本没有窗口，该应用程序是一个 background 应用程序。对于稍后要显示的UI元素，ui-element 处于中间状态。该应用程序将不会出现在 dock 中，但在稍后打开窗口时将获得对桌面的完全访问。

- `--macos-sign-identity=MACOS_APP_VERSION` 在 macOS 上签名时，默认情况下将使用临时标识符，但使用此选项，您可以指定另一个要使用的标识符。现在在 macOS 上强制签名代码，无法禁用。默认为 `ad-hoc`（即临时标识符）。

- `--macos-sign-notarization` 在签名时进行标记，使用 Apple 的正确 TeamID 标识符，使用所需的运行时签名选项以便可以接受。

- `--macos-app-version=MACOS_APP_VERSION` 在 macOS 包信息中使用的产品版本。默认为 `1.0`，如果未提供。

- `--macos-app-protected-resource=RESOURCE_DESC` 请求访问 macOS 受保护资源的授权。例如，`NSMicrophoneUsageDescription:Microphone access for recording audio.` 请求访问麦克风并为用户提供有关为何需要该权限的信息。在冒号之前是一个 OS 标识符，用于访问权限的识别，然后是信息性文本。可以多次指定。默认为空。

## Linux 特定控制

- `--linux-icon=ICON_PATH` 为 onefile 二进制文件添加可执行文件图标。只能提供一次。如果可用，将使用 Python 图标。

## Reference

[Nuitka the Python Compiler — Nuitka the Python Compiler documentation](https://nuitka.net/)
