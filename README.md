# Express assignment

## How to run

1. Step 1: yarn
2. Step 2: yarn start

## Requirements

1. create a server in the `index.ts` file
2. write the logic in the `controllers` folder: `user.ts`, `product.ts` and `order.ts` file)

## Screenshots








This code is creating a RESTful API with Express, a popular Node.js framework for building web applications. The API is designed to handle CRUD (Create, Read, Update, Delete) operations for users. The code consists of several different files, each responsible for a specific aspect of the API.

1) The file user.ts is the router for the users endpoint, it defines all the routes for the users endpoint. The code imports the Router from the Express library and defines a userRouter instance of Router. It then defines 3 routes:

A GET route at / which returns a list of all users, using the getUsers function from the userController file.
A POST route at / which creates a new user, using the createUser function from the userController file.
A DELETE route at /:id which deletes a user, using the deleteUser function from the userController file.




2) The file userController.ts is the controller file for the users endpoint, it defines all the functions that are used in the user.ts file. The code imports the Request and Response from the Express library and creates an array of users as a placeholder for a real database.

The getUsers function returns a JSON object containing the array of all users.
The createUser function takes the request body and pushes it as a new user to the array of all users, then returns a JSON object containing the updated array of all users.
The deleteUser function takes the id from the URL parameters, filters the user with the given id out of the array of all users, and returns a JSON object containing the updated array of all users.
The file index.ts is the entry point for the API. It imports the Express library and the userRouter from the user.ts file. It creates an instance of the Express app, sets up JSON parsing for the body of incoming requests, and sets the userRouter to handle all requests to the /users endpoint. It then starts the API by listening on port 5001, and logs a message indicating that the server is running on http://localhost:5001.
