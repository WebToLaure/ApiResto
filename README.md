##### Template node Express typescript

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
  * npm 
  * start dev server
  * npm start




                                                    #### PROJET API RESTO
                                              ***Développement prototype du Backend*** 
                                                           **API** 


***Choississez votre menu préféré chez Mc BOB, parmi les menus Mc Bobby HEwings (Chicken directly imported from Texas), Mc Bob Sinclarks, Mc Bob Tasty ( hot spicy ) ou même Mc Bob léponge (pour les végétariens), sur cette API REST O qui vous donne la possiblité de sélectionner votre restaurant préféré, votre menu préféré, en fonction de votre budget, et de passez commande.***



```

API développée en **Typescript**,sur la base de quatre TABLES: Client, Restaurant, Menu, et Order avec **TypeORM**.

* Création de **4 DOSSIERS** afférents à ces tables: **entities, services, controllers, et routes.**

* Chaque table possède ces dossiers un **FICHIER entity, service, controller,et route.** 

* Création d'un **dossier module** dans lequel se trouve le **fichier clienData**.

* **Dossier middleware** pour les fichiers liés aux vérifications de l'intégrité des données à l'aide d'une signature numérique.

```

##### ROUTES

Plateforme de développement API utilisée:[Insomnia](https://insomnia.rest/download)  

 * Serveur : http://localhost:8080/api/


|----------------------------------------------------------------------------------------------------------------------|
|  Verbe HTTP  |          Endpoint           |           Actions                   |  :warning:GET BY ID:sparkler:     |
|              |                             |                                     |                                   |
|----------------------------------------------------------------------------------------------------------------------|          
|  GET         |     /restaurant/    (:id)   |    Lister les menus                 | (Ajout `:id` pour lister par id)  | 
|  GET         |     /order/         (:id)   |    Lister les commandes             | (Ajout `:id` pour lister par id)  |
|  GET         |     /menu/          (:id)   |    Lister les restaurants           | (Ajout `:id` pour lister par id)  |
|----------------------------------------------------------------------------------------------------------------------|
|  POST        |     /client/register        |    Enregistrement nouveau client    |                                   | 
|  POST        |     /client/login           |    Authentification client          |                                   |
|  POST        |     /restaurant/register    |    Création restaurant              |                                   |
|  POST        |     /menu                   |    Création menu                    |                                   |
|  POST        |     /order                  |    Création d'une commande          |                                   |
|--------------|-------------------------------------------------------------------------------------------------------|
|              |                                                                   |                                   |
|  PUT         |     /restaurant/:id         |    Modifier la commande par l'id    |                                   |
|  PUT         |     /menu/:id               |    Modifier la commande par l'id    |                                   |
|  PUT         |     /order/:id              |    Modifier la commande par l'id    |                                   |
|--------------|-------------------------------------------------------------------------------------------------------|
|              |                                                                   |                                   |
|  DELETE      |     /restaurant/:id         |    Annule le restaurant par l'id    |                                   |
|  DELETE      |     /menu/:id               |    Annule le menu par l'id          |                                   |
|  DELETE      |     /order/:id              |    Annule la commande par l'id      |                                   |
|----------------------------------------------------------------------------------------------------------------------|

##### Insertion dans Body pour accès requête:

* register, login:
{
   - surname:
   - password:
}
* restaurant: 
{  
   - city:
}
* Menu:
{
     - name:
     - price:
}
* order:
{
    - menuId:
    - restaurantId:
}
