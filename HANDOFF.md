# HANDOFF

更新时间：2026-06-26  
工作区：`/Users/jerry/Documents/repo/讲课`

## 0. 最近变更（本次 Session）

- **Skill 链接替换**：10 个失效的 `affaan-m/everything-claude-code` 链接已替换为 6 个验证通过的 `alirezarezvani/claude-skills`（19k+ stars）链接。
- **Skill 卡片已可见**：原 `hidden` 属性已移除。
- **Git 已有 commit 历史**：`main` 分支已有 4 个 commit：baseline → Warm Editorial 风格（后来回退）→ Skill 链接修复 → 取消隐藏。
- 当前 HEAD：`dc4997e`

## 1. 项目目标

为零编程基础学员制作一个可直接投屏讲解、可现场互动的 AI Coding 单文件 HTML 课程。

课程主线：

- Token 是 AI 的注意力资源。
- Prompt Engineering：把目标说清楚。
- Context Engineering：把背景给清楚。
- Harness Engineering：把 AI 放入可控的工作系统。
- 四种人的能力：想象力、好奇心、学习力、执行力。
- 前瞻内容：Loop Engineering。

主交付物：

- `AI-Coding-Course/interactive-lecture.html`

## 2. 当前范围与明确不做

当前范围：

- 单文件 HTML，CSS 与 JavaScript 全部内联。
- 支持直接通过 `file://` 打开。
- 可选用 Python 静态服务器通过 HTTP 预览。
- 长滚动讲解、固定顶部导航、章节锚点、滚动进度。
- 桌面投屏与移动端响应式布局。
- Vanilla JavaScript 课堂互动。
- GitHub Skill 链接和产品/模型官方链接。
- Why、Prompt、Context、工具/模型、Harness、Loop、项目练习等课程内容。

明确不做：

- 不使用 React、Vue、Next.js 或其他前端框架。
- 不引入 npm、打包器或构建步骤。
- 不提供后端、登录、数据库或持久化。
- 不在本交接 Session 继续功能开发。
- 不记录 API Key、令牌或其他敏感信息。
- 未经用户批准，不删除 `.codegraph`、`.reasonix`、`.playwright-mcp` 或备份文件。
- 未经用户批准，不创建首个 git commit。

## 3. 当前完成状态

主文件现状：

- `AI-Coding-Course/interactive-lecture.html`
- 约 2330 行。
- 约 311 KB。
- 最后修改时间：2026-06-26。
- 20 个 `<section class="section">`。
- 7 个产品/模型链接。
- **6 个 GitHub Skill 链接**（来源：`alirezarezvani/claude-skills`），已全部验证 HTTP 200。
- 1 个内嵌 Base64 图片。

当前主要章节：

1. `hero`
2. `why`
3. `map`
4. `icebreaker`
5. `opening`
6. `token`
7. `capability`
8. `prompt`
9. `prompt-lab`
10. `context`
11. `context-lab`
12. `tool-model`
13. `harness`
14. `harness-lab`
15. `relation`
16. `loop`
17. `bridge`
18. `path`
19. `cases`
20. `project-clinic`
21. `summary`

说明：`hero` 使用 `section hero`，总 `<section class="section">` 统计为 20，但课程语义入口包含上述 21 个 id。

### 已验证成功标准

- HTML 结构检查通过：
  - `script` 开闭标签各 1 个。
  - `style` 开闭标签各 1 个。
  - `</html>` 为 1 个。
  - 无重复 id。
  - 导航无失效锚点。
- `file://` 可直接加载页面。
- Playwright 截图成功：
  - `#why`，1280×720。
  - `#loop`，1280×720，等待 3 秒。
  - `#harness`，1280×720，等待 3 秒。
  - `#harness`，390×844，等待 3 秒。
- 以上复查截图均为有效 PNG，尺寸正确。
- 17 个外部产品/模型/Skill 链接在 2026-06-24 检查时全部返回 HTTP 200。

### 尚未达到的成功标准

- 未逐章节检查全部 20 个 section。
- 未自动化测试全部 26 个按钮和 9 个 input。
- 未验证所有课程引语及其日期、作者、原始出处。
- 未建立稳定的自动化 QA 脚本。
- git 尚无首个 commit，不能可靠回滚到版本历史。

