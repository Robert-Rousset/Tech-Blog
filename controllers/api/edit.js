const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Blog, Comment } = require("../../models");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render("editPost", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBlog = await Blog.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateBlog);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const thisBlog = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Post has been deleted" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
