import mongoose, { ConnectOptions } from "mongoose";
import { config } from "dotenv";

config();

if (!process.env.MONGO_URL) {
  throw new Error("Please add the MONGO_URL environment variable");
}

mongoose.connect(process.env.MONGO_URL, {
  dbName: 'mit',
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
  authSource: 'admin',
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const database = mongoose.connection;

database.on(
  "error",
  console.error.bind(console, "❌ mongodb connection error"),
);
database.once("open", () => console.log("✅ mongodb connected successfully"));

mongoose.Promise = Promise;
