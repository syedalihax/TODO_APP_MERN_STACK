const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(port, () => {
            console.log(`-- server is running on port ${port} --`);
        });

    } catch (error) {
        console.log("Failed to start server:", error.message);
    }
};

startServer();