chrome.runtime.onMessage.addListener((message) => {
  if (message?.type !== 'TOP19_REPORT') return;
  let panel = document.getElementById('top19-codex-helper-panel');
  if (!panel) {
    panel = document.createElement('aside');
    panel.id = 'top19-codex-helper-panel';
    panel.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:2147483647;max-width:360px;padding:10px;background:#102a2d;color:#fff;border:1px solid #8ab5a4;box-shadow:0 4px 18px rgba(0,0,0,.25);font:12px system-ui,sans-serif;';
    document.documentElement.appendChild(panel);
  }
  panel.textContent = `GitHub Issue・PR・Actions補助: ${message.report.summary.result} / errors ${message.report.summary.errors}`;
});
