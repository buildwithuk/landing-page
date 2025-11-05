import * as dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import { addRoutes } from "./config/app-routes";
import express from "express";
import mongoose from 'mongoose';
import { formatAPIResponse } from "./middleware/response-formatter";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

// allows the cors
app.use(cors())
app.use(express.json()); 

// Parse the json passed as routes
app.use(formatAPIResponse)


// Add the routes to the application
addRoutes(app);

async function bootstrap() {
	try {

		if (!process.env.DATABASE_URL) {
			throw new Error("Cannot read the environment variable for database url")
			process.exit(1);
		}
		if (!process.env.DATABASE_NAME) {
			throw new Error("Cannot read the environment variable for database name")
			process.exit(1);
		}

		await mongoose.connect(
			process.env.DATABASE_URL, {
			dbName: process.env.DATABASE_NAME
		});

		console.log("Connection established with mongodb")
		app.listen(PORT, () => {

			console.log(`Landing API listening at ${PORT}`);
		});

	} catch (error) {
		console.log(error)
	}
}

bootstrap();
