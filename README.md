# React（v１８）完全入門ガイド

<details>
<summary>section3 Reactで頻出のJavaScriptの記法</summary>

| NO | 内容 |
| ---- | ---- |
| 7. | セクション紹介 |
| 8. | npmコマンドの使い方 |
| 9. | 本セクションのコードの実行方法 |
| 10. | アロー関数の記法について学ぼう |
| 11. | ESModuleのExport/Importについて学ぼう |
| 12. | コールバック関数の挙動について学ぼう |
| 13. | DOMとイベントリスナについて学ぼう |
| 14. | 配列のmap,filterについて学ぼう |
| 15. | 分割代入について学ぼう |
| 16. | スプレッド演算子と残余引数について学ぼう |
| 17. | 三項演算子について学ぼう |
| 18. | truthyな値、falthyな値について学ぼう |
| 19. | Promiseについて学ぼう |
| 20. | await/asyncの使い方について学ぼう |
</details>

<details>
<summary>section4 まずはReactに触れてみよう</summary>

| NO | 内容 |
| ---- | ---- |
| 21. | Reactを動かしてみよう |
| 22. | Reactコンポーネントって何？コンポーネントを定義してみよう |
| 23. | Reactのプロジェクトの作成方法 |
| 24. | 本コースで使用するプロジェクトの使い方 |
| 25. | コンポーネントにスタイルを当ててみよう |
| 26. | コンポーネントの分割方法 |
| 27. | 【練習】コンポーネントの分割方法 |
| 28. | 不要なタグを出力しないFragmentの使い方 |
| 29. | JSX内でJSコードを実行してみよう |
| 30. | 【TIPS】式と文の違い |
| 31. | 【練習】JSX内で式を使ってみよう |
| 32. | propsでコンポーネントに値を渡してみよう |
| 33. | propsに色々な値を渡してみよう |
| 34. | 【練習＆解答】propsで値を渡してみよう |
| 35. | 特別なプロパティ-props.children |
| 36. | propsの重要なルール |
| 37. | JSXの正体 |
| 38. | React要素ツリーとコンポーネントツリー |
| 39. | セクションまとめ |
</details>

<details>
<summary>section5 イベントリスナと状態管理</summary>

| NO | 内容 |
| ---- | ---- |
| 40. | セクション紹介 |
| 41. | イベントに合わせて関数を実行してみよう |
| 42. | 開発でよく利用するイベントタイプ |
| 43. | イベントに合わせて画面表示を更新してみよう |
| 44. | 【重要】ステートとは |
| 45. | 【重要】ステートとレンダリングの仕組み |
| 46. | 【複数のステート】ステート使用時の注意点！ |
| 47. | 【更新は即時ではない】ステート使用上の注意点！ |
| 48. | 【練習】ステート使用上の注意点！ |
| 49. | ステート使用上の注意点！ |
| 50. | 【重要】オブジェクトのステートは新しいオブジェクトを設定する |
| 51. | 【練習】オブジェクトのステートを更新 |
| 52. | 配列のステートを使う際の注意点 |
| 53. | ステートとコンポーネントの関係|
| 54. | ステートを複数のコンポーネントで管理しよう|
| 55. | 【重要】ステートの受け渡し|
| 56. | セクションまとめ|
</details>

<details>
<summary>section6 制御構文とフォームの制御</summary>

| NO | 内容 |
| ---- | ---- |
| 57. | セクション紹介 |
| 58. | 配列をリスト表示 |
| 59. | 【重要】リストには必ずキーを設定 |
| 60. | 【練習】リストにはキーを設定してみよう |
| 61. |  配列のフィルターメソッドの使い方　|
| 62. | 【練習】フィルターメソッドの使い方を練習してみよう |
| 63. | 条件分岐を設ける方法まとめ |
| 64. | コンポーネントのリファクタリング |
| 65. | 【Form】inputとtextareaの作成方法 |
| 66. | 【Form】ラジオボタンの作成方法 |
| 67. | 【Form】チェックボックスの作成方法 |
| 68. | 【Form】複数選択チェックボックスの作成の方法|
| 69. | 【Form】プルダウンの作成方法 |
| 70. |  Todoアプリを使ってみよう |
</details>

<details>
<summary>section7 スタイリング</summary>

| NO | 内容 |
| ---- | ---- |
| 71. | セクション紹介 |
| 72. | インラインスタイルの使い方！ |
| 73. | インラインスタイルの注意点！ |
| 74. | 外部CSSのimportantを使ったスタイリング|
| 75. | CSS Modulesを使ったスタイリング|
<!-- | 76. | 【styled-components】CSS-in-JSを使ったスタイリング |
| 77. | 【styled-components】【発展】CSS-in-JSを使ったスタイリング |
| 78. | |
| 79. | |
| 80. | |
| 81. | 　|
| 82. | 　| -->
</details>

