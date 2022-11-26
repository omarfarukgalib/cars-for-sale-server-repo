const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const carCollection = client.db('cars-for-sale').collection('carsCollections')

        const carCollection2 = client.db('cars-for-sale').collection('carsCollections2')

        const carCollection3 = client.db('cars-for-sale').collection('carsCollections3')

        app.get('/categories/',async(req,res)=>{
            
            const query = {}
            const options = await carCollection.find(query).toArray()
            res.send(options)
        })
        app.get('/categories2/',async(req,res)=>{
            
            const query = {}
            const options = await carCollection2.find(query).toArray()
            res.send(options)
        })
        app.get('/categories3/',async(req,res)=>{
            
            const query = {}
            const options = await carCollection3.find(query).toArray()
            res.send(options)
        })

        // app.get('/categories',async(req,res)=>{
        //     const id = req.query.id
        //     const query = {_id:ObjectId(id)}
        //     const options = await carCollection.find(query).toArray()
    
        //     res.send(options)
        // })
    //   app.get('/categories/:id',async(req,res)=>{
    //     const id = req.params.id
    //     const query = {_id:ObjectId(id)}
    //     const options = await carCollection.find(query).toArray()
    //     res.send(options)
    //   })
      
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