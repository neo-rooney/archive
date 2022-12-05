import app from "./app";
import dotenv from "dotenv";
import "./db";
import "./models/User";

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = () => {
    console.log(`Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
