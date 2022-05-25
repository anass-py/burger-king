const express = require("express");
const app = express()
const food = require('./routes/food')
const connection = require('./DB/connect')
require('dotenv').config()


app.use(express.json())

app.use('/api/v1/burger-king', food)

// let the hello at the end 
app.use('/', (req, res) => {
    res.send("hello from burger  ...")
})



const url = process.env.URL_MONGO 
PORT = process.env.PORT | 3000
async function start(req, res){
    try {
    
    await connection(url)
    app.listen(PORT, () => {console.log(`listenning on port : ${PORT}`)})
        
    } catch (error) {
        res.json(error)
    }
}
start()