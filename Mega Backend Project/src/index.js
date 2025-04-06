import app from "./app";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({path: "./.env"});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch((err) => {
    console.error("Mongodb connection error", err);
    process.exit(1);
  });