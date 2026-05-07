import { analyzeItems, renderMarkdownReport } from './src/core.mjs';

const sample = {
  "items": [
    {
      "id": "github-helper-1",
      "title": "GitHub Issue・PR・Actions補助 サンプル 1",
      "repository": "Sunmax0731/github-issue-pr-actions-helper",
      "issueOrPr": "#1",
      "action": "review",
      "evidence": "docs/manual-test.md"
    },
    {
      "id": "github-helper-missing-required",
      "title": "必須項目不足サンプル",
      "issueOrPr": "#1",
      "action": "review",
      "evidence": "docs/manual-test.md"
    }
  ]
};
const input = document.getElementById('input');
const result = document.getElementById('result');
input.value = JSON.stringify(sample, null, 2);

document.getElementById('analyze').addEventListener('click', async () => {
  try {
    const data = JSON.parse(input.value);
    const report = analyzeItems(data);
    result.textContent = renderMarkdownReport(report);
    await chrome.storage.local.set({ lastReport: report });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      await chrome.tabs.sendMessage(tab.id, { type: 'TOP20_REPORT', report }).catch(() => undefined);
    }
  } catch (error) {
    result.textContent = String(error?.message || error);
  }
});
