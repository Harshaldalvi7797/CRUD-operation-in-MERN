const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4600;

//app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/blogg", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected successfully"))
  .catch(error => console.log(`something went wrong ${error}`));
app.listen(port, () => console.log(`connected to port ${port}`));
