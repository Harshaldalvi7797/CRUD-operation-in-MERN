const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4600;
let article = require("./Routes/articleRouter");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/HHD", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected successfully"))
  .catch(error => console.log(`something went wrong ${error}`));
app.listen(port, () => console.log(`connected to port finnally ${port}`));

app.use("/api/add", article);
app.use("/api/fetch", article);
app.use("/api/fetch", article);
app.use("/api/", article);
app.use("/api/update", article);
