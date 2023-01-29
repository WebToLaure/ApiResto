# PROJET API REST O
## Développement prototype du Backend



**Basic commands are:**

```
git init
git status
git add .
git commit -m " "
git push
git pull
```

**API REST CRUD DEVELOPMENT:**
* npm
* Node.js  (one:thread:)
* Express
* PostgreSQL
* Typescript
* TypeORM

**Dependencies:**
```
* npm           
* nodemon   
* bcrypt.js
* jsonwebtoken
* dotenv
* pg
* reflect-metadata
```
**Dev dependencies:**
* @types/bcrypt: "^5.0.0",
* @types/express: "^4.17.15",
* @types/jsonwebtoken: "^9.0.0",
* @types/node: "^16.11.10",
* @types/pg: "^8.6.6",
* nodemon: "^2.0.20",
* ts-node: "^10.9.1",
* typescript: "^4.9.4"

**Commands:**
  * git init
  * npm init -y
  * npm install express @types/express pg ts-node typeorm typescript
  * npm install nodemon -g
  * npm install jsonwebtoken
  * npm i bcrypt
  * start dev server
  * npm start




                                                                
                                                    
                                                    
                                                         
                                              
                                              
                                                                       API 


---
> Choississez votre menu préféré chez Mc BOB, parmi les menus Mc Bobby HEwings (Chicken directly imported from Texas), Mc Bob Sinclarks, Mc Bob Tasty ( hot spicy ) ou même Mc Bob léponge (pour les végétariens), sur cette API REST O qui vous donne la possiblité de sélectionner votre restaurant préféré, votre menu préféré, en fonction de votre budget, et de passer commande.





- API développée en **Typescript**, sur la base de quatre TABLES: Client, Restaurant, Menu, et Order avec **TypeORM**.

- Création de **4 DOSSIERS** pour optimiser l'organisation du code: 

1. **Entities**: création des tables de la BDDR avec TypeORM
2. **Services**: requêtes auprès de la base de données
3. **Controllers**: code d'implémentation des routes pour chaque ressource
4. **Routes**: création d'une liste de toutes les routes d'applications pour chaque ressource.

- Chaque **dossier** possède un **FICHIER client, restaurant, menu et order**.</br>  

- Fichier principal **index** : permet à Express d'utiliser ces routes avec app.use();, le préfixe de route utilisé automatiquement, et les références d'itinéraire. 

- Création d'un **dossier module** dans lequel se trouve le **fichier clientData**.

- Dossier **middleware** pour les fichiers liés aux vérifications de l'intégrité des données à l'aide d'une signature numérique.



##### ROUTES

Plateforme de test développement API utilisée : [Insomnia](https://insomnia.rest/download)  

 * Serveur : http://localhost:8080/api/



|  Verbe HTTP  |          Endpoint           |           Actions                   |  :warning:GET BY ID:sparkler:     |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|          
|  GET         |     /restaurant/    (:id)   |    Liste les menus                  | (Ajouter `:id` pour lister par id)| 
|  GET         |     /order/         (:id)   |    Liste les commandes              | (Ajouter `:id` pour lister par id)|
|  GET         |     /menu/          (:id)   |    Liste les restaurants            | (Ajouter `:id` pour lister par id)|
|--------------|-----------------------------|-------------------------------------|-----------------------------------|
|  POST        |     /client/register        |    Enregistrement nouveau client    |                                   | 
|  POST        |     /client/login           |    Authentification client          |                                   |
|  POST        |     /restaurant/register    |    Création restaurant              |                                   |
|  POST        |     /menu                   |    Création menu                    |                                   |
|  POST        |     /order                  |    Création d'une commande          |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|
|              |                             |                                     |                                   |
|  PUT         |     /restaurant/:id         |    Modifie la commande par l'id     |                                   |
|  PUT         |     /menu/:id               |    Modifie la commande par l'id     |                                   |
|  PUT         |     /order/:id              |    Modifie la commande par l'id     |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|
|              |                             |                                     |                                   |
|  DELETE      |     /restaurant/:id         |    Annule le restaurant par l'id    |                                   |
|  DELETE      |     /menu/:id               |    Annule le menu par l'id          |                                   |
|  DELETE      |     /order/:id              |    Annule la commande par l'id      |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|


##### INSERTION DANS BODY POUR ACCES REQUETE :

 `api/register, api/login` :

{

 > surname :
   
 > password :
   
}

`api/restaurant` : 

{  
> city :
   
}

`api/menu` :

{

> name :
    
> price :
    
}

`api/order` :

{

> menuId :
    
> restaurantId :
    
}


#### PROTOTYPE 

               - permet d'enregistrer un nouveau client et de l'authentifier. 
         
               - permet de créer, lire, modifier ou supprimer un restaurant, menu ou order. 



