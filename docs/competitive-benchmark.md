# 競合・公式基準ベンチマーク

## 比較方針

GitHub Issue/PR/Actions補助 は、競合の全機能を再実装するのではなく、GitHub画面の上に、次に見るべき証跡と手動判断を薄く重ねる。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| Chrome Extensions | https://developer.chrome.com/docs/extensions/ | Manifest V3、権限、service worker、content script の標準仕様を提供している。 | Manifest V3、権限、利用者データの扱いが説明されていること。 | GitHub画面の上に、次に見るべき証跡と手動判断を薄く重ねる。 |
| Chrome Web Store policies | https://developer.chrome.com/docs/webstore/program-policies/ | 権限、データ利用、配布前審査の基準を明文化している。 | Manifest V3、権限、利用者データの扱いが説明されていること。 | GitHub画面の上に、次に見るべき証跡と手動判断を薄く重ねる。 |
| GitHub Actions | https://docs.github.com/en/actions/using-workflows/about-workflows | 自動検証の実行条件、ログ、失敗履歴をワークフローとして残せる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | GitHub画面の上に、次に見るべき証跡と手動判断を薄く重ねる。 |
| GitKraken | https://www.gitkraken.com/features/pr-and-code-review | PR、ブランチ、コードレビューをGUIで可視化できる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | GitHub画面の上に、次に見るべき証跡と手動判断を薄く重ねる。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。
