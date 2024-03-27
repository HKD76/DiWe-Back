const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    titre: String,
    type_conseil: String,
    contenu: String,
    image: String,
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
