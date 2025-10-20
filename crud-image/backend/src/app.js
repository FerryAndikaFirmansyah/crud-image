const express = require('express')
const { sequelize } = require('./models')
const productRoutes = require('./routes/productRoutes')
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(process.env.UPLOAD_DIR))
app.use('/products', productRoutes)

//sync database and start server
const start = async () => {
    await sequelize.sync();
    app.listen(process.env.PORT || 5000, () => {
        console.log(`server running on PORT ${process.env.PORT || 5000}`);
    })
}

start();