## 4. 任务状态

### 已完成

- 创建完整单文件交互讲解页。
- Token 100 格注意力分配互动。
- 四能力检查器。
- Prompt 诊断与条件组合练习。
- Context 场景模拟器。
- 开发工具/编码智能体与大模型的区别说明。
- Harness 结构、规则层级、项目文件夹练习。
- 10→6 个跨行业 Skill 示例（已替换为 alirezarezvani/claude-skills 链接，已取消隐藏）。
- AGENTS.md / CLAUDE.md / Codex Profile 内层滚动窗口。
- 工具/模型官方链接。
- Why / Token 资本开场内容。
- AI 翻车急救话术。
- Loop Engineering 前瞻章节。
- 项目练习和初学者路径。
- 生成 `interactive-lecture.html.bak-20260616-145905` 备份。
- 初始化 git 仓库及 `.gitignore`，但尚未提交。

### 进行中

- 无正在执行的开发任务。
- 无后台 HTTP 服务。

### 待处理

- 核验 Why 和 Loop 章节中的人物引语与时间。
- 处理快速锚点打开时 Reveal 动画的时序敏感性。
- 全章节桌面/移动视觉 QA。
- 全交互功能 QA。
- 决定是否保留内嵌 Base64 人物图。
- 决定是否创建首个 git commit。
- 用户继续审核课程逻辑、措辞和课堂节奏。

## 5. 关键技术方案与决策

### 单文件架构

方案：

- HTML、CSS、JS 和一张人物图全部封装在 `interactive-lecture.html`。

理由：

- 无需安装依赖。
- 可直接复制和投屏。
- `file://` 即可运行核心功能。

代价：

- 文件已达到 313 KB。
- 单文件 2330 行，后续局部编辑容易产生回归。
- 内嵌 Base64 图片影响可维护性和 diff 可读性。

### 长滚动 + 顶部导航

方案：

- 固定导航、章节锚点、滚动进度和 scroll-spy。

理由：

- 符合 `.claude/plans/html-presentation-plan.md` 的已定结构。
- 比传统逐页 PPT 更适合连续讲解和快速跳转。

### Vanilla JavaScript

方案：

- 不使用框架。
- 使用 `IntersectionObserver`、DOM 事件和原生表单控件。

理由：

- 保持自包含。
- 避免构建工具。
- 兼容直接打开。

### Reveal 动画

方案：

- `.reveal` 默认透明并下移。
- `IntersectionObserver` 添加 `.on`。
- `prefers-reduced-motion` 下直接显示。

理由：

- 提供讲解节奏。

当前风险：

- 直接打开深层锚点并只等待 800ms 时，`#loop` 和移动端 `#harness` 曾截图为主体近乎未显现。
- 等待 3 秒后均正常。
- 说明动画/锚点/截图存在时序敏感性，应优先修复或明确测试等待条件。

### 外部链接

方案：

- Skill 指向 `alirezarezvani/claude-skills` GitHub 页面（19k+ stars，345 个生产级 Skill）。
- 产品和模型指向官方页面。

理由：

- 避免指向用户本机路径。
- 学员可直接查看公开资料。
- 之前使用的 `affaan-m/everything-claude-code` 链接已全部失效（404），已替换。

### Git 与本地支持文件

方案：

- 已初始化 `.git`。
- `.gitignore` 忽略：
  - `.codegraph/`
  - `.reasonix/`
  - `.playwright-mcp/`
  - `.DS_Store`
  - `/tmp/`

现状：

- 分支为 `main`。
- `main` 尚无任何 commit。
- 所有交付文件仍为 untracked。

## 6. 相关文件与入口

### 主要文件

- `AI-Coding-Course/interactive-lecture.html`
  - 主交付物。
- `AI-Coding-Course/interaction-demo.html`
  - 早期/辅助交互示例，1034 行，41200 bytes。
- `AI-Coding-课程大纲.md`
  - 课程内容源，1396 行，37623 bytes。
- `.claude/plans/html-presentation-plan.md`
  - 初始页面计划，106 行，3485 bytes。
