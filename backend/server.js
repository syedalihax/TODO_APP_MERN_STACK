const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

dotenv.config();

const app = express();

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
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