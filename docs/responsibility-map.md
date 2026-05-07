# 責務マップ

| 領域 | 責務 | ファイル |
| --- | --- | --- |
| 入力正規化 | 入力を配列として扱える形にする | extension/src/input.mjs |
| 検証 | 必須項目と状態を判定する | extension/src/validators.mjs |
| 表示モデル | ステータス、カード、次アクションを組み立てる | extension/src/review-model.mjs |
| レポート/UI | 利用者に結果を表示する | extension/src/core.mjs、extension/src/validators.mjs、extension/src/report.mjs、extension/popup.html、extension/popup.js、extension/manifest.json |
| 評価 | QCDSと文字化けを検証する | tools/qcds-evaluate.mjs |
