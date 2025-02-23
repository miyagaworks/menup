# 多言語メニューシステム - GitHub プロジェクトセットアップガイド

## 1. リポジトリ構成

```
multilingual-menu-system/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── feature_request.md
│   │   ├── bug_report.md
│   │   └── documentation.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── release.yml
│   └── dependabot.yml
├── apps/
│   ├── frontend/          # Reactフロントエンド
│   ├── backend/          # NestJSバックエンド
│   └── admin/            # 管理画面
├── packages/
│   ├── common/           # 共有ライブラリ
│   ├── ui/              # UIコンポーネント
│   └── config/          # 共通設定
├── docs/
│   ├── architecture/    # アーキテクチャドキュメント
│   ├── api/            # API仕様書
│   └── development/    # 開発ガイド
├── scripts/            # ユーティリティスクリプト
├── .gitignore
├── README.md
├── LICENSE
└── package.json
```

## 2. Issue Templates

### 2.1 機能要求 (feature_request.md)
```markdown
---
name: 機能要求
about: 新機能やエンハンスメントの提案
title: '[FEATURE] '
labels: 'enhancement'
assignees: ''
---

## 機能概要
機能の簡潔な説明

## 解決する課題
この機能が解決する問題や課題

## 提案する実装方法
実装のアイデアや方向性

## 受入条件
- [ ] 条件1
- [ ] 条件2

## 関連資料
- 関連するドキュメントやリンク
```

### 2.2 バグ報告 (bug_report.md)
```markdown
---
name: バグ報告
about: バグや問題の報告
title: '[BUG] '
labels: 'bug'
assignees: ''
---

## バグの説明
バグの簡潔な説明

## 再現手順
1. 手順1
2. 手順2

## 期待される動作
正しい動作の説明

## 実際の動作
バグが発生した時の動作

## 環境情報
- OS:
- ブラウザ:
- バージョン:

## 追加情報
スクリーンショットや補足情報
```

### 2.3 ドキュメント (documentation.md)
```markdown
---
name: ドキュメント
about: ドキュメントの追加や更新
title: '[DOCS] '
labels: 'documentation'
assignees: ''
---

## 概要
ドキュメントの追加・更新内容

## 変更理由
変更が必要な理由

## 提案する変更内容
- [ ] 変更点1
- [ ] 変更点2

## 関連するIssue/PR
関連するIssueやPRへのリンク
```

## 3. GitHub Actions Workflow

### 3.1 CI Workflow (ci.yml)
```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8.6.0
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Run tests
        run: pnpm test
      - name: Run lint
        run: pnpm lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8.6.0
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Build
        run: pnpm build
```

### 3.2 Dependabot設定 (dependabot.yml)
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    versioning-strategy: increase
    labels:
      - "dependencies"
    commit-message:
      prefix: "chore"
      include: "scope"
```

## 4. 初期README.md

```markdown
# 多言語メニューシステム

外国人観光客向けの多言語対応デジタルオーダーシステム

## 機能概要

- 多言語メニュー表示
- QR/NFCによる注文
- リアルタイム注文管理
- 在庫連携
- 決済処理
- 分析・レポーティング

## 技術スタック

- Frontend: React (Next.js)
- Backend: NestJS
- Database: MongoDB
- Cache: Redis
- UI: shadcn/ui + Tailwind CSS
- Testing: Jest + Cypress
- CI/CD: GitHub Actions

## 開発環境のセットアップ

1. 必要条件
   - Node.js 18.17.0以上
   - pnpm 8.6.0以上
   - Docker

2. インストール
   ```bash
   git clone https://github.com/your-org/multilingual-menu-system.git
   cd multilingual-menu-system
   pnpm install
   ```

3. 開発サーバーの起動
   ```bash
   pnpm dev
   ```

## コントリビューション

1. Issueの作成
2. ブランチの作成 (`feature/issue-number-description`)
3. 変更の実装
4. テストの実行
5. Pull Requestの作成

## ライセンス

MIT

## チーム

- Project Owner: [Name]
- Tech Lead: [Name]
- Frontend Team: [Names]
- Backend Team: [Names]
```

## 5. 初期コミット手順

1. リポジトリの作成
   ```bash
   # GitHubでリポジトリを作成後
   git clone https://github.com/your-org/multilingual-menu-system.git
   cd multilingual-menu-system
   ```

2. 基本構造の作成
   ```bash
   # ディレクトリ構造の作成
   mkdir -p .github/{ISSUE_TEMPLATE,workflows} apps/{frontend,backend,admin} packages/{common,ui,config} docs/{architecture,api,development} scripts
   ```

3. 初期ファイルの作成
   ```bash
   # 上記のテンプレートファイルを各ディレクトリに配置
   # .gitignore, README.md, package.jsonなどの基本ファイルを作成
   ```

4. 初期コミット
   ```bash
   git add .
   git commit -m "chore: Initial project setup"
   git push origin main
   ```
