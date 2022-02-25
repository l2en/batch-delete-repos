## 批量删除 github 库工具

[English](/README_EN.md)

> github 未提供批量删除 repo 功能。 如你需要批量删除 repo，可通过该功能进行一键删除。

#### Used

- NodeJS
- axios

#### You Need

> 此工具基于 NodeJs，所以需要你有 node 环境。

#### Usage

1. 🚀 获取 github token; 位置: [`Settings` > `Developer settings`](https://github.com/settings/tokens/new)
   ![](/snapshots/delete-token.png)
2. 📖 填写 `token` 到如下位置
   ![](/snapshots/token.png)
3. 📖 在 `repos.txt` 填写待删除的库。格式 `用户名/库名`
4. 💻 run `node index.js`, 等待脚本跑完。
