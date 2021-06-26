const router = require("express").Router();
const { User, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const commentData = await Comment.create({
      content: req.body.content,
      user_id: user.id,
      blog_id: req.body.blogId,
    });
    commentData.setUser(user);

    res.json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
