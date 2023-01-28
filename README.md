# Template node Express typescript

npm init -y
npm install express @types/express pg ts-node typeorm typescript
npm install nodemon -g


install dependencies
`npm i`

start dev server
`npm start`
                                               ***      PROJET API REST O   ***

Choississez votre menu préféré chez Mc BOB, parmi les menus Mc Bobby Ewing (Buffalo meat directly imported from Texas), Mc Bob Sinclar, Mc Bob Tasty ( hot spicy ) ou même Mc Bob l'éponge (pour les végétariens), sur cette API REST O qui vous donne la possiblité de sélectionner votre lieu de commande, votre menu préféré, en fonction de votre budget.



Verbe HTTP     endpoint           Actions

        
GET            /commands     Lister les commandes

POST           /commands     Passer une commande

GET           /commands/:id  Détails de la commande par l'id

PUT          /commands/:id   Modifie la commande par l'id

DELETE       /commands/:id   Annule la commande par l'id


