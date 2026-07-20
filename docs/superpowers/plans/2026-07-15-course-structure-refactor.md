# Course Structure Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce repetition in the beginner lecture flow while preserving the Prompt Lab interaction, moving advanced agent material out of beginner Context, and making the summary page a genuinely screenshot-friendly one-page reference.

**Architecture:** Keep the single-file HTML architecture and existing vanilla-JS interactions. Reorder or remove only existing section content; move advanced blocks into existing `data-appendix` sections instead of creating a new subsystem. Merge Bridge and Path into one `#path` section with a five-step workflow.

**Tech Stack:** Native HTML, inline CSS, inline JavaScript; no build step or dependencies.

## Global Constraints

- Main deliverable remains `AI-Coding-Course/interactive-lecture.html`.
- Keep `Prompt Lab` diagnosis interaction intact.
- Keep the existing four capability checker interaction intact, but remove its duplicate copy from Summary.
- Keep the existing appendix mechanism (`data-appendix`) and hidden appendix material available for later expansion.
- No external assets or new dependencies.
- Verify inline JavaScript parsing, section order, interaction IDs, `git diff --check`, and a clean worktree before handoff.

---

### Task 1: Establish the baseline and structural assertions

**Files:**
- Modify: `docs/superpowers/plans/2026-07-15-course-structure-refactor.md`
- Inspect: `AI-Coding-Course/interactive-lecture.html`

- [x] **Step 1: Confirm baseline**

Run `rtk git status --short --branch` and record that the starting worktree is clean before editing the lecture file.

- [x] **Step 2: Map section IDs and interaction anchors**

Record the current IDs `opening`, `prompt`, `prompt-lab`, `context`, `harness`, `bridge`, `path`, `summary`, `tool-model`, `productivity-tips`, and `loop`; record the existing IDs `checks`, `diagnosisChoices`, `diagnosisResult`, `promptImprovement`, `tokenVerdict`, `tokenAdvice`, and `tokenExample` that must not be broken.

### Task 2: Remove duplicated notification examples from the Prompt opening

**Files:**
- Modify: `AI-Coding-Course/interactive-lecture.html` in `#opening`

- [x] **Step 1: Keep only the beginner framing**

Keep the title `Vibe coding 不是魔法`, the lead `AI 更像一个能力强、反应快、但不了解你具体情况的实习助手。`, and a short explanation that missing context causes guessing.

- [x] **Step 2: Delete the duplicate notification split**

Remove the `.split` block containing the two notification prompt boxes and keep one short quote that points forward to Prompt: `复杂任务都需要把目标、背景和检查标准讲清楚。`

### Task 3: Keep Prompt as the three-part teaching page and preserve Prompt Lab

**Files:**
- Modify: `AI-Coding-Course/interactive-lecture.html` in `#prompt` and `#prompt-lab`

- [x] **Step 1: Keep the three Prompt components**

Retain the three cards `目标与场景`, `边界与材料`, and `格式与标准`, plus one compact example if space permits; do not copy the notification comparison from `#opening`.

- [x] **Step 2: Preserve the complete Prompt Lab**

Do not remove or rename `diagnosisChoices`, `diagnosisResult`, `promptImprovement`, or their `data-answer` values. The existing click-to-diagnose interaction remains the full practice page.

### Task 4: Move advanced Context material into the appendix

**Files:**
- Modify: `AI-Coding-Course/interactive-lecture.html` in `#context` and `#tool-model`

- [x] **Step 1: Keep beginner Context only**

Keep the definition, four background cases, the customer follow-up example, and the short conclusion. Remove the stage card containing `每一个 Token 都有机会成本` / `让主对话保持干净` and the stage card titled `不要把用户级 CLAUDE.md 写成百科全书`.

- [x] **Step 2: Append the advanced blocks to the existing appendix**

Insert one appendix stage card after the tool/model comparison with the title `高级 Context：上下文也有成本`, containing the two profile-rule cards and the CLAUDE.md cost explanation. Do not add navigation or external dependencies.

### Task 5: Merge Bridge and Path into one five-step beginner workflow

**Files:**
- Modify: `AI-Coding-Course/interactive-lecture.html` in `#bridge` and `#path`
- Modify: `AI-Coding-Course/interactive-lecture.html` navigation labels if needed

- [x] **Step 1: Replace the separate Bridge page**

Change `#bridge` into the merged page `#path` with the single workflow: `选一个每天重复的动作 → 说清需求 → 生成第一版 → 发现问题 → 修改成功`.

- [x] **Step 2: Fold the useful Path examples into the merged page**

Keep one ordinary-task-to-small-tool example, the beginner prompt examples, and the four-row five-minute walkthrough; remove repeated three-card path guidance once the five-step workflow is present.

- [x] **Step 3: Remove the duplicate section**

Delete the old standalone `#bridge` section and keep only one visible `#path` section. Update any `#bridge` navigation link to `#path` or remove it.

### Task 6: Slim Harness and move the tool-exhibition material to appendix

**Files:**
- Modify: `AI-Coding-Course/interactive-lecture.html` in `#harness`, `#tool-model`, and existing hidden appendix blocks

- [x] **Step 1: Keep the Harness main line**

Keep only the four cards `材料和成果分开`, `规则写清楚`, `要求验证证据`, and `保留回退路径`; keep the sentence that `CLAUDE.md 是 Vibe coding 的宪法`; keep one real Skill example.

- [x] **Step 2: Move or hide advanced comparison material**

Move the `提示词 vs Skill` matrix, the six cross-industry Skill cards, and the extra hidden Harness teaching cards into the existing appendix area, preserving their content for later expansion but removing them from the visible beginner Harness flow.

- [x] **Step 3: Keep the visible Harness page short**

Remove duplicated metaphors, extra rule-layer tables, and hidden blocks from the visible `#harness` body so the section ends after the four cards, CLAUDE.md explanation, one Skill example, and one concise conclusion.

### Task 7: Make Summary a one-screen reference and move emergency scripts to appendix

**Files:**
- Modify: `AI-Coding-Course/interactive-lecture.html` in `#summary` and `#productivity-tips`

- [x] **Step 1: Keep only three visual blocks in Summary**

Keep `一个好 Prompt 的六个零件`, `三种 Engineering 一句话`, and the safety red-line card. Remove the four-capability self-check block and the five emergency scripts from Summary.

- [x] **Step 2: Move emergency scripts to appendix**

Append a compact `附录：AI 急救话术` stage card to `#productivity-tips` after the existing Typeless content. Preserve the five scripts exactly enough to remain usable.

- [x] **Step 3: Make the summary visually one-page**

Use the existing `stage-card`, `grid-3`, and `grid-2` patterns only; do not introduce a new carousel or additional interaction on Summary.

### Task 8: Verify and hand off

**Files:**
- Inspect: `AI-Coding-Course/interactive-lecture.html`
- Modify: `HANDOFF.md` only if section counts or current-state notes become stale

- [x] **Step 1: Run structural checks**

Parse the inline script with `new Function`, assert one visible `#path`, no visible `#bridge`, `#opening` has no `.split`, `#prompt-lab` still contains all interaction IDs, advanced Context text exists in the appendix, and Summary no longer contains `四个能力自检` or `五条急救话术`.

- [x] **Step 2: Run formatting and worktree checks**

Run `rtk git diff --check`, inspect the diff, and confirm `rtk git status --short --branch` is clean after commits.

- [x] **Step 3: Commit each independently verified unit**

Use focused commits for Prompt cleanup, Context/appendix move, Bridge/Path merge, Harness/Summary slimming, and final verification or documentation updates.
