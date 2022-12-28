
//******start****************This is code aboutgetting data from mongodb from routes file. ******************************** */

// const express = require("express");
// const router  = express.Router();


// function getData(){
//    return new Promise((resolve , reject)=>{
        
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://madhu:Fullstackdeveloper@071436@madhufirstdatabase.edqe0k5.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect( async (err) => {
//     if(err){
//         reject(err)
//     }else{
//         const collection = await client.db("madhufirstdatabase").collection("devices");
//         resolve(collection)
//     }
  
//   // perform actions on the collection object
// //   client.close();
// });

//     })
// }

// router.get("/getdata" , async (req,res)=>{
//     const collection = getData();
//     const data  =  await collection.find({}).toArray();
//     res.json(data)
// })

// module.exports = router;

//*******end****************This is code aboutgetting data from mongodb from routes file. ******************************** */