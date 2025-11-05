## PRODUCTION
# 🧱 Étape 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 🪶 Étape 2 — Serveur de production - Récupère le dossier dist généré par la première image
# La première image du build sera supprimé et il ne restera que la deuxième image optimisé
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g serve
EXPOSE 10000
CMD ["serve", "-s", "dist", "-l", "10000"]
