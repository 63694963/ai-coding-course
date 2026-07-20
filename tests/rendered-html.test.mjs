import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const htmlFiles = [
  "AI-Coding-Course/interactive-lecture.html",
  "public/interactive-lecture.html",
];

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
  });
}
