import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

export const Load_name = async(req, res) => {
    try {
        const {results} = await pool.query(`SELECT * FROM Users_Table`);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

app.get("/users", Load_name);


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});