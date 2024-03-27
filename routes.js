const express = require('express');
const router = express.Router();
const verifyToken = require('./middlewares/verifyToken');

const {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require('./controller/BlogController')

const {
    getCommandes,
    getCommande,
    createCommande,
    updateCommande,
    deleteCommande
} = require('./controller/CommandeController')

const {
    getDatas,
    getData,
    createData,
    updateData,
    deleteData
} = require('./controller/DataController')

const {
    getMateriels,
    getMateriel,
    createMateriel,
    updateMateriel,
    deleteMateriel
} = require('./controller/MaterielController')

const {
    getOrdonnances,
    getOrdonnance,
    createOrdonnance,
    updateOrdonnance,
    deleteOrdonnance
} = require('./controller/OrdonnanceController')

const {
    getRepass,
    getRepas,
    createRepas,
    updateRepas,
    deleteRepas
} = require('./controller/RepasController')

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('./controller/UserController')

router.get('/blogs', verifyToken, getBlogs);
router.get('/blog/:blogID', verifyToken, getBlog);
router.post('/blog-add', verifyToken, createBlog);
router.put('/blog-update', verifyToken, updateBlog);
router.delete('/blog-remove', verifyToken, deleteBlog);

router.get('/commandes', verifyToken, getCommandes);
router.get('/commande/:commandeID', verifyToken, getCommande);
router.post('/commande-add', verifyToken, createCommande);
router.put('/commande-update', verifyToken, updateCommande);
router.delete('/commande-remove', verifyToken, deleteCommande);

router.get('/datas', verifyToken, getDatas);
router.get('/data/:dataID', verifyToken, getData);
router.post('/data-add', verifyToken, createData);
router.put('/data-update', verifyToken, updateData);
router.delete('/data-remove', verifyToken, deleteData);

router.get('/materiels', verifyToken, getMateriels);
router.get('/materiel/:materielID', verifyToken, getMateriel);
router.post('/materiel-add', verifyToken, createMateriel);
router.put('/materiel-update', verifyToken, updateMateriel);
router.delete('/materiel-remove', verifyToken, deleteMateriel);

router.get('/ordonnances', verifyToken, getOrdonnances);
router.get('/ordonnance/:ordonnanceID', verifyToken, getOrdonnance);
router.post('/ordonnance-add', verifyToken, createOrdonnance);
router.put('/ordonnance-update', verifyToken, updateOrdonnance);
router.delete('/ordonnance-remove', verifyToken, deleteOrdonnance);

router.get('/repass', verifyToken, getRepass);
router.get('/repas/:repasID', verifyToken, getRepas);
router.post('/repas-add', verifyToken, createRepas);
router.put('/repas-update', verifyToken, updateRepas);
router.delete('/repas-remove', verifyToken, deleteRepas);

router.get('/users', verifyToken, getUsers);
router.get('/user/:userID', verifyToken, getUser);
router.post('/user-add', createUser);
router.put('/user-update', verifyToken, updateUser);
router.delete('/user-remove', verifyToken, deleteUser);

module.exports = router;
