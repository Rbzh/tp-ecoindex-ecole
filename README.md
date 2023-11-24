# Matériel nécessaire
1 PC pour 2 ou 3
Un environnement de développement type "Visual Studio Code" ou un éditeur de texte, à défaut

# TODO

Mettre à jour la doc : install par nvm


# Pré-requis

Il vous faudra installer node sur votre poste.

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
La version doit être supérieure à 14.

Ensuite, installez l'extension GreenIT Analysis.
Chrome : https://chromewebstore.google.com/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad?hl=fr&pli=1
Firefox : TODO

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
