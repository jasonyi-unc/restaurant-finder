import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

// wrapping our application so they have access to state
export const RestaurantsContextProvider = props => {
    // fetching the list of restaurants from our backend server
    const [restaurants, setRestaurants] = useState([]);

    function addRestaurants(restaurant) {
        setRestaurants([...restaurants, restaurant]);
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants }}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};