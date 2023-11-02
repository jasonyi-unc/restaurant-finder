import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

export default function AddRestaurant() {
    const { addRestaurants } = useContext(RestaurantsContext);
    // making these controlled inputs
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    async function handleSubmit(e) {
        // whenever we press a submit button, it refreshes the page
        // we never want to do that with React apps or it will reset our states
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/", { // url is already the post url
                name,
                location,
                price_range: priceRange,
            });
            console.log(response.data.data);
            addRestaurants(response.data.data.restaurant);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location" />
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
}