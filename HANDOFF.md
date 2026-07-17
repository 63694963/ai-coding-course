# HANDOFF

更新时间：2026-07-17  
仓库：`/Users/jerry/Documents/repo/讲课`  
分支：`main`  
功能基线：`39bdd8e perf(course): reduce glass rendering cost`

## 1. 交接目标

这是一个给非程序员现场投屏使用的单文件 HTML 交流课件。下一次对话应先读取本文件、核对 Git 状态，再根据用户的新要求继续修改：

- 主文件：`AI-Coding-Course/interactive-lecture.html`
- 运行方式：可直接用 `file://` 打开，也可用仓库根目录的静态服务器预览。
- 技术栈：课件交付仍是原生 HTML、CSS、JavaScript；仓库保留脚手架自带的 npm/React 依赖，但本课件不使用 React 组件库或 React 预览页。

## 2. 当前完成状态

工作区状态：已跟踪文件无改动；当前存在两个用户新增、尚未纳入提交的未跟踪文件 `Jason.mp4`、`glassmorphism-hard-prompt.md`，不要删除或自动暂存。

```text
* main
?? Jason.mp4
?? glassmorphism-hard-prompt.md
```

当前主文件约 320 KB，包含 22 个章节 section（含 1 个隐藏关系页和多个附录页），脚本和样式均内联。

### React 方案状态

- React 组件库、预览页和课件内的 React 挂载代码已回退，不属于当前交付范围。
- 不要重新添加 `app/components/ui/`、`/components-preview` 或课件 React bundle；如未来重新提出 React 需求，应另行确认范围。
- `package.json` 中的 React 依赖属于仓库脚手架遗留，不代表课件已使用 React。

### 课程主线重构

- Prompt 开场只保留“不了解具体情况的实习助手”比喻；Prompt 正课保留目标与场景、边界与材料、格式与标准三个组成部分；Prompt Lab 的诊断互动完整保留。
- Context 主课只保留初学者需要的背景判断；上下文成本、子智能体保持主对话干净、用户级 `CLAUDE.md` 成本已移到工具与模型附录。
- “桥接”和“上手路径”已合并为一页五步流程：选动作、说清需求、生成第一版、发现问题、修改成功。
- Harness 主课只保留材料、规则、验证、回退、`CLAUDE.md` 宪法和一个 `financial-analyst` Skill 示例；提示词/Skill 对比和六个跨行业 Skill 已移入 `#harness-appendix`。
- “一张图带走”只保留好 Prompt 六个零件、三种 Engineering 一句话和安全红线；四能力自检留在前面的互动页，急救话术移入效率附录。
- `#education` 为独立教育投资页，`#naval` 为纳瓦尔四点建议页；教育页不显示左侧 TOKEN 装饰，避免大标题被压住。

### 开场视频

课件最前面新增 `#intro-videos` 开场区域，排在 `#hero` 之前，目前已接入三个视频：

- 普通妈妈视频：仓库根目录的 `普通妈妈.mp4`
- AI 错题本视频：仓库根目录的长文件名 `这个Skill能帮你整理高频考点 ... .mp4`
- AI 网球识别视频：仓库根目录的长文件名 `全栈运动识别 Demo ... .mp4`
- `Jason.mp4` 当前只是未跟踪素材，尚未接入 HTML；后续如需加入开场案例，先确认卡片文案、海报和顺序。
- 三个已接入视频使用 `playsinline`、`preload="metadata"`，不会未经操作自动抢声音。
- 顶部导航增加“开场案例”，视频下方有“看完案例，开始交流”链接。
- HTML 中对中文、空格和 `#` 字符进行了 URL 编码，不能随意把 src 改回未编码的原文件名。

### 尾声字幕

`#finale` 当前状态：

- 22 幕字幕，每一幕只有一个段落。
- 使用右方向键下一幕、左方向键上一幕、Esc 重置。
- 字幕文字字号统一。
- 切换效果为上移、缩放、模糊到清晰、遮罩展开。
- 普通文字和人物卡在舞台高度上居中。
- 标题为“凡是过往，皆为序章”，英文为 “What's past is prologue.”
- 右侧署名为威廉·莎士比亚，头像已本地化。

