# 安装依赖

::: warning
nbgui 只是图形化工具，所以并不提供 `nb-cli` 的安装，需要用户手动安装依赖
:::

## 环境要求

- Windows10 及以上
- GNU/Linux 任意发行版
- macOS

::: danger
`macOS`未经过测试，可能无法使用
:::
## Python

目前（2024年）， NoneBot 已经取消对 `Python 3.8` 的支持，所以请确保你安装的 Python 版本 **>=3.9**

## NoneBotCLI

即 `nb-cli`， nbgui 提供 nb-cli 来进行对 bot 的操作。在安装好 Python 后使用以下命令安装：

```
pip install nb-cli
```

## Microsoft Visual C++ Redistributable(Windows)

在 Windows 下，nbgui 运行需要安装 Microsoft Visual C++ Redistributable 依赖，如无法打开请尝试从此处下载安装运行后使用。
[https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)

## appindicator(Linux)

```bash
sudo apt-get install appindicator3-0.1 libappindicator3-dev libnotify-dev
```
