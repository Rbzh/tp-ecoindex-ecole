
Pré-requis :
* node version 14+ ou Docker

# Lancer le serveur

```sh
# avec node.js 14+ installé en local
npm run start

# avec Docker
docker run -p 8080:8080 -v $(pwd)/:/usr/src/app -w /usr/src/app node:14 npm run start
```

L'application est accessible à http://localhost:8080.


# Correction 

Liste des points à améliorer : https://docs.google.com/document/d/1r3Ic2MWsLDzJyYNAZDE5f6GqRYTJPxDU3vLHYgWiiWc/edit?usp=sharing

