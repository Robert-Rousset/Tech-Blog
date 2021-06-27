const router = require("express").Router();
const { User, Blog } = require("../models");

router.get("/", async (req, res) => {
  const blogPosts = await Blog.findAll({
    include: [{model: User}],
    order: [["createdAt", "DESC"]],
  });
  const blogs = blogPosts.map((element) => element.get({ plain: true }));
  res.render("home", { blogs, loggedIn: req.session.loggedIn });
});

module.exports = router;