<details>
<summary>section8 ReactでDOM操作を行う方法</summary>

| NO | 内容 |
| ---- | ---- |
| 83. | セクション紹介 |
| 84. | 【createPoratal】モーダルの作り方 |
| 85. | 【Bubbling】Portalを使う時の注意点! |
| 86. | 【練習&解答】createPortalでトーストを作成してみよう |
| 87. | 【useRef】refでDOMを直接操作してみよう |
| 88. | 【useRef】refで動画プレイヤーを作成してみよう  |
| 89. | refとは？refとstateの違い |
| 90. | 【forwardRef】他のコンポーネントのDOMにアクセスする方法　|
| 91. | 【uselmperateiveHandle】refへのアクセスを限定する方法　|
| 92. | 【練習＆解答】refの使い方 |
| 93. | セクションまとめ　|
</details>

<details>
<summary>section11【React Hooks】 様々な状態管理の方法</summary>

| NO | 内容 |
| ---- | ---- |
| 110. | セクション紹介 |
| 111. | useReducerを使ってみよう |
| 112. | useReducerとuseStateの違い |
| 113. | useReducerとuseStateの違い（関数型プログラミング視点） |
| 114. | 【練習&解答】useReducer |
| 115. | useContextでグローバルな値を管理しよう |
| 116. | useContextでstateを管理しよう |
| 117. | useContextのリファクタリングをしてみよう |
| 118. | useContextを使う際の注意点！ |
| 119. | useContextとuseReducerを組み合わせて作ってみよう |
| 120. | 【練習＆解答】useContextとuseReducer |
| 121. | 【練習】useContextとuseReducer|
| 122. | 【解答】useContextとuseReducer|
| 123. | 【解答続き】useContextとuseReducer|
</details>

<details>
<summary>section16 RestAPIを使ったサーバーとの通信</summary>

| NO | 内容 |
| ---- | ---- |
| 170. | セクション紹介 |
| 171. | JSON ServerでモックアップAPIを作成 |
| 172. | Axiosを使ってサーバーからデータを取得しよう |
| 173. | 取得したデータを画面に反映してみよう |
| 174. | GUIでリクエストの状態を確認しよう |
| 175. | 更新リストをサーバーに送信してみよう |
<!-- | 176. | リクエストと画面処理を統合しよう |
| 177. | 【発展】ダイナミックインポートとは |
| 178. | 【発展】コンポーネントのダイナミックインポート | -->
</details>

<details>
<summary>section17 Next.js(part1)基本的な使い方</summary>

| NO | 内容 |
| ---- | ---- |
| 179. | セクション紹介 |
| 180. | Next.jsとは？なぜNext.jsを使うのか？ |
| 181. | Next.jsをインストールしてみよう |
| 182. | 書きながら学びたい人はこちらを受講ください|
| 183. | ルーティングとは？基本的な書き方について学ぼう |
| 184. | 動的なルーティングの書き方について学ぼう |
| 185. | 指定されたパスの値をJSで取得してみよう |
| 186. | useRouterを使って画面遷移を行おう |
| 187. | Linkを使って画面遷移を行おう |
| 188. | シングルコンポーネントで複数画面を作成する方法 |
| 189. | コンポーネント間で状態を共有する方法について学ぼう |
| 190. | 【_app.js】サイト全体に設定を加える方法について学ぼう |
| 191. | head内にタグを挿入する方法について学ぼう |
| 192. | セクションまとめ |
</details>

<details>
<summary>section18 Next.js(part2)レンダリング</summary>

| NO | 内容 |
| ---- | ---- |
| 193. | Next.jsにおけるレンダリングの種類について学ぼう |
| 194. | 書きながら学びたい人はこちらを受講ください |
| 195. |【注意】本セクションのendフォルダのコードを動かす際の注意点 |
| 196. |【SSR】挙動について理解しよう【Part.1】|
| 197. |【SSR】挙動について理解しよう【Part.2】|
| 198. |【SSR】getStaticProps関数について学ぼう |
| 199. |【SG】ソースコードからHTMLを作成してみよう |
| 200. |【SG】エクスポートする際の注意点 |
| 201. |【SG】getStaticProps関数について学ぼう |
| 202. |【SG】getStaticPaths関数について学ぼう |
| 203. |【SG】fallbackプロパティの挙動を理解しよう |
| 204. |【おまけ】ISRを使ってみよう |
| 205. |【SG】APIサーバーのデータを使って静的ビルド！【Part.1】 |
| 206. |【SG】APIサーバーのデータを使って静的ビルド！【Part.2】 |
| 207. |【API Routes】Next.jsでAPIを作成しよう |
| 208. |【API Routes】Next.jsで動的APIを作成しよう |
| 209. | 環境変数を切り替える方法 |
</details>
