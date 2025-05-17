# World Ranking System

一个世界级比赛的控制与展示系统，包含以下子系统：

- 🎛 控制端（control-panel）：工作人员录入选手成绩、更新奖牌
- 📺 展示端（display-screen）：观众可见的大屏界面，实时显示排名与奖牌榜
- 🔧 后端服务（backend）：数据中台，负责接收、广播成绩与奖牌信息

---

## 🛠️ 启动指南（开发模式）

### 1. 启动后端
```bash
cd backend
npm install
node server.js
```

### 2. 启动控制端
```bash
cd control-panel
npm install
npm run dev
```

### 3. 启动展示端
```bash
cd display-screen
npm install
npm run dev
```

---

## 🚀 在线部署（GitHub Pages 或 Vercel 仅支持前端部分）

可分别部署 control-panel 和 display-screen 到 GitHub Pages 或 Vercel。

---

## 🤖 GitHub Actions 自动部署（前端）

此仓库内已包含 GitHub Actions 自动部署配置，可用于部署 control-panel 到 GitHub Pages。

### 启用步骤：

1. 将仓库推送到 GitHub
2. 在 GitHub 仓库设置中启用 GitHub Pages，指定分支 `gh-pages`
3. 自动部署将由 `.github/workflows/deploy-control-panel.yml` 启动

---

## 📂 项目结构说明

```
world-ranking-system/
├── backend/            # 后端服务
├── control-panel/      # 控制端（输入）
├── display-screen/     # 展示端（可视化）
├── .github/workflows/  # GitHub Actions 配置
├── .gitignore
└── README.md
```
