import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, buildReviewModel, renderHtmlReport } from '../extension/src/core.mjs';

test('popup review model exposes cards and next actions', () => {
  const report = analyzeItems({ items: [{
  "id": "github-issue-pr-actions-helper-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "issueOrPr": "#1",
  "action": "review",
  "evidence": "evidence-sample"
}] });
  const model = buildReviewModel(report);
  assert.equal(model.statusLabel, '要修正');
  assert.ok(model.cards.length >= 4);
  assert.match(renderHtmlReport(report), /Next Actions/);
});
