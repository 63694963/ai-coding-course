# AI Coding Course

> 一个面向 AI Coding 初学者的沉浸式交互课程网站。

## 在线课程

### 立即体验

**在线地址：** <https://63694963.github.io/ai-coding-course/>

建议使用电脑浏览器打开，并开启声音，以获得完整的页面动画、音乐、视频和键盘交互体验。

### 网站介绍

这不是传统的图文教程，也不是普通的在线幻灯片，而是一套可以在浏览器中直接播放和操作的交互式课程。

课程通过网页动画、案例演示、图片、音乐和视频，系统讲解 Token、上下文、Prompt、工具调用、Agent、Harness 等核心概念，并进一步讨论人在 AI Coding 中如何提出目标、提供上下文、控制方向、检查结果，与 AI 共同完成真实项目。

课程使用全屏网页和逐步动画呈现。学习者可以通过键盘控制课程节奏，在连续演示中逐步理解大语言模型的工作方式，以及人与 AI 的协作逻辑。

### 操作方式

| 按键 | 功能 |
| --- | --- |
| `→` | 进入下一步 |
| `←` | 返回上一步 |

部分音乐和视频会在用户首次按键后播放，这是浏览器对媒体自动播放的安全限制。

## 课程内容

### 1. 理解大语言模型

从 Token 开始，理解 AI 如何接收、拆分和处理文字，以及为什么 AI 的理解方式与人类并不完全相同。

### 2. 理解上下文

了解上下文窗口、历史对话和信息传递对输出结果的影响，学习如何为 AI 提供完整、准确的任务背景。

### 3. 学会描述任务

把“我想做一个东西”转化为包含目标、内容、约束条件和验收标准的可执行任务。

### 4. 从对话走向工具调用

理解 AI 如何从单纯生成文字，进一步读取文件、搜索信息、修改代码、执行命令并验证结果。

### 5. 理解 Agent 与 Harness

了解 AI 如何拆解复杂任务、连续执行多个步骤，以及为什么稳定的工具、规则、环境和反馈机制决定了 AI 的实际能力。

### 6. 开展 AI Coding 实践

通过真实项目理解如何使用 Codex 等 AI Coding 工具完成页面设计、功能开发、问题修复、版本管理和网站部署。

### 7. 建立人机协作方式

AI 负责理解、生成和执行，人负责提出目标、提供判断、控制方向并验收结果。课程最终讨论的不是“AI 能否替代人”，而是人如何借助 AI 扩展自己的能力边界。

## 适合人群

本课程适合：

- 没有编程基础，但希望了解 AI Coding 的学习者；
- 正在使用 ChatGPT、Codex 或 Claude Code 的初学者；
- 希望通过 AI 独立制作网站、工具或应用的人；
- 希望提升 AI 使用效率的职场人员；
- 需要讲授人工智能、数字化或创新课程的教师；
- 对智能体和人机协作感兴趣的研究及管理人员。

学习本课程不要求预先掌握复杂的编程知识。只要能够描述自己的目标，就可以开始尝试使用 AI 完成项目。

## 课程特色

### 面向普通人的技术解释

尽量减少复杂术语，从真实使用体验出发，解释 Token、上下文、工具调用、Agent 和 Harness 等概念。

### 沉浸式网页演示

课程采用全屏交互网页呈现，通过动画、图片、音乐和视频控制叙事节奏，让抽象概念变得更加直观。

### 强调真实工作流程

课程不只讨论怎样编写 Prompt，更关注如何让 AI：

- 理解需求；
- 获取上下文；
- 使用工具；
- 修改文件；
- 检查错误；
- 验证结果；
- 保存版本；
- 持续迭代。

### 课程本身就是 AI Coding 项目

本网站同时也是一个 AI Coding 实践案例。课程构思、页面设计、功能开发、内容修改、版本管理和部署发布，都融入了人与 AI 协作完成项目的真实经验。

## 本地运行

### 1. 克隆仓库

```bash
git clone https://github.com/63694963/ai-coding-course.git
cd ai-coding-course
```

### 2. 启动本地服务器

`public/` 是课程唯一来源。把它作为站点根目录启动静态 HTTP 服务：

```bash
python3 -m http.server 8000 --directory public
```

然后访问：

<http://localhost:8000/>

也可以直接双击 `public/interactive-lecture.html`，但部分浏览器会限制 `file://` 下的音频、视频或相对路径资源，因此建议使用本地 HTTP 服务。

## 开发与测试

如果需要使用项目中的开发和测试环境，请先安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

运行构建和测试：

```bash
npm test
```

执行代码检查：

```bash
npm run lint
```

建议使用 Node.js 22.13.0 或更高版本。`dist/` 是可重新生成的构建产物，不纳入 Git。

## 项目结构

```text
.
├── public/
│   ├── index.html                  # 站点入口
│   ├── interactive-lecture.html    # 唯一课程主页面
│   ├── assets/                     # 图片和课程素材
│   ├── *.mp4                       # 课程视频
│   └── 7月15日 (1).mp3             # 课程配乐
├── app/                            # Workers 根路由
├── worker/                         # Cloudflare Worker 入口
├── tests/                          # 页面结构测试
├── .github/workflows/             # GitHub Actions 工作流
├── package.json                    # 构建与测试命令
└── README.md                       # 项目说明
```

所有课程内容修改只编辑 `public/interactive-lecture.html`，不要创建第二份课程 HTML。

## GitHub 版本管理

本项目通常通过功能分支和 Pull Request 管理修改：

```text
agent/xxx → Pull Request → main → 自动部署
```

| 分支 | 作用 |
| --- | --- |
| `main` | 当前正式源代码和自动部署来源 |
| `agent/xxx` | Codex 等工具创建的修改分支 |

## 网站部署

### GitHub Pages

`.github/workflows/pages.yml` 在 `main` 更新后直接发布 `public/`：

<https://63694963.github.io/ai-coding-course/>

无需手工维护 `gh-pages` 内容副本。可以在仓库的 **Actions** 页面查看部署过程。

### Cloudflare Pages

使用 Git 集成时推荐：

- 构建命令：留空
- 输出目录：`public`

如果使用 `npm run build`，输出目录设为 `dist/client`。`public/index.html` 使用相对跳转，因此同时兼容根域名和 GitHub Pages 子路径。

### Cloudflare Workers

Workers 使用 Vinext 构建产物；`app/page.tsx` 将根路径重定向到 `/interactive-lecture.html`。

## 项目地址

- **在线课程：** <https://63694963.github.io/ai-coding-course/>
- **GitHub 仓库：** <https://github.com/63694963/ai-coding-course>

## 项目理念

AI Coding 的意义，不只是让 AI 替人编写几行代码。

当目标、上下文、工具、规则和验证机制被正确组织起来，AI 就可以从一个回答问题的工具，逐步成为能够参与真实工作的协作者。

真正重要的，不只是让 AI 给出答案，而是学习如何与 AI 一起定义问题、寻找路径、检查结果，并最终抵达答案。

> 循此苦旅，以达星辰。
> *Per aspera ad astra.*

## 许可证与素材说明

本仓库主要用于课程讲解、课堂演示和个人学习。

仓库中的图片、音频、视频、人物肖像及其他媒体素材，可能分别受到著作权、肖像权或其他权利保护。转载、传播或商业使用前，请确认已经获得相应授权。
