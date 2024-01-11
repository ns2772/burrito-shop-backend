# Burrito Shop Backend

This is the backend for the Burrito Shop application, built with Node.js and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (I used v14.17.0)
- npm (Node Package Manager)

### Installing

1. Clone the repository or download the [source code](https://github.com/ns2772/burrito-shop-backend).

`git clone https://github.com/ns2772/burrito-shop-backend`

2. Navigate to the `burrito-shop-backend` directory.

3. Install the dependencies: `npm i`


### Running the Application

To run the application in development mode, use the following command:

#### `npm start`

This will start the server on `http://localhost:5000`.

### Testing

#### `npm test`

## API Endpoints

- `/api/burrito`: Retrieves a list of burrito products.
- `/api/orders`: Retrieves a list of orders and submits an order.
- `/api/orders/:id`: Retrieves details of an individual order.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
