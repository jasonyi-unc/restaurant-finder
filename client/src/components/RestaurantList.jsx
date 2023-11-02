import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export default function RestaurantList(props) {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    // allows us to navigate from homepage to update page
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/") // get all restaurants
                console.log(response.data.data);
                setRestaurants(response.data.data.restaurants);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, [])

    async function handleDelete(e, id) {
        // bypasses the handleRestaurantSelect event
        e.stopPropagation();
        try {
            await RestaurantFinder.delete(`/${id}`);
            setRestaurants(restaurants.filter((restaurant) => {
                return restaurant.id !== id // put in every restaurant in the array except the id we want to delete
            }));
        } catch (err) {
            console.log(err);
        }
    }

    function handleUpdate(e, id) {
        // bypasses the handleRestaurantSelect event
        e.stopPropagation();
        navigate(`/restaurants/${id}/update`);
    }

    function handleRestaurantSelect(id) {
        navigate(`/restaurants/${id}`);
    }

    function renderRating(restaurant) {
        if (!restaurant.count) {
            return <span className="text-warning">0 reviews</span>
        }
        return (
            <>
                <StarRating rating={restaurant.id} />
                <span className="text-warning ml-1">({restaurant.count})</span>
            </>

        );
    }


    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
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
                    {restaurants && restaurants.map((restaurant) => {
                        return (
                            <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>{renderRating(restaurant)}</td>
                                <td>
                                    <button onClick={(e) => handleUpdate(e, restaurant.id)}
                                        className="btn btn-warning">Update
                                    </button>
                                </td>
                                <td>
                                    <button onClick={(e) => handleDelete(e, restaurant.id)}
                                        className="btn btn-danger">Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}