import React from 'react';

export default function RestaurantList() {
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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}