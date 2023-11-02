# Restaurant Finder

Restaurant Finder is a full-stack application that emulates the functionality of popular restaurant review platforms like Yelp. It allows users to perform basic CRUD (Create, Retrieve, Update, Delete) operations for restaurants. The project is built using the PERN (PostgreSQL, Express, React, Node) stack.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)


## Features

- Create new restaurants with details such as name, location, and price range.
- View a list of restaurants with their average ratings and the number of reviews.
- Update restaurant information and add or remove reviews.
- Delete restaurants, including all associated reviews.
- Search for restaurants by name and filter by price range and ratings.
- User-friendly and responsive web interface for a seamless experience.

## Technologies Used

- **Frontend**:
  - React: A JavaScript library for building user interfaces.
  - React Router: For client-side routing within the React application.
  - Axios: To make HTTP requests to the backend.
  - Bootstrap: For styling and layout.
  - Star Rating: A component for displaying restaurant ratings.

- **Backend**:
  - Node.js: A JavaScript runtime for server-side development.
  - Express: A Node.js web application framework for building APIs.
  - PostgreSQL: A powerful, open-source relational database management system.
  - Sequelize: An Object-Relational Mapping (ORM) library for Node.js.

- **Database**:
  - PostgreSQL: A powerful, open-source relational database management system.

## Installation
To run Restaurant Finder locally, follow these steps:

1. Clone the repository:

```git clone https://github.com/your-username/restaurant-finder.git```

2. Change to the project repository:


```cd restaurant-finder```

3. Install the dependencies for both the client and the server
```
cd client
npm install
cd ../server
npm install
```

4. Start the server and client separately
* For the server (from the server directory)
```npm start```
* For the client (from the client directory)
```npm start```

5. Open your web browser and access the application at `http://localhost:3000`

