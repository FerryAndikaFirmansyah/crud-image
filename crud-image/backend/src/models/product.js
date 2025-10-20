const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING, //url product
        allowNull: true
    }
}, {
    tableName: 'products',
    timestamps: true
});

module.exports = Product;