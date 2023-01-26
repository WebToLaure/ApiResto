import { Restaurant } from "../entities/restaurant";

export class RestaurantService {

    async createRestaurant(city: string): Promise<Restaurant | undefined> {

        const createRestaurant = new Restaurant();
        createRestaurant.city = city;

        const restaurant = await createRestaurant.save();

        if (restaurant) {

            return restaurant;
        }

        return undefined;
    }

    async getAllRestaurant(): Promise<Restaurant[] | undefined> {

        const restaurant = await Restaurant.findBy({});
console.log(restaurant);

        if (restaurant != null) {

            return restaurant;
        }

        return undefined;

    }

    async getRestaurantById(id : number): Promise<Restaurant | undefined> {

        const restaurantByID = await Restaurant.findBy({id});

        if (restaurantByID != null) {

            return restaurantByID[0];
        }

        return undefined;

    }

    async updateRestaurant(id : number, city : string) : Promise<Restaurant | undefined> {

        const updateRestaurant = new Restaurant();
        updateRestaurant.id = id;
        updateRestaurant.city = city;
        
        const restaurantUpdate = await updateRestaurant.save();

        if (restaurantUpdate) {

            return restaurantUpdate;
        }

        return undefined;

    }



}