import express from "express";
import path from "path";
import knex from "knex";
import { Model } from "objection";
import knexConfig from "../knexfile";
import authRoutes from "./routes/authRoutes";

const app = express();
const port = 3000;

const db = knex(knexConfig.development);
Model.knex(db);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
