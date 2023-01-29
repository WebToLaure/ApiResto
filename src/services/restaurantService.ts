import { Restaurant } from "../entities/restaurant";

/**
 * @class RestaurantService
 * 
 * Une class permettant :
 * * De générer des requêtes SQL précise à une demande spécifique.
 * * Celle-ci est liée uniquement à des requêtes CREATE, GET ALL / By Id, UPDATE et DELETE pour la partie restaurant.
 */
export class RestaurantService {

    /** 
     * @method createRestaurant :
     * * Method avec requête SQL permettant de créer un nouveau menu avec "city" comme paramètre. 
     */
    async createRestaurant(city: string): Promise<Restaurant | undefined> {

        const createRestaurant = new Restaurant();
        createRestaurant.city = city;

        const restaurant = await createRestaurant.save();

        if (restaurant) {

            return restaurant;
        }

        return undefined;
    }

    /** 
     * @method getAllRestaurant :
     * * Method avec requête SQL permettant de récupérer tous les restaurants existants. 
     */
    async getAllRestaurant(): Promise<Restaurant[] | undefined> {

        const restaurant = await Restaurant.findBy({});

        if (restaurant != null) {

            return restaurant;
        }

        return undefined;

    }

    /** 
     * @method getRestaurantById :
     * * Method avec requête SQL permettant de récupérer un restaurant existant via son id comme paramètre. 
     */
    async getRestaurantById(id: number): Promise<Restaurant | undefined> {

        const restaurantByID = await Restaurant.findBy({ id });

        if (restaurantByID != null) {

            return restaurantByID[0];
        }

        return undefined;

    }

    /** 
     * @method updateRestaurant :
     * * Method avec requête SQL permettant de modifier ou de mettre jour les données d'un restaurant. 
     */
    async updateRestaurant(id: number, city: string): Promise<Restaurant | undefined> {

        const updateRestaurant = new Restaurant();
        updateRestaurant.id = id;
        updateRestaurant.city = city;

        const restaurantUpdate = await updateRestaurant.save();

        if (restaurantUpdate) {

            return restaurantUpdate;
        }

        return undefined;

    }

    /** 
     * @method deleteRestaurant :
     * * Method avec requête SQL permettant de supprimer un restaurant via son id comme paramètre. 
     */
    async deleteRestaurant(id: number): Promise<Restaurant | undefined> {

        const restaurantDelete = await Restaurant.findOneBy({ id });

        if (restaurantDelete) {

            return restaurantDelete?.remove();
        }
        return undefined;
    }

}