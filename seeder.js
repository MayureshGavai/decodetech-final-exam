const mongoose = require('mongoose')
const connectDB = require('./src/config/config')
const itemModel = require('./src/model/item.model')
const items = require('./src/utils/data')

require('dotenv').config()
connectDB()

const importData = async () =>{
    try{
        await itemModel.deleteMany()
        const itemsData = await itemModel.insertMany(items)
        console.log('All data is inserted!')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

importData()