### 尾声视觉精修

视觉规范已记录在 `docs/visual-polish-spec.md`，当前 R5 尾声方案已落地：

- 进入尾声自动隐藏导航、全局进度和滚动条；Esc 恢复原页面状态。
- 莎士比亚使用大面积、无边框渐隐构图；多人物使用紧凑的无边框阵列。
- 尾声历史/机械场景图与莎士比亚采用一致的径向渐变遮罩，去掉硬矩形边框和圆角卡片感。
- 字幕已回退至紧凑字号，确保人物姓名与文案同屏；只保留极弱方向键提示和必要 BGM 状态。

### 尾声 BGM

- 当前文件：`7月15日 (1).mp3`
- 文件位置：仓库根目录。
- HTML 使用 `../7月15日 (1).mp3`。
- 第一次按右方向键进入尾声时调用 `play()`，循环播放，音量为 0.32。
- Esc 重置时暂停并回到开头。
- 页面底部有“BGM 待命 / 播放中”状态提示。
- 浏览器自动播放策略可能阻止非用户手势；实际授课时应由讲解者按右方向键启动。

### 人物头像

头像已从 Wikimedia 外链改为课件本地资源，避免 `file://` 页面外链不稳定：

`AI-Coding-Course/assets/people/`

- `shakespeare.jpg`
- `leibniz.jpg`
- `turing.jpg`
- `shannon.jpg`
- `von-neumann.jpg`
- `babbage.jpg`
- `jobs.jpg`
- `naval.jpg`

HTML 中共有 9 个头像引用，其中图灵复用同一张本地图片。

### 之前已完成的内容删改

- 课件展示用词已按用户要求改为“交流”。
- AI Coding 相关表述已统一为 Vibe Coding。
- Context 模拟器部分已删除。
- Harness“整理项目文件夹”练习已删除。
- “这些归类哪里对、哪里错？”练习已删除。
- 结尾中“宁可三日无网，不可一日无 AI”段落已删除。
- 已加入纳瓦尔人物卡、四点切换互动和本地头像。

## 3. 关键文件

- `AI-Coding-Course/interactive-lecture.html`：唯一主交付物。
- `AI-Coding-Course/assets/people/`：本地人物头像。
- `AI-Coding-Course/interaction-demo.html`：早期辅助交互示例，除非用户明确要求，不要优先修改。
- `AI-Coding-课程大纲.md`：课程内容源文件。
- `docs/visual-polish-spec.md`：视觉精修需求、执行项和验收记录。
- `docs/superpowers/plans/2026-07-15-course-structure-refactor.md`：本次课程结构重构计划。
- `7月15日 (1).mp3`：当前尾声 BGM。
- 已接入的三个 `.mp4`：开场案例视频，位于仓库根目录；另有未接入的 `Jason.mp4`。
- `AI-Coding-Course/interactive-lecture.html.bak-20260616-145905`：旧备份，不要覆盖当前主文件。
- `Jason.mp4`：用户新增的未跟踪视频素材，当前未接入课件。
- `.gitignore`：已存在，不要随意扩大忽略范围。

## 4. 最近提交

```text
1b172d1 docs(course): record finale edge fade
fe7ff5c fix(course): fade finale visual edges
7ebb1c5 docs(course): record compact finale rollback
e328ba2 fix(course): restore compact finale composition
df9e9a7 docs(course): record finale refinement
6ad050d fix(course): refine finale subtitle and portrait blending
5b5d7e7 docs(course): record visual polish execution and QA
bb92a2c fix(course): apply cinematic finale on entry
c2a6443 refactor(course): turn summary into one-page reference
4f0fe55 refactor(course): slim harness and add appendix
878df0b refactor(course): merge bridge and path workflow
dbb5e75 refactor(course): move advanced context to appendix
9ce6001 refactor(course): simplify prompt teaching sequence
6a8816b docs(course): plan lecture structure refactor
afad308 fix(course): clear education page side rail
1e4d30b feat(course): add education investment page
58ec8f9 feat(course): add naval four-point lesson
39c04e1 docs(course): link claude rules constitution guide
feca494 fix(course): bundle finale portraits locally
bd140cf feat(course): add opening AI demo videos
bbf2af6 feat(course): replace finale background music
22499c5 chore(course): remove outdated finale line
a376fac refactor(course): make finale one-paragraph slides
3bb4e9a fix(course): center finale text and portraits
0562b89 feat(course): add finale background music
806ff39 feat(course): add Shakespeare finale title
```

