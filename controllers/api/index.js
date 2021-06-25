const router = require("express").Router();
const loginRoutes = require("./userLogin.js");
const postRoutes = require("./post.js");

router.use("/users", loginRoutes);
router.use("/post", postRoutes);

module.exports = router;
