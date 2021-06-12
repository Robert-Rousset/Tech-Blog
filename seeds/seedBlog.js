const {Blog} = require("../models");

const blogPosts = [
  {
    title: "Robert",
    date: 15,
    content: "Robert123",
    user_id: 1,
  },
  {
    title: "Bobert",
    date: 15,
    content: " asdf asdf ase fawe qwaef qegwegw ",
    user_id: 1,
  },
  {
    title: "Gobert",
    date: 15,
    content: "Loremasdiohfaosidhfioahsdofhasiod fhasodhf oashd fahsdo fas dfas dfsad ",
    user_id: 1,
  },
];

const seedUser = async () => Blog.bulkCreate(blogPosts);

module.exports = seedUser
