const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("-- mongoDB connect successfully --");

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        throw error;
    }
};

module.exports = connectDb;