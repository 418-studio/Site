# 🚀 Studio418

## 🏢 Présentation
**Studio418** est une application front-end réalisée avec **React + TypeScript + Vite**.  
Elle a pour objectif de présenter notre studio et nos activités à des entreprises, indépendants et associations souhaitant collaborer avec de jeunes développeurs pour la création de solutions numériques modernes.

---

## ⚙️ Configuration

### 🧩 CI/CD local — Qualité & sécurité du code

#### 🎯 Objectif
Garantir un code propre, cohérent et fonctionnel **avant chaque commit**.

#### 🔧 Outils utilisés
- **ESLint (v9)** — vérifie la qualité du code  
- **Prettier** — formatage automatique  
- **EditorConfig** — uniformise les règles d’édition  
- **Husky + lint-staged** — exécute les vérifications avant commit  
- **Commitlint** — valide le format des messages de commit

#### 🪝 Hooks actifs
| Hook | Action |
|------|--------|
| `pre-commit` | Exécute `lint-staged` |
| `commit-msg` | Valide le message avec Commitlint |


### 🤖 CI/CD GitHub Actions — Vérification continue du projet

#### 🎯 Objectif
Automatiser les vérifications à chaque push et pull request.

#### 📁 Fichier
`.github/workflows/ci.yml`

#### 🧰 Étapes
```yaml
on:
  push:
    branches: ['**']
  pull_request:
    branches: ['**']

jobs:
  build-and-lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```
---

## 🐳 Docker — Environnement de développement partagé
- Objectif : garantir un environnement identique pour tous
- Commandes principales :
  - `docker build -t studio418-dev -f Dockerfile.dev .`
  - `docker run -it -p 5173:5173 --name studio418-dev studio418-dev`
- Script `dev`: `"vite --host 0.0.0.0"`
- Bon à savoir :
  - `.dockerignore` exclut les fichiers inutiles
  - Utiliser `-v .:/app` pour le hot reload local

---

## 👥 Bonnes pratiques d’équipe
- 1 branche = 1 feature
- Commits formatés (`feat`, `fix`, `docs`, etc.)
- CI obligatoire avant merge
- Docker pour uniformiser les environnements

### 🌿 Gestion des branches

#### 🔹 Règles
- Ne jamais travailler directement sur `main`
- Créer une branche par objectif (feature, fix, doc…)
- Nommer les branches en **kebab-case** (`mots-séparés-par-des-tirets`)
- Supprimer les branches locales après merge pour garder le dépôt propre

#### 🔹 Conventions de nommage
| Type de branche | Exemple | Usage |
|------------------|----------|--------|
| `feature/` | `feature/docker-setup` | Nouvelle fonctionnalité |
| `fix/` | `fix/lint-error` | Correction de bug |
| `docs/` | `docs/readme-update` | Documentation |
| `refactor/` | `refactor/component-structure` | Réécriture sans ajout de feature |

### 🧾 Convention de commit (Commitlint)

#### 🔹 Format du message
<type>(<scope>): <message> 

**exemples**
```bash
feat(docker): enable live reload
fix(ci): correct lint command
docs(readme): add branch rules
```

**Types autorisés**
| Type       | Description                            |
| ---------- | -------------------------------------- |
| `feat`     | Nouvelle fonctionnalité                |
| `fix`      | Correction de bug                      |
| `docs`     | Documentation                          |
| `style`    | Formatage du code (indentation, etc.)  |
| `refactor` | Réécriture sans changement fonctionnel |
| `perf`     | Amélioration des performances          |
| `test`     | Ajout/modification de tests            |
| `chore`    | Tâches diverses (config, dépendances)  |
| `ci`       | Configuration de la CI/CD              |

**Bonnes pratiques**
- Utiliser le présent → add et non added
- Rester clair et concis (max ~70 caractères)
- Ne pas mélanger plusieurs sujets dans un même commit
- Un commit = une intention
