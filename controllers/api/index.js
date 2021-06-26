const router = require("express").Router();
const loginRoutes = require("./userLogin.js");
const postRoutes = require("./post.js");
const commentRoutes = require("./comment.js");

router.use("/users", loginRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
