import "reflect-metadata";
import { addRoutes } from "./config/app-routes";
import express from "express";


const PORT = 5000;
const app = express();

// Add the routes to the application
addRoutes(app);

app.listen(PORT, () => {

	console.log(`Landing API listening at ${PORT}`);
});
