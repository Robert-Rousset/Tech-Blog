const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const postRoutes = require("./post.js");
const commentRoutes = require("./comment.js");
const viewPostRoute = require("./viewPost.js");
const editPostRoute = require("./edit.js");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/viewPost", viewPostRoute);
router.use("/edit", editPostRoute);

module.exports = router;
