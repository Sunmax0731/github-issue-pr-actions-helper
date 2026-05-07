import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../extension/src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "github-helper-1",
  "title": "GitHub Issue・PR・Actions補助 サンプル 1",
  "repository": "Sunmax0731/github-issue-pr-actions-helper",
  "issueOrPr": "#1",
  "action": "review",
  "evidence": "docs/manual-test.md"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "github-helper-missing-required",
  "title": "必須項目不足サンプル",
  "issueOrPr": "#1",
  "action": "review",
  "evidence": "docs/manual-test.md"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
