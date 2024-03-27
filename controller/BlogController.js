const Blog = require('../models/Blog.mongo.js')

const getBlogs = ((req, res) => {
    Blog.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
})

const getBlog = ((req, res) => {
    Blog.findOne({ _id: req.params.blogID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Blog not found'}))
})

const createBlog = ((req, res) => {
    Blog.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))
})

const updateBlog = ((req, res) => {
    Blog.findOneAndUpdate({ _id: req.params.blogID },
    req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Blog not found' }))
})

const deleteBlog = ((req, res) => {
    Blog.findOneAndDelete({ _id: req.params.blogID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Blog not found' }))
})

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
}