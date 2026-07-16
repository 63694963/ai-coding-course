# AI Coding Course

一个面向非技术学习者的 AI Coding 交互式课程演示，用一份可直接打开的网页，讲清楚 Token、上下文、工具调用，以及人与 AI 如何协作完成工作。

## 在线体验

<https://63694963.github.io/ai-coding-course/>

## 项目内容

- 交互式课程页面：从基础概念逐步进入 AI Coding 的实际场景。
- 结尾章节「我们与 AI」：用来自 AI Coding 场景的图片轮播，展示 AI 的普遍适用性。
- 课程配乐与视频素材：用于课堂演示和节奏控制。
- 纯静态网页：不需要数据库、后端服务或 API 密钥。

## 本地运行

项目是静态 HTML，建议通过本地 HTTP 服务打开，以保证视频、音频和相对路径资源正常加载：

```bash
python3 -m http.server 8000
```

然后访问：

<http://localhost:8000/AI-Coding-Course/interactive-lecture.html>

也可以直接双击 `AI-Coding-Course/interactive-lecture.html` 打开，但部分浏览器对 `file://` 下的媒体加载和自动播放限制更严格。

## 操作方式

- 使用键盘 `→` 进入下一步；课程内容和最后章节会按设计好的节奏推进。
- 使用键盘 `←` 返回上一步。
- 最后一部分的配乐需要在用户按下 `→` 后开始播放，以符合浏览器的媒体播放策略。

## 目录结构

```text
.
├── AI-Coding-Course/
│   ├── interactive-lecture.html   # 主课程页面
│   ├── interaction-demo.html      # 交互示例页
│   └── assets/                     # 图片与结尾章节素材
├── *.mp4                          # 课程视频素材
├── 7月15日 (1).mp3                 # 课程配乐
└── .github/workflows/pages.yml    # GitHub Pages 发布配置
```

## 部署

GitHub Pages 当前从 `gh-pages` 分支根目录发布。修改页面或素材后，重新发布对应文件即可更新线上版本。

## 许可证与素材说明

本仓库主要用于课程讲解、课堂演示和个人学习。仓库中的视频、图片、人物肖像及其他媒体素材请在获得相应授权的范围内使用。
