# ドキュメントビューアのテスト用
[mkdocs](https://www.mkdocs.org/)というツールを使って、SSGしてpagesやローカルで整形されたマークダウンの形で表示できます。

## mkdocsのローカル実行方法
1. [uv](https://github.com/astral-sh/uv) 入れてください(方法は各自)
2. レポジトリルートにて `uv --directory docs run mkdocs serve --livereload` を実行
3. http://127.0.0.1:8000/action-tester/ にて確認可能です。
