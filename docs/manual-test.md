# 手動テスト

## 準備

- リポジトリ: `D:\AI\ChromeExtension\github-issue-pr-actions-helper`
- `npm test` が成功していること
- 読み込み対象: `D:\AI\ChromeExtension\github-issue-pr-actions-helper\extension`
- Chromeの拡張機能画面でデベロッパーモードを有効にします
- ローカルサーバーは不要です

## 手順

1. Chromeで `chrome://extensions` を開く
2. デベロッパーモードを有効にして `extension` フォルダを読み込む
3. 拡張機能のポップアップを開く
4. `Sample`、`Analyze` の順に押す
5. ページ右下の補助パネルまたはポップアップに結果が表示されることを確認する

## 期待結果

- 必須項目不足が分かる形で表示される。
- 次アクションがユーザーに理解できる。
- 実行ログ、出力ファイル、または画面表示をリリース前確認に使える。
