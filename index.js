import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = process.env.PORT || 5050;
