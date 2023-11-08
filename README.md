
Pré-requis :
* node version 14+ ou Docker

# Pré-requis

Installer node sur votre poste.

Si vous êtes sur Ubuntu : 

```sh
sudo apt update
sudo apt install nodejs npm
```

Sur Windows/Mac : https://nodejs.org/en/download

Vérifier que node version 14+ est installé :

```sh
node -v
```
La version doit être supérieure à 14

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
