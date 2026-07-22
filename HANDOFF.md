# HANDOFF

更新时间：2026-07-22  
仓库：`/Users/jerry/Documents/repo/讲课`

## 1. 项目定位

这是给非程序员现场投屏使用的单文件 HTML 交流课件。

- 唯一主文件：`public/interactive-lecture.html`
- 唯一静态资源目录：`public/assets/`
- 站点入口：`public/index.html`
- 技术栈：课件本体仍是原生 HTML、CSS、JavaScript；React/Vinext 脚手架仅用于 Cloudflare Workers 构建，不在课件中挂载 React 组件。

不要重新创建 `AI-Coding-Course/` 或第二份 `interactive-lecture.html`。所有课程修改只改 `public/interactive-lecture.html`。

## 2. 当前课程状态

- 开场包含普通妈妈、AI 错题本和 AI 网球识别三个视频案例。
- 暖场保留莎士比亚选择题；`#why` 保留 Obsidian 知识库深链。
- Context Engineering 主段落包含“高级 Context”和“上下文窗口也有成本”。
- `#wittgenstein-intro` 位于 Token 与四能力章节之间，包含维特根斯坦中英文引文和本地头像。
- 页面侧栏不再显示“想象力、好奇心、学习力、执行力”装饰文字。
- `#zombie-cleaner` 位于 Loop Engineering 后，包含六个弹层入口、机器人提示词和四张案例参考图。
- `#path` 已删除“从普通任务到第一个小工具”和“现场示范：把客户回访变成一个小工具”。
- 尾声共 22 幕，支持左右方向键、Esc 重置和手机端“上一幕 / 下一幕”按钮。
- 尾声题词为“循此苦旅，以达星辰 / Per aspera ad astra”，署名塞内卡并使用本地头像。

## 3. 媒体与资源

所有运行时媒体都位于 `public/`，HTML 使用同目录或 `assets/` 相对路径：

- `public/普通妈妈.mp4`
- `public/这个Skill能帮你整理高频考点 ... .mp4`
- `public/全栈运动识别 Demo ... .mp4`
- `public/7月15日 (1).mp3`
- `public/assets/intro-posters/`：三个开场视频海报
- `public/assets/cases/zombie-cleaner/`：丧尸短剧案例参考图
- `public/assets/people/`：人物头像

两个视频文件名很长，且错题本视频文件名含 `#`。修改文件名时必须同步更新 HTML 中经过 URL 编码的 `src`。

## 4. 部署

### GitHub Pages

`.github/workflows/pages.yml` 在 `main` 分支更新后直接发布 `public/`，无需维护 `gh-pages` 内容副本。

### Cloudflare Pages

推荐 Git 集成配置：

- 构建命令：留空
- 输出目录：`public`

如果使用 `npm run build`，输出目录应设为 `dist/client`。

### Cloudflare Workers

Workers 继续使用 Vinext 构建；`app/page.tsx` 将根路径重定向到 `/interactive-lecture.html`。`dist/` 是生成物，不纳入 Git。

## 5. 本地运行与验证

```bash
cd /Users/jerry/Documents/repo/讲课
python3 -m http.server 4173 --directory public
```

访问：

```text
http://127.0.0.1:4173/
```

完成修改后运行：

```bash
npm test
git diff --check
```

测试会检查 Pages 根入口、单一课程来源、暖场题、Obsidian 深链、Context、维特根斯坦引言、丧尸短剧案例和尾声手机导航。

## 6. 保留文件

- `public/`：唯一课程和部署来源
- `AI-Coding-课程大纲.md`：课程内容源文件
- `README.md`：项目使用与部署说明
- `HANDOFF.md`：后续维护交接说明
- `tests/rendered-html.test.mjs`：结构回归测试
- `app/`、`worker/`、`build/`、`vite.config.ts`、`package.json`：Workers 构建脚手架

下一次修改前先检查 Git 状态；不要覆盖用户未提交的改动，也不要重新引入 React 组件库。
