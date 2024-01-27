const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(cors());

app.use(express.json());

const connectWithDb = require("./config/database");
connectWithDb();
const router = require("./routes/routes");

app.use("/api/v1",router);

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`);
});

