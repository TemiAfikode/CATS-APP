"use strict";

const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
        unique: true,
    },
    size: {
        type: String,
        required: true,
    },
    coat: {
        type: String,
    },
    colour: {
        type: String,
    },
    description: {
        type: String,
    },
    imageLink: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Cats = mongoose.model("Cats", CatSchema);
module.exports = Cats;