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
    const { rows } = await db.query("select * from restaurants");

    // console.log(results);
    res.status(200).json({
        status: "success",
        results: rows.length,
        data: {
            restaurants: rows
        },
    });
});


// Retrieving individual restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        },
    })
});

// Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        }
    });


});

// Update Restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        },
    });
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    })
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});