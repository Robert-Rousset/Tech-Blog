const router = require("express").Router();
const { User, Blog } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const blogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: user.id,
    });
    blogData.setUser(user);
    res.json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
