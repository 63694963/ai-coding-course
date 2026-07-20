import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const htmlFiles = [
  "AI-Coding-Course/interactive-lecture.html",
  "public/interactive-lecture.html",
];

function sectionBody(html, id) {
  const marker = `id="${id}"`;
  const markerIndex = html.indexOf(marker);
  assert.notEqual(markerIndex, -1, `missing section ${id}`);
  const start = html.lastIndexOf("<section", markerIndex);
  const next = html.indexOf("\n  <section", markerIndex);
  return html.slice(start, next === -1 ? html.length : next);
}

for (const file of htmlFiles) {
  test(`restores the warm-up questions and Obsidian knowledge base in ${file}`, async () => {
    const html = await readFile(file, "utf8");

    assert.match(html, /id="opening-questions"/);
    assert.match(html, /假如现在的 AI 回到了 16 世纪的英国/);
    assert.match(html, /Jerry、Tom 和莎士比亚/);
    assert.equal((html.match(/class="stage-card question-panel reveal"/g) ?? []).length, 3);
    assert.match(html, /href="#opening-questions"/);
    assert.match(html, /<span class="tag green">知识库例子<\/span>/);
    assert.match(
      html,
      /href="obsidian:\/\/open\?vault=%E5%90%B4%E5%98%89%E7%A6%84%E7%9A%84%E7%9F%A5%E8%AF%86%E7%AC%94%E8%AE%B0&file=000AI%20brain%2Findex\.md"/,
    );
    assert.match(html, /打开 Obsidian 知识库/);

    const context = sectionBody(html, "context");
    const toolModel = sectionBody(html, "tool-model");
    const loop = sectionBody(html, "loop");
    assert.match(context, /高级 Context/);
    assert.match(context, /上下文窗口也有成本/);
    assert.doesNotMatch(toolModel, /高级 Context/);
    assert.doesNotMatch(toolModel, /上下文窗口也有成本/);
    assert.doesNotMatch(loop, /一个 Loop 的五个零件 \+ 一个记忆/);
    assert.match(loop, /Loop Engineering：让 AI 自己循环起来/);
  });
}
