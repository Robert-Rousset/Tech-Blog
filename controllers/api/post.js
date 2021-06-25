const router = require("express").Router();
const { User, Blog } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
