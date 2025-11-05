# 🚀 Studio418

## 🏢 Présentation

**Studio418** est une application front-end réalisée avec **React + TypeScript + Vite**.  
Elle a pour objectif de présenter notre studio et nos activités à des entreprises, indépendants et associations souhaitant collaborer avec de jeunes développeurs pour la création de solutions numériques modernes.

---

## ⚙️ Description du workflow

### Préparer l'environnement

- cloner le projet depuis **github**

```bash
git clone <lien>
cd <nom_du_projet>
```

- vérifier que docker desktop est lancé
- créer une image locale

```bash
docker build -t studio418-dev -f Dockerfile.dev .
```

- créer un conteneur locale (dev)

```bash
docker run -it -p 5173:5173 \
  -v .:/app \
  -v /app/node_modules \
  --name studio418-dev studio418-dev
```

### Travailler sur une nouvelle fonctionnalité

- créer une nouvelle branche à partir de **main**

```bash
git switch main
git pull
git switch -c feat/nom-fonctionnalite
```

rappel : [[conventional branches]]

- Coder dans un environnement propre et isolé.
- Vérifier le bon fonctionnement du conteneur (`docker ps`, `docker logs`, etc.).

### Commit et push

```bash
git add .
git commit -m "feat: ajoute la page d'inscription"
git push origin feat/nom-fonctionnalite
```

rappel : [[Conventional commits]]

### Revue et intégration

- Créer une **pull request (PR)** sur GitHub.
- Faire relire le code par un membre de l’équipe.
- Discuter ou corriger selon les retours avant merge.

### Mise à jours locale

```bash
git switch main
git pull
git branch -D feat/nom-fonctionnalite
git switch -c feat/nom2-fonctionnalite2
```

### Ajout d'une librairie dans le projet

En raison de l’utilisation de Docker et de l’isolation du dossier node_modules (grâce au volume),
l’installation de nouvelles dépendances ne peut pas être faite directement depuis le conteneur.
-**installer la librairie en local**

```bash
npm install <nom_librairie>
```

-**Reconstruire l'image docker** pour que la dépendance soit prise en compte

```bash
docker build -t studio418-dev -f Dockerfile.dev .
```

-**Relancer le conteneur**

```bash
docker run -it -p 5173:5173 \
  -v .:/app \
  -v /app/node_modules \
  --name studio418-dev studio418-dev
```

### Mise en forme et contrôle automatique

A chaque commit :

- Vérification automatique du message de commit via **Commitlint** :  
   → s’assure qu’il respecte la convention [[Conventional commits]].
  A chaque push :
- Refus du push direct vers **main** ou **dev** (branches protégées).
- Exécution automatique de :
    - **[[ESLint]]** → vérifie la qualité et la cohérence du code.
    - **[[Prettier]]** → applique la mise en forme uniforme.
    - Ces outils sont automatisés via **[[Husky]]** et **[[Lint-Staged]]**.
    - Si aucune erreur ESLint n’est détectée, Prettier formate le code et le push est autorisé.

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

#### 🔹 Conventions de nommage des branches

| Type de branche | Exemple                        | Usage                            |
| --------------- | ------------------------------ | -------------------------------- |
| `feature/`      | `feature/docker-setup`         | Nouvelle fonctionnalité          |
| `fix/`          | `fix/lint-error`               | Correction de bug                |
| `docs/`         | `docs/readme-update`           | Documentation                    |
| `refactor/`     | `refactor/component-structure` | Réécriture sans ajout de feature |

### 🧾 Convention de nommage des commits (Commitlint)

#### 🔹 Format du message

<type>(<scope>): <message>

**exemples**

```bash
feat(docker): enable live reload
fix(ci): correct lint command
docs(readme): add branch rules
```

**Types autorisés**
| Type | Description |
| ---------- | -------------------------------------- |
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage du code (indentation, etc.) |
| `refactor` | Réécriture sans changement fonctionnel |
| `perf` | Amélioration des performances |
| `test` | Ajout/modification de tests |
| `chore` | Tâches diverses (config, dépendances) |
| `ci` | Configuration de la CI/CD |

**Bonnes pratiques**

- Utiliser le présent → add et non added
- Rester clair et concis (max ~70 caractères)
- Ne pas mélanger plusieurs sujets dans un même commit
- Un commit = une intention
