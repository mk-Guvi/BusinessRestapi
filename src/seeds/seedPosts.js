require("../config/db.js");
const Author = require("../models/Author.js");
const Post = require("../models/Post.js");
const faker = require("faker");
const seedPosts = () => {
  const authors = ["mk", "mohammed", "musharaf"];
  authors.forEach((name) => {
    new Author({
      name
    })
      .save()
      .then((result) => {
        const { _id } = result;
        for (let i = 0; i < 3; i++) {
          new Post({
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs(),
            author: _id
          })
            .save()
            .then(console.log)
            .catch(console.error);
        }
      })
      .catch(console.error);
  });
};

seedPosts();
const clearPosts = () => {
  Author.remove({}).then(console.log).catch(console.error);
  Post.remove({}).then(console.log).catch(console.error);
};

//clearPosts();
