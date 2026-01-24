# Product Web

このリポジトリは、**HashdPotato** や **MeetCuckoo** などのアプリケーションを紹介するウェブサイトです。

## 概要

このアプリケーションは、様々な製品のランディングページおよび情報ハブとして機能するシングルページアプリケーション（SPA）です。各製品の専用ページやプライバシーポリシーページが含まれています。

## リポジトリ構成

プロジェクトは標準的な React アプリケーションの構成に従っています：

- **`src/`**: ソースコード。
  - **`components/`**: 再利用可能な UI コンポーネント（レイアウトなど）。
  - **`pages/`**: ルートに対応する各ページコンポーネント。
    - `Home/`: メインのランディングページ。
    - `HashdPotato/`: HashdPotato 製品の詳細ページ。
    - `MeetCuckoo/`: MeetCuckoo 製品の詳細ページ。
    - `Privacy/`: プライバシーポリシーページ。
  - **`styles/`**: グローバルスタイルシートとテーマ定義。
- **`public/`**: 画像やアイコンなどの静的アセット。
- **`docs/`**: ドキュメントファイル（日本語 README を含む）。

## 使用技術

このプロジェクトは以下の技術を使用して構築されています：

- **コア**:
  - [React](https://react.dev/) (v19) - UI ライブラリ
  - [TypeScript](https://www.typescriptlang.org/) - 静的型付け
  - [Vite](https://vitejs.dev/) - ビルドツールおよび開発サーバー

- **ルーティング**:
  - [React Router](https://reactrouter.com/) (v7) - クライアントサイドルーティング

- **品質・フォーマット**:
  - [ESLint](https://eslint.org/) - リンター

## 始め方

### 前提条件

- Node.js (最新の LTS バージョンを推奨)
- npm (Node.js に付属)

### インストール

1. リポジトリをクローンします：
   ```bash
   git clone <repository-url>
   ```
2. プロジェクトディレクトリに移動します：
   ```bash
   cd product-web
   ```
3. 依存関係をインストールします：
   ```bash
   npm install
   ```

### アプリケーションの実行

開発サーバーを起動するには：

```bash
npm run dev
```

アプリケーションは `http://localhost:5173` （またはターミナルに表示されるポート）で利用可能になります。

### 本番用ビルド

本番用にアプリケーションをビルドするには：

```bash
npm run build
```

ローカルで本番ビルドをプレビューするには：

```bash
npm run preview
```
