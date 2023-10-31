import React, { useContext, useEffect } from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/") // get all restaurants
                setRestaurants(response.data.data.restaurants);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, [])


    return (
        <div className="list-group">
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* if restaurants exist, then we will run the code, else don't run */}
                    {restaurants && restaurants.map(restaurant => {
                        return (
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}"</td>
                                <td>Reviews</td>
                                <td><button className="btn btn-warning" />Update</td>
                                <td><button className="btn btn-delete" />Delete</td>
                            </tr>
                        );
                    })}
                    {/* <tr>
                        <td>McDonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning" />Update</td>
                        <td><button className="btn btn-delete" />Delete</td>
                    </tr>
                    <tr>
                        <td>McDonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning" />Update</td>
                        <td><button className="btn btn-delete" />Delete</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}
export default RestaurantList;
