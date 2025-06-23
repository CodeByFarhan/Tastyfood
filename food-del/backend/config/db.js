import mongoose from "mongoose";

export const connectDB = async () => {
    try {
         mongoose.connect(`${process.env.MONGO_URI}`);

        mongoose.connection.on('connected', () => {
            console.log("DB connected");
        });

        mongoose.connection.on('error', (err) => {
            console.log("DB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("DB disconnected");
        });

    } catch (err) {
        console.log("Error from DB catch:", err.message);
    }
};
