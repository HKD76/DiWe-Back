const Materiel = require('../models/Materiel.mongo')

const getMateriels = ((req, res) => {
    Materiel.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
})

const getMateriel = ((req, res) => {
    Materiel.findOne({ _id: req.params.materielID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Materiel not found'}))
})

const createMateriel = ((req, res) => {
    Materiel.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))
})

const updateMateriel = ((req, res) => {
    Materiel.findOneAndUpdate({ _id: req.params.materielID },
    req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Materiel not found' }))
})

const deleteMateriel = ((req, res) => {
    Materiel.findOneAndDelete({ _id: req.params.materielID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Materiel not found' }))
})

module.exports = {
    getMateriels,
    getMateriel,
    createMateriel,
    updateMateriel,
    deleteMateriel
}