- `AI-Coding-Course/interactive-lecture.html.bak-20260616-145905`
  - 备份，96955 bytes。
- `reasonix.toml`
  - Reasonix 本地配置；未包含实际密钥。
- `.gitignore`
- `HANDOFF.md`

### 关键代码位置

`AI-Coding-Course/interactive-lecture.html`：

- 顶部导航：约 935-954 行。
- Why / Token 资本：约 986 行开始。
- Token 互动：约 1117 行开始。
- Prompt 与诊断：约 1208、1232 行开始。
- Context 与模拟器：约 1263、1293 行开始。
- 工具/模型：约 1323 行开始。
- Harness：约 1414 行开始。
- 10 个 Skill：约 1453 行。
- Profile 全文滚动窗口：约 1469-1488 行开始。
- Harness 练习及翻车急救：约 1604、1654 行。
- Loop Engineering：约 1700 行开始。
- 项目练习：约 1897 行开始。
- JS 启动与 Reveal：约 1989 行开始。
- Scroll-spy：约 2001 行。
- Token 逻辑：约 2035-2091 行。
- 四能力检查：约 2093 行。
- Context 逻辑：约 2182 行。
- 文件夹排序：约 2215 行。
- Harness 练习逻辑：约 2257 行。
- 项目练习逻辑：约 2294 行。
- 键盘翻屏：约 2314 行。

### 页面入口

直接打开：

```text
file:///Users/jerry/Documents/repo/%E8%AE%B2%E8%AF%BE/AI-Coding-Course/interactive-lecture.html
```

## 7. 已执行命令与结果

### Git 状态

```bash
git branch --show-current
git log --oneline --decorate -5
git status --porcelain=v1 -uall
```

结果：

- 当前分支：`main`。
- `git log` 失败：

```text
fatal: your current branch 'main' does not have any commits yet
```

- 所有交付文件均未跟踪：

```text
?? .claude/plans/html-presentation-plan.md
?? .gitignore
?? AI-Coding-Course/interaction-demo.html
?? AI-Coding-Course/interactive-lecture.html
?? AI-Coding-Course/interactive-lecture.html.bak-20260616-145905
?? AI-Coding-课程大纲.md
?? HANDOFF.md
?? reasonix.toml
```

### HTML 结构检查

使用 Python `HTMLParser` 检查 id、导航和外链。

结果：

```text
bytes 313041
sections 20
ids 44
unique_ids 44
duplicate_ids []
nav 17
nav_missing []
external_links 17
script_tags 1 1
style_tags 1 1
html_close 1
```

附加计数：

```text
base64_images 1
inline_styles 15
buttons 26
inputs 9
tables 7
sections 20
```

### 外链检查

对 7 个产品/模型链接和 10 个 Skill GitHub 链接执行：

```bash
curl -L -s -o /dev/null -w '%{http_code}' <URL>
```

结果：

- 17 个链接全部返回 `200`。

### 本地 HTTP 检查

```bash
lsof -nP -iTCP:8765 -sTCP:LISTEN
curl -s -o /dev/null -w 'local_http=%{http_code}\n' \
  http://127.0.0.1:8765/AI-Coding-Course/interactive-lecture.html
```

结果：

```text
local_http=000
```

当前没有本地 HTTP 服务。

### Playwright 截图

成功生成：

```text
/tmp/handoff-20260624-why.png                  1280x720
/tmp/handoff-20260624-loop.png                 1280x720
/tmp/handoff-20260624-harness-desktop-3s.png   1280x720
/tmp/handoff-20260624-harness-mobile-3s.png     390x844
```

视觉复查：

- Why 桌面截图正常。
- Loop 桌面截图等待 3 秒后正常。
- Harness 桌面截图等待 3 秒后正常。
- Harness 移动截图等待 3 秒后正常，无明显横向溢出。

已发生的失败：

1. 800ms 等待的 `#loop` 和移动端 `#harness` 截图主体近乎未显现。
2. 一次并行执行中，`sips` 在 Playwright 尚未完全写完文件时报告：

```text
Warning: /tmp/handoff-20260624-loop.png not a valid file - skipping
```

串行复查后该文件为有效 PNG：

```text
PNG image data, 1280 x 720, 8-bit/color RGB, non-interlaced
```

