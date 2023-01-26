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



}