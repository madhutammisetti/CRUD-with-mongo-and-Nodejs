const express = require("express");
const router = express.Router();

const userSchema  = require("../model/userModel")


router.post("/register" , (req,res)=>{
     
    const user = new userSchema(req.body)

    user.save((err,user)=>{
        if(err){
            res.json(err)
        }else{
            res.json(user)
        }
    })

})


router.get("/users" , (req,res)=>{
    userSchema.find({},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

//For particular field 
router.get("/users" , (req,res)=>{
    userSchema.find({name:"Madhu"},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})


// This Two codes will give the User provided data

router.get("/getAUser/:id" , (req,res)=>{
    console.log(req.params.id)
    res.json("Testing")
})


router.get("/getBuser/:id/:name",(req,res)=>{
    console.log(req.params.name)
    console.log(req.params.id)
    res.json("Test 2")
})


//it will search the user given data in the database collection and give the output for that particular user
router.get("/getCUser/:name" , (req,res)=>{
    const userGivenName = req.params.name
    userSchema.findOne({name:userGivenName},(err,user)=>{
        if(err){
            res.json(err)
        }else{
            res.json(user)
        }
    })
})


//Updating the data in Database ..

// router.put("/updateUser/:id" , (req,res)=>{
//     userSchema.findOneAndUpdate({_id : req.params.id} , req.body) , (err)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json("Updation Suaccessfull")
//         }
//     }
// })


// Deleting the data from DataBase ... 

router.delete("/deleteuser/:name" , (req,res)=>{
    userSchema.findOneAndDelete({name: req.params.name}) , (err)=>{
        if(err){
            res.json(err)
        }else{
            res.json("Item Deleted")
        }
    }
})




module.exports = router;