### 与备份比较

```bash
git diff --no-index --stat \
  AI-Coding-Course/interactive-lecture.html.bak-20260616-145905 \
  AI-Coding-Course/interactive-lecture.html
```

结果：

```text
1 file changed, 216 insertions(+), 13 deletions(-)
```

主要新增内容：

- Why / Token 资本。
- 首页反馈提示。
- 翻车急救。
- Loop Engineering。
- 额外导航入口和编号。

## 8. 当前已知故障

1. 快速锚点渲染时序不稳定
   - 800ms 截图可能遇到 `.reveal` 尚未变为可见。
   - 3 秒后正常。
   - 尚未定位到是 IntersectionObserver、锚点定位还是截图时序。

2. 本地 HTTP 服务未运行
   - `localhost:8765` 返回 `000`。
   - 不影响 `file://` 直接使用。

3. Git 仓库没有 commit
   - 无可用历史基线。
   - `git diff` 无法展示未跟踪文件相对仓库的变化。

4. 页面内容引用缺乏出处
   - Why 中存在“Satya Nadella · 2026年6月”及多段直接/近似引语。
   - Loop 中存在 Peter Steinberger、Boris Cherny 引语。
   - 当前页面没有来源链接。
   - 本交接 Session 未核验真实性、日期或措辞。

## 9. 未解决问题、风险、阻塞项和假设

### 高优先级风险

- 人物引语和日期可能不准确或缺乏可追溯来源。
- Why 章节使用直接引语式写法，授课前必须核验。
- Loop Engineering 属于新兴概念，定义和行业共识可能变化。
- 没有 git 首个 commit → ✅ 已有 4 个 commit，可回滚。

### 技术风险

- 2330 行单文件维护成本高。
- Base64 图片导致主文件从备份的约 97 KB 增长到 313 KB。
- 15 处 inline style 增加视觉维护难度。
- 自动截图必须等待动画完成，当前没有统一 ready 标志。
- 只抽样验证，不能证明全部章节和交互无回归。

### 内容风险

- `.claude.md` 的称呼可能让学员混淆；实际常见文件名是 `CLAUDE.md`，Codex 使用 `AGENTS.md`/规则。
- Claude Code、Codex、RexIDE 与模型层的分类目前合理，但产品定位可能变化。
- 外部链接当前返回 200，不保证未来稳定。

### 阻塞项

- 打开主页面不受阻塞，可使用 `file://`。
- HTTP 预览需要先启动服务。
- 创建版本基线需要用户批准首次 commit。

### 必要假设

- 受众仍是跨行业、无编程基础的学员。
- 交付形式仍是单文件 HTML。
- 课程允许加入前瞻内容，但必须与必修内容区分。
- 用户希望保留当前 Why、Loop 和 Harness 扩展，除非后续明确要求删除。

## 10. 工作区未提交改动

仓库状态：

- `.git` 已存在。
- 分支：`main`。
- **已有 4 个 commit**（baseline → Warm Editorial → Skill 修复 → 取消隐藏）。
- 当前 HEAD：`dc4997e`。

本 Session 修改：

- 修改 `AI-Coding-Course/interactive-lecture.html`（替换 10 个失效 Skill 链接为 6 个新链接，取消 hidden）。
- 更新 `HANDOFF.md`。

本 Session 之前已经存在的修改/文件：

- `.claude/plans/html-presentation-plan.md`
- `.gitignore`
- `AI-Coding-Course/interaction-demo.html`
- `AI-Coding-Course/interactive-lecture.html`
- `AI-Coding-Course/interactive-lecture.html.bak-20260616-145905`
- `AI-Coding-课程大纲.md`
- `reasonix.toml`
- 旧版 `HANDOFF.md`

被 `.gitignore` 忽略的本地支持文件：

- `.codegraph/`
- `.reasonix/`
- `.playwright-mcp/`
- `.DS_Store`

限制：

- 因无 commit，无法通过 git 精确区分“项目原始文件”和“历史 Session 修改”。
- 可确认的是：本次交接 Session 仅修改 `HANDOFF.md`。

## 11. 恢复环境与命令

环境：

