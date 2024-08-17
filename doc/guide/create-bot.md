# 手动创建 Bot

::: warning
创建之前请先确保你安装了 `Python 3.9` 及以上版本
:::

---
## 选择 Bot 路径
::: tip
为了保证宿主机全局环境不受影响，推荐启用 `开启虚拟环境` 选项
:::
打开 nbgui 并点击侧边栏的 `+` 图标，进入 `创建Bot` 的页面

![createbot](/images/createbot.png)

---
选择存放 Bot 的路径

![img](/images/createbot-selectpath.png)

::: tip
这里的存放路径指的是 Bot 文件夹所在的路径而并非 Bot 根目录<br>
也就是说，如果你选择的路径是 `path/to/bot` 而你的 Bot 名称为 `demo` ，那么最终 Bot 的根目录就是 `path/to/bot/demo`
:::

---
## 选择驱动器

如果你对接的是 `QQ官方机器人` ，请同时选择 `httpx` 、`websockets` 、`aiohttp`<br>

如果你是使用 `QQ帐号` 作为 Bot ，请选择 `fastapi`

---
## 选择适配器

如果你对接的是 `QQ官方机器人` ，请选择 `QQ(nonebot-adapter-qq)`

如果你是使用 `QQ帐号` 作为 Bot ，请选择 `OneBot V11(nonebot-adapter-onebot.v11)`

![img](/images/createbot-selectadapter.png)

选择好之后点击“下一步”进行安装，并等待安装完成

![img](/images/installbot.png)

安装完成后即可在主页显示 bot

![img](/images/mainpage.png)

