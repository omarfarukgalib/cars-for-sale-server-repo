const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.ce7hihf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{

    }
    finally{
        
    }
}

run().catch(error=>{
    console.log(error)
})


app.get('/',(req,res)=>{
    res.send('cars for sale server is running on')
})

app.listen(port,()=>{
    console.log(`the port is cars for sale is running on ${port}`)
})