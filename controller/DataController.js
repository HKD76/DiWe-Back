const Data = require('../models/Data.mongo.js')

const getDatas = ((req, res) => {
    Data.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
})

const getData = ((req, res) => {
    Data.findOne({ _id: req.params.dataID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Data not found'}))
})

const createData = ((req, res) => {
    Data.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))
})

const updateData = ((req, res) => {
    Data.findOneAndUpdate({ _id: req.params.dataID },
    req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Data not found' }))
})

const deleteData = ((req, res) => {
    Data.findOneAndDelete({ _id: req.params.dataID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Data not found' }))
})

module.exports = {
    getDatas,
    getData,
    createData,
    updateData,
    deleteData
}