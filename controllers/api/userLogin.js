const router = require("express").Router();
const { User, Blog } = require("../../models");

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password." });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password." });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/post", async (req, res) =>{
  try{ 
    const blogData = await Blog.create({
    title: req.body.title,
    content: req.body.content,
  })
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
})

module.exports = router;
