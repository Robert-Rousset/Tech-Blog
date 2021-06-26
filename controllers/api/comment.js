const router = require("express").Router();
const { User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    if (user === null) {
      res.redirect("/login");
    } else {
      console.log("------------>user<----------------", user);
      const commentData = await Comment.create({
        content: req.body.content,
        user_id: user.id,
        blog_id: req.body.blogId,
      });
      commentData.setUser(user);
      console.log("HELLO WHERE ARET THOUGH!?!?!", commentData);
      res.json(commentData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
