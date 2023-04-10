
# Portfolio Sphere

***Portfolio Sphere is the all-in-one app for investors to view real-time market data, keep track of all holdings with an easy to use portfolio editor, and get valuable insights into portfolio investments through a dashboard.***

This project was built as my capstone project for BrainStation's full-stack software engineering bootcamp. The goal was to create and build a full-stack application within two weeks. 

—Tristan (April 2023)


![Portfolio Sphere Screenshots](/Portfolio-Sphere-Mockups.png?raw=true)


# Deployment

**Portfolio Sphere is live!**

Check it out here: [Portfolio Sphere](https://portfolio-sphere.vercel.app/)

Currently, the frontend is being hosted on Vercel, the backend on Render, and the MySQL database on AWS.




# Tech Stack

## Frontend:
* **React**
* **React Router**
* **SASS**

Additionally, **Chart.js**  was used to create the graphs on the dashboard.


## Backend:
* **Node**
* **Express**
* **MySQL**

This server setup allowed me to develop a **REST API** which incorporates **JWT** for authentication and **Bcrypt** for password hashing. Finally, **Knex** was used for making SQL queries.

On both sides, **Axios** was used for making requests between the client and server, as well as to the external [CoinMarketCap API](https://coinmarketcap.com/api/). **npm** was used to manage the various dependencies required throughout the project. 
# Installation

If you'd like to run the project locally, please follow the steps below to run Portfolio Sphere:\
(You will need to have node, npm, and MySQL already installed on your machine)

#### Set up the backend

1. Clone or download the [server repo](https://github.com/TristanJgn/portfolio-sphere-server)

2. Create a new database in MySQL called `portfolio_sphere`.
3. Install server dependencies:  
   
   Run `npm install` from inside the server directory.
   ```bash    
   $ npm install
   ```
4. Reconfigure knexfile.js to point to your locally created database.

Copy and paste the following into your knexfile.js to overwrite the existing code which currently points to the AWS database:
```shell    
require("dotenv").config();

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_LOCAL_HOST,
    database: process.env.DB_LOCAL_DATABASE,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
  },
};
```
5. Run migrations
   ```bash
   $ npm run migrate
   ```
6. Run seeds
   ```bash
   $ npm run seed
   ```
7. Set environment variables:  
   
   Rename `.env.sample` to `.env`.

   The `.env.sample` file has instructions on which values need to be replaced and which ones can be left as is. The final `.env` should have the following variables: 
```shell
PORT
DB_LOCAL_HOST
DB_LOCAL_DATABASE
DB_LOCAL_USER
DB_LOCAL_PASSWORD
JWT_SECRET_KEY
BCRYPT_SALT_ROUNDS
CMC_API_KEY
```

8. Start the server:
   ```bash
   $ npm run start
   ```
#### Set up the frontend
9. Clone or download this repo.

10. Install client dependencies:  
   
   Run `npm install` from inside the client directory.
   ```bash    
   $ npm install
   ```
11. Set environment variables:  
   
   Rename `.env_sample` to `.env` and change the placeholder value to the port you set for the server.
   ```shell
   REACT_APP_API_URL=http://localhost:<PORT SET IN /server/.env>
   ```
12. Start the React app:
```bash
$ npm start
```
    