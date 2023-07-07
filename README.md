
Pré-requis :
* node version 14+ ou Docker

# Lancer le serveur

```sh
# avec node.js 14+ installé en local
# 1. installer les dépendances
npm install
# 2. démarrer l'application
npm run start

# avec Docker
# 1. installer les dépendances
mkdir node_modules
docker run --rm -v $(pwd)/:/usr/src/app -w /usr/src/app node:14 npm install

# 2. démarrer l'application
docker run -p 8080:8080 -v $(pwd)/:/usr/src/app -w /usr/src/app node:14 npm run start
```

L'application est accessible à http://localhost:8080.
