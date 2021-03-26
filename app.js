require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const quoteRoutes = require("./routes/quote");

const app = express();

const url = process.env.DB_URL;

app.use("cors");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Lets build an API");
});

app.use(express.json());

app.use("/quote", quoteRoutes); //middleware

app.listen(process.env.PORT || 8000);
