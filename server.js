const knex = require("knex")(require("./knexfile"));
const express = require('express');
const app = express();

app.get("/users", (_req, res) => {
    knex
        .select("*")
        .from("user")
        .then((users) => {
            res.json(users);
        })
});

app.get("/users/:userId/posts", (req, res) => {
    // add the ability to get posts for a specific user
    // get id of user
    knex
        .select("*")
        .from("post")
        .where({ user_id : req.params.userId })
        .then((posts) => {
            res.json(posts);
        })
});

app.get("/posts", (_req, res) => {
    knex
        .select("*")
        .from("post")
        .then((posts) => {
            res.json(posts);
        })
});



app.listen(8080, () => {
    console.log("Listening on 8080");
});