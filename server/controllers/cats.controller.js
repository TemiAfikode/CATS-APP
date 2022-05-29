"use strict";

const Cats = require("../models/cats.model");

const createCat = async(req, res) => {
    const newCat = new Cats({
        name: req.body.name,
        breed: req.body.breed,
        description: req.body.description,
        size: req.body.size,
        coat: req.body.coat,
        colour: req.body.colour,
        imageLink: req.body.imageLink,
    });

    try {
        await newCat.save();
        res.status(201).json(newCat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getAllCats = async(req, res) => {
    try {
        const cats = await Cats.find();
        res.status(200).json(cats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getCatById = async(req, res) => {
    const catId = req.params.id;

    try {
        const cat = await Cats.findOne({ _id: catId });
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateCat = async(req, res) => {
    const catId = req.params.id;

    try {
        await Cats.findOneAndUpdate({
            _id: catId,
        }, {
            name: req.body.name,
            breed: req.body.breed,
            description: req.body.description,
            size: req.body.size,
            coat: req.body.coat,
            colour: req.body.colour,
            imageLink: req.body.imageLink,
            updated_at: req.body.updated_at,
        });
        res.status(202).json({ catId });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
const deleteCat = async(req, res) => {
    const catId = req.params.id;

    try {
        const deleted = await Cats.findOneAndRemove({ _id: catId });
        res.status(203).json({
            catId,
        });
    } catch (error) {
        res.status(402).json({ message: error.message });
    }
};

module.exports = {
    createCat,
    getAllCats,
    getCatById,
    updateCat,
    deleteCat,
};