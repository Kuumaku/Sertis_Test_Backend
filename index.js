//Set up database entry in db.js
//Store sensitive information in .env and add .env in gitignore
//set up express cores dotenv and pg in the system
//using pool pool to execute query
//use gets method to get data in form of json
//the server run on localhost 
//Use postman to see the data that the query return

import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

export const Load_name = async(req, res) => {
    try {
        const results = await pool.query(`SELECT * FROM Users_Table`);
        res.json(results)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

app.get("/users", Load_name);


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});