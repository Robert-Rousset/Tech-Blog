const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog } = require("../models");

router.get("/", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.userId, {
    include: [{ model: Blog }],
  });
  const user = userData.get({ plain: true });
  console.log(user);
  res.render("dashboard", { user, loggedIn: req.session.loggedIn });
});

module.exports = router;
