## The tool for batch delete github repository

> On github not support to batch delete repository. But if you want, you can batch delete repository by this tool.

#### Used

- NodeJS
- axios

#### You Need

> You have to configure a node environment.

#### Usage

1. 🚀 Generate a token which must have a delete repository authority. [`Settings` > `Developer settings`](https://github.com/settings/tokens/new)
   ![](/snapshots/delete-token.png)

2. 📖 Input your token.
   ![](/snapshots/token.png)

3. 📖 Input the repositories to be deleted at `main/repos.txt`.

4. 💻 run `node index.js`
