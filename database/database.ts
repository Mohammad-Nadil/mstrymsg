import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_DB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default dbConnect;