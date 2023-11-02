import React, { useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function AddReview() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");
    const [numReviews, setNumReviews] = useState(0);

    async function handleSubmitReview(e) {
        e.preventDefault();
        // api call to our backend
        try {
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        };
    }

    return (
        <div className="mb-2">
            <div className="form-row">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="name" type="text" className="form-control" />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="rating">Rating</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)} id="rating" className="custom-select">
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} id="Review" className="form-control"></textarea>
            </div>
            <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
        </div>
    );
}