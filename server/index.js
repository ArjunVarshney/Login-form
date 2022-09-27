import express from "express";
import * as dotenv from "dotenv";
import Connection from "./database/db.js";
import router from "./routes/router.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", router);

const PORT = process.env.EXPRESS_PORT;
const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
Connection(USERNAME, PASSWORD);
