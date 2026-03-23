# やることリスト (Todo List)

**ReactJS**で構築されたミニマルなタスク管理（Todoリスト）アプリです。パフォーマンスとフラットデザインによるユーザーエクスペリエンスに重点を置いています。

## デモンストレーション (Demonstration)

https://github.com/user-attachments/assets/26bae6b0-4b1f-43b2-966c-33d155ed8e09

### 主な操作内容 (Key Operations):
1. **タスクの追加:** 新しい項目を入力し、紙飛行機アイコンで追加します。
2. **完了・未完了の切り替え:** チェックボックスでステータスを更新します。
3. **フィルタリング:** 「すべて」「未完了」「完了」のタブを切り替えて表示を絞り込みます。
4. **インライン編集:** 「Edit」ボタンを押し、内容を修正して「Save」で保存します。
5. **タスクの削除:** 「✕」ボタンでリストから即座に削除します。

## 機能 (Features)

* **タスク追加:** 内容を入力して、すばやくリストに追加できます。
* **完了ステータス:** 円形のチェックボックスで、タスクの完了をマークできます。
* **インライン編集:** ページを移動することなく、その場でタスクの内容を変更できます。
* **フィルタリング機能:**
    * `すべて` (All)
    * `未完了` (Active)
    * `完了` (Completed)
* **データの永続化:** **LocalStorage**を統合しているため、ページの再読み込みやブラウザを閉じてもデータが保持されます。
* **ミニマルなUI:** ホバーエフェクトを完全に取り除き、静寂さと動作の速さに集中したデザインです。

## 使用技術 (Technologies)

* **ReactJS** (Hooks: `useState`, `useEffect`)
* **CSS3** (Custom variables & Flexbox)
* **LocalStorage API**

## インストール方法 (Installation)

ローカル環境でプロジェクトを実行するには、以下の手順に従ってください。

1.  **プロジェクトをクローンする:**
    ```bash
    git clone [https://github.com/TanaHuynh/ToDoList.git](https://github.com/TanaHuynh/ToDoList.git)
    ```

2.  **依存関係をインストールする:**
    ```bash
    cd ToDoList
    npm install
    ```

3.  **アプリケーションを起動する:**
    ```bash
    npm run dev
    ```
    *※ Viteを使用している場合、通常 `http://localhost:5173` で起動します。*

## ディレクトリ構成 (Project Structure)

```text
src/
 ┣ components/
 ┃ ┣ TodoFooter.jsx   # 残りのタスク数を表示
 ┃ ┣ TodoInput.jsx    # 新規タスク入力フォーム
 ┃ ┣ TodoItem.jsx     # 各タスクのロジック (表示/編集モード)
 ┃ ┗ TodoList.jsx     # タスクリストのレンダリング
 ┣ App.jsx            # メインロジック & 状態管理・LocalStorage管理
 ┣ App.css            # アプリケーション全体のスタイル
 ┗ main.jsx           # Reactのエンジリポイント
