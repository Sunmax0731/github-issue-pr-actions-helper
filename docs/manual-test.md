# 手動テスト

## 準備

- Google Chrome を起動する。
- 拡張機能フォルダ: `D:\AI\ChromeExtension\github-issue-pr-actions-helper\extension`
- ローカルサーバーは不要。

## 手順

1. PowerShellで `cd D:\AI\ChromeExtension\github-issue-pr-actions-helper` を実行する。
2. `npm test` が成功することを確認する。
3. Chromeで `chrome://extensions` を開く。
4. Developer mode を有効にし、`Load unpacked` で `D:\AI\ChromeExtension\github-issue-pr-actions-helper\extension` を選ぶ。
5. 任意のWebページを開き、拡張アイコンをクリックする。
6. サンプルJSONを貼り付け、Analyze を押す。
7. 結果が表示され、必須項目不足を含む入力では error が出ることを確認する。

## 期待結果

- 拡張が読み込める。
- Popup上で検証結果が表示される。
- ページ注釈または補助情報が対象ページに表示される。
