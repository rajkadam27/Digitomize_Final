const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            // useUnifiedTopology: true (optional in newer Mongoose versions)
        });
        console.log("✅ Connected to MongoDB successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
}

module.exports = dbConnect;