用户要求“每做完一步 commit”；后续修改也应保持小步提交。

## 5. 已执行验证

### 静态检查

已用 Node `new Function` 解析内联脚本，解析通过。当前结构检查确认：

- 22 个 section，且无残留 `#bridge` 导航或 section。
- 22 个 `data-final-step`，编号连续 0–21。
- 每个尾声 step 只有一个直接段落。
- 3 个开场视频。
- 9 个本地头像引用。
- 所有导航锚点存在；Prompt Lab 的 `diagnosisChoices`、`diagnosisResult`、`promptImprovement` 仍存在；所有 tab 都有对应 panel。
- 无 `git diff --check` 问题。

### 浏览器检查

曾用本地静态服务器验证：

```bash
cd /Users/jerry/Documents/repo/讲课
python3 -m http.server 4173
```

验证结果：

- 三个开场视频均返回 HTTP 200，浏览器 `readyState=4`，桌面显示为约 550×309。
- 新 BGM 路径返回 HTTP 200，音频可加载。
- 尾声第一组人物幕加载莱布尼茨、图灵、香农、冯·诺依曼头像。
- 尾声第二组人物幕加载巴贝奇、图灵、乔布斯头像。
- 所有本地头像实际 `naturalWidth > 0`。

本次验收使用过 `http://127.0.0.1:4173` 临时静态服务器；当前没有后台 HTTP 服务。

最新尾声视觉验收：

- 1440×900 桌面视口：场景图中心内容保留，四周自然渐隐，无硬矩形边界。
- 390×844 窄屏视口：横向溢出为 0，尾声遮罩规则可正常解析。
- 浏览器控制台无 warning/error；页面标题和本地 HTTP 页面身份正确。
- `file://` 页面受浏览器安全策略限制，不能把该限制误报为运行时截图通过；HTTP 等价预览已完成截图验收。

## 6. 已知风险与边界

- 两个视频的文件名很长，且错题本视频文件名含 `#`；修改或重命名视频时必须同步更新 HTML 的编码 src。
- 直接用 `file://` 打开时，视频和音频路径依赖仓库目录结构；如果媒体播放异常，先从仓库根目录启动静态服务器，不要立即改路径。
- BGM 需要真实的右方向键用户手势启动；自动化工具可能因浏览器自动播放策略无法产生声音。
- 外部课程链接、人物引语和日期不是本次交接的改动范围；如果用户要求核验来源，再单独做联网核查。
- 不要删除用户新增的两个视频、BGM 或 `assets/people/`。
- `Jason.mp4` 是当前未跟踪的用户素材，除非用户明确要求，不要删除、重命名或自动加入 HTML。

## 7. 新对话接手流程

先执行：

```bash
cd /Users/jerry/Documents/repo/讲课
git status --short --branch
git log --oneline -8
```

然后：

1. 阅读本 `HANDOFF.md`，先确认 `Jason.mp4` 等未跟踪素材是否属于用户的新需求。
2. 打开 `AI-Coding-Course/interactive-lecture.html`，先检查开场视频，再检查尾声。
3. 修改前保留当前工作区改动，不要使用破坏性 Git 命令。
4. 每个独立修改完成后运行静态解析和 `git diff --check`，再提交。
5. 如果涉及媒体路径，确认文件真实存在，并用本地静态服务器验证 HTTP 200。

直接打开：

```bash
open "file:///Users/jerry/Documents/repo/讲课/AI-Coding-Course/interactive-lecture.html"
```

本地 HTTP 预览：

```bash
cd /Users/jerry/Documents/repo/讲课
python3 -m http.server 4173
```

页面地址：

```text
http://127.0.0.1:4173/AI-Coding-Course/interactive-lecture.html
```

当前没有正在进行的开发任务；下一步以用户新指令为准。
