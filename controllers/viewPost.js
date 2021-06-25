const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog } = require("../models");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id);
    const post = dbPostData.get({ plain: true });
    const userId = post.user_id;
    const userData = await User.findByPk(userId);
    const user = userData.get({ plaing: true });

    res.render("viewPost", { post, user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
