const express = require('express');
const Menue = require("../models/foodSchema")


async function addMenue(req, res)
{
    const menue = await Menue.create(req.body)
    res.json(menue)
}

async function getAllMenue(req, res)
{
    const menue = await Menue.find()
    res.json(menue)
}

async function getMenue(req, res)
{
    const id = req.params.id
    const menue = await Menue.findById(id)
    res.json(menue)
}
async function updateMenue(req, res)
{
    const id = req.params.id;
    //console.log(req.body)
    const menue = await Menue.findOneAndUpdate({_id: id},req.body,{
        new : true, // to return the new updated doc
        overwrite : true
    })
    res.json(menue)
}
async function deleteMenue(req, res)
{
    const id = req.params.id
    const menue = await Menue.findByIdAndDelete(id,req.body)
    res.json(menue)
}


module.exports = {
    addMenue,
    getAllMenue,
    getMenue,
    updateMenue,
    deleteMenue
}