- macOS。
- Shell：zsh。
- 工作目录：`/Users/jerry/Documents/repo/讲课`。
- 无 npm 依赖。
- 无构建命令。
- 无需密钥。

直接打开：

```bash
open "file:///Users/jerry/Documents/repo/%E8%AE%B2%E8%AF%BE/AI-Coding-Course/interactive-lecture.html"
```

启动可选 HTTP 服务：

```bash
cd /Users/jerry/Documents/repo/讲课
python3 -m http.server 8765
```

HTTP 地址：

```text
http://127.0.0.1:8765/AI-Coding-Course/interactive-lecture.html
```

检查 git：

```bash
cd /Users/jerry/Documents/repo/讲课
git status --short
git log --oneline --decorate -5
```

预期现状：

- `git status` 显示工作区干净。
- `git log` 显示 4 个 commit，最新为 `dc4997e`。

检查 HTML 结构：

```bash
python3 - <<'PY'
from pathlib import Path
from html.parser import HTMLParser
s = Path("AI-Coding-Course/interactive-lecture.html").read_text()
class P(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.nav = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if "id" in d:
            self.ids.append(d["id"])
        if tag == "a" and d.get("href", "").startswith("#"):
            self.nav.append(d["href"][1:])
p = P()
p.feed(s)
print("sections", s.count('<section class="section"'))
print("duplicates", sorted({x for x in p.ids if p.ids.count(x) > 1}))
print("nav_missing", [x for x in p.nav if x not in set(p.ids)])
PY
```

抽样截图：

```bash
playwright screenshot \
  --viewport-size "1280,720" \
  --wait-for-selector "#loop" \
  --wait-for-timeout 3000 \
  "file:///Users/jerry/Documents/repo/%E8%AE%B2%E8%AF%BE/AI-Coding-Course/interactive-lecture.html#loop" \
  /tmp/loop.png
```

## 12. 下一步操作

### P0：核验人物引语和时间

操作：

1. 查找 Nadella、Peter Steinberger、Boris Cherny 的原始来源。
2. 对照当前中文措辞。
3. 无可靠来源的内容改为“课程观点”而非直接引语。
4. 为可靠引语增加来源链接和日期。

验证：

- 页面中的每个具名引语都有可点击来源。
- 来源页面能支持对应陈述。
- 不再出现未经核验的引号式断言。

### P0：修复锚点直达与 Reveal 时序

操作：

1. 复现 800ms 时 `#loop` 和 `#harness` 内容未显现。
2. 检查 `IntersectionObserver`、`scroll-margin-top` 和初始 hash。
3. 可考虑首次加载时主动显示目标 section，或增加页面 ready 标志。

验证：

- `file://...#loop` 在 800ms 内截图主体可见。
- `file://...#harness` 在 390×844 下 800ms 内主体可见。
- 正常滚动动画仍工作。

### P1：建立 git 基线

操作：

1. 用户确认哪些文件应纳入版本库。
2. 检查 `.gitignore`。
3. 创建首个 commit。

验证：

- `git log -1` 能显示基线 commit。
- `git status --short` 为空或只显示明确保留的未跟踪文件。

### P1：全章节视觉 QA

操作：

1. 遍历 17 个顶部导航锚点。
2. 对每个锚点截图桌面 1280×720 和移动 390×844。
3. 检查文字截断、重叠、横向溢出、动画未触发。

验证：

- 所有导航目标均有桌面和移动截图。
- 无页面级横向滚动。
- 标题、卡片和代码块均可读。

### P1：全交互 QA

操作：

1. 测试 26 个按钮和 9 个 input。
2. 覆盖 Token、Prompt、Context、文件夹排序、Harness 和项目练习。
3. 检查键盘 PageUp/PageDown、演示模式和回顶。

验证：

- 每个控件产生预期 DOM 状态变化。
- 控制台无 JavaScript 错误。
- 可保存一份自动化测试结果。

### P2：评估文件体积与结构

操作：

1. 判断人物图是否继续使用 Base64。
2. 判断是否把重复 inline style 提取成 CSS class。
3. 只在用户同意时拆分文件。

验证：

- 页面视觉不变。
- `file://` 仍可运行。
- 文件大小或维护复杂度有可量化下降。

