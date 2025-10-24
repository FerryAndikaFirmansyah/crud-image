const { error } = require('console');
const Product = require('../models/product');
const fs = require('fs');
const path = require('path');
const { emitWarning } = require('process');

//create product
exports.createProduct = async (req, res) => {
    try {
        const { name } = req.body
        let image = req.file ? req.file.filename : null;
        const product = await Product.create({ name, image });
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: 'failed to create product' });
    }
}

//get all product
exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'failed to get all product' })
    }
}

//get a single productById
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'failed to get a single productById' })
    }
}

//update product by Id
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        if (req.file && product.image) {
            //delete old image file
            fs.unlinkSync(path.join(process.env.UPLOAD_DIR, product.image));
        }
        product.name = req.body.name || product.name;
        if (req.file) {
            product.image = req.file.filename;
        }
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'failed to update productById' });
    }
}

//delete product by Id
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'product not found' })
        }
        if (product.image) {
            fs.unlinkSync(path.join(process.env.UPLOAD_DIR, product.image));
        }
        await product.destroy();
        res.status(204).json({ message: 'product delete successfully' })
    } catch (error) {
        res.status(500).json({ error: 'failed to delete productById' });
    }
}