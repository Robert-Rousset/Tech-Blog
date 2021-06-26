const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
      order: [[{ model: Comment}, "createdAt", "DESC"]],
    });

    const post = dbPostData.get({ plain: true });
    res.render("viewPost", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
