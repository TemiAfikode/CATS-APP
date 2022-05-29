"use strict";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const axios = require("axios");
const routes = require("../routes");

// Make sure you place body-parser before your CRUD handlers!
// Body-parser is a middleware. They help to tidy up the request object before we use them
app.use(bodyParser.urlencoded({ extended: true }));
const jsonParser = express.json();
app.use(jsonParser);
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "../../views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../../public")));

app.use("/api", routes);

// Homepage
app.get("/", async(req, res) => {
    res.render("index", { title: "Cats App" });
});

// Fallback error page
app.get("/error", async(req, res) => {
    res.render("error", { title: "Cats App" });
});

// Display all cats
app.get("/breeds", async(req, res) => {
    try {
        const cats = await axios.get("http://localhost:4000/api/breeds");
        res.render("cat-breeds", { title: "Cats App", cats: cats.data });
    } catch (error) {
        res.render("error", { title: "Cats App" });
    }
});

// Create new cat
app.get("/cat/new", (req, res) => {
    res.render("cat-add", { title: "Cats App" });
});

// Display single cat detail
app.get("/breeds/:id", async(req, res) => {
    try {
        const cat = await axios.get(`http://localhost:4000/api/breed/${req.params.id}`);
        res.render("cat-detail", { title: "Cats App", cat: cat.data });
    } catch (error) {
        res.render("error", { title: "Cats App" });
    }
});

// Edit cat details
app.get("/cat-detail-edit/:id", async(req, res) => {
    try {
        const cat = await axios.get(`http://localhost:4000/api/breed/${req.params.id}`);
        res.render("cat-detail-edit", { title: "Cats App", cat: cat.data });
    } catch (error) {
        res.render("error", { title: "Cats App" });
    }
});

module.exports = app;