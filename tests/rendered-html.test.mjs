import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import test from "node:test";

test("provides a Cloudflare Pages root entry point", async () => {
  const index = await readFile("public/index.html", "utf8");

  assert.match(index, /url=interactive-lecture\.html/);
  assert.match(index, /href="interactive-lecture\.html"/);
});

const htmlFiles = ["public/interactive-lecture.html"];

test("keeps public as the single course source", async () => {
  await assert.rejects(access("AI-Coding-Course/interactive-lecture.html"), {
    code: "ENOENT",
  });
});

test("keeps every local course asset inside public", async () => {
  const html = await readFile("public/interactive-lecture.html", "utf8");
  const references = [...html.matchAll(/(?:src|poster)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((reference) => !/^(?:https?:|data:|blob:)/.test(reference));

  assert.doesNotMatch(html, /(?:src|poster)="\.\.\//);

  await Promise.all(
    references.map((reference) =>
      access(resolve("public", decodeURIComponent(reference))),
    ),
  );
});

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

    const wittgensteinIntro = sectionBody(html, "wittgenstein-intro");
    const capability = sectionBody(html, "capability");
    assert.ok(html.indexOf('id="wittgenstein-intro"') < html.indexOf('id="capability"'));
    assert.match(wittgensteinIntro, /我的语言的界限意味着我的世界的界限/);
    assert.match(wittgensteinIntro, /The limits of my language mean the limits of my world/);
    assert.match(wittgensteinIntro, /assets\/people\/wittgenstein\.jpg/);
    assert.match(capability, /四个能力支点/);
    assert.match(capability, /想象力/);
    assert.doesNotMatch(html, /content:\s*"想象力\\A好奇心\\A学习力\\A执行力"/);

    const zombieCase = sectionBody(html, "zombie-cleaner");
    assert.ok(html.indexOf('id="loop"') < html.indexOf('id="zombie-cleaner"'));
    assert.ok(html.indexOf('id="zombie-cleaner"') < html.indexOf('id="path"'));
    assert.match(zombieCase, /《丧尸清道夫》/);
    assert.equal((zombieCase.match(/data-case-dialog-open=/g) ?? []).length, 6);
    assert.match(zombieCase, /href="https:\/\/v\.douyin\.com\/TbqXH-LChk4\/?"/);
    assert.match(zombieCase, /id="zombie-case-dialog"/);
    assert.equal((zombieCase.match(/class="zombie-case-reference"/g) ?? []).length, 6);
    assert.match(zombieCase, /data-case-dialog-close/);

    const path = sectionBody(html, "path");
    assert.doesNotMatch(path, /从普通任务到第一个小工具/);
    assert.doesNotMatch(path, /现场示范：把客户回访变成一个小工具/);
    assert.match(path, /5 分钟跟着做/);
    const robotPrompt = sectionBody(html, "zombie-cleaner");
    assert.match(robotPrompt, /data-case-detail="robot-prompt"/);
    assert.match(robotPrompt, /robot-base\.png/);
    assert.match(robotPrompt, /robot-cowboy\.png/);

    const finale = sectionBody(html, "finale");
    assert.match(finale, /class="finale-touch-controls"/);
    assert.match(finale, /id="finalePrevButton"/);
    assert.match(finale, /id="finaleNextButton"/);
    assert.match(finale, /上一幕/);
    assert.match(finale, /下一幕/);
    assert.match(html, /function goToNextFinaleStep\(\)/);
  });
}
