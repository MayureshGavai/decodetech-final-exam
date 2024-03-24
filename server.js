const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./src/config/config')
const bodyParser = require('body-parser')

require('dotenv').config()
connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))

app.use('/api/items',require('./src/routes/item.route'))
app.use('/api/users',require('./src/routes/user.route'))

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Server is running')
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})