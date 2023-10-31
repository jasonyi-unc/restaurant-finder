require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

// entrypoint in our application
const morgan = require('morgan'); // middleware
const app = express();

app.use(cors()); // middleware to allow external domains to talk to each other
app.use(express.json());

// defining routes (CRUD)
// when we get an HTTP request (from the client side), we store the request in req and the response in res
// normally sends back data in a JSON format

// Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");

        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
});


// Retrieving individual restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);

    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        })
    } catch (err) {
        console.log(err);
    }
});

// Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query(
            "INSERT INTO restaurants (name, location, price_range) values($1, $2, $3) returning *",
            [req.body.name, req.body.location, req.body.price_range]
        );

        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }


});

// Update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
        const results = await db.query(
            "UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id = $4 RETURNING *",
            [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
        })
    } catch (err) {
        console.log(err);
    }
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});