let express = require("express");
let router = express.Router();
let Articles = require("../Model/article");

router.get("/articles", async (req, res) => {
  let articles = await Articles.find();
  console.log(articles);
  res.send({ data: articles });
});

router.get("/article/:id", async (req, res) => {
  let articles = await Articles.findById(req.params.id);
  console.log(articles);
  res.send({ data: articles });
});

router.post("/createArt", async (req, res) => {
  // let article = await Articles.
  let newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    author: req.body.author
  });
  let data = await newArticle.save();
  console.log(data);
  res.send({ message: "thanks", data: data });
});

router.delete("/remove/:id", async (req, res) => {
  let articles = await Articles.findByIdAndRemove(req.params.id);
  if (!articles) {
    res.status(402).send({ message: "Invalid user id" });
  }
  res.send({ message: "delete" });
});

router.put("/new/:id", (req, res) => {
  Articles.findById(req.params.id)
  .then(articlee => {
    articlee.title = req.body.title;
    articlee.article = req.body.article;
    articlee.author = req.body.author;

    articlee
      .save()
      .then(() => res.json("updated"), articlee)
      .catch(err => res.status(102).json(`error ${err}`));
  });

  // let data =  article.save();
  // res.send({ message: "updated" });
});
module.exports = router;
