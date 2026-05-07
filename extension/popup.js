import { analyzeItems, buildReviewModel, renderMarkdownReport } from './src/core.mjs';

const sample = {
  "items": [
    {
      "id": "github-issue-pr-actions-helper-1",
      "title": "GitHub Issue・PR・Actions補助 サンプル 1",
      "status": "ready",
      "repository": "Sunmax0731/github-issue-pr-actions-helper",
      "issueOrPr": "#1",
      "action": "review",
      "evidence": "evidence-sample"
    },
    {
      "id": "github-issue-pr-actions-helper-missing-required",
      "title": "必須項目不足サンプル",
      "status": "ready",
      "issueOrPr": "#1",
      "action": "review",
      "evidence": "evidence-sample"
    }
  ]
};
const input = document.getElementById('input');
const result = document.getElementById('result');
const badge = document.getElementById('badge');
const cards = document.getElementById('cards');

function setSample() {
  input.value = JSON.stringify(sample, null, 2);
}

function renderCards(model) {
  cards.innerHTML = model.cards.map((card) => `<div class="card"><span>${escapeHtml(card.label)}</span><b>${escapeHtml(card.value)}</b></div>`).join('');
}

document.getElementById('sample').addEventListener('click', setSample);
document.getElementById('analyze').addEventListener('click', async () => {
  try {
    const report = analyzeItems(JSON.parse(input.value));
    const model = buildReviewModel(report);
    badge.textContent = model.statusLabel;
    renderCards(model);
    result.textContent = renderMarkdownReport(report);
    await chrome.storage.local.set({ lastReport: report });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) await chrome.tabs.sendMessage(tab.id, { type: 'TOP19_REPORT', report }).catch(() => undefined);
  } catch (error) {
    badge.textContent = '入力エラー';
    result.textContent = String(error?.message || error);
  }
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

setSample();
renderCards(buildReviewModel(analyzeItems(sample)));
