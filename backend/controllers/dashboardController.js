
const moment = require('moment');

const userSchema = require('../models/user');


async function addUser(req, res) {
    console.log("the add user function is called",)
    try {



        let newUser = {
            "name": req.body.name,
            "email": req.body.email,
            "mobile" : req.body.mobile,
            "password": req.body.password,
            "userType": req.body.userType,
            "companyId": req.body.companyId
        }

        let user = new userSchema(newUser);
        return user.save()
            .then(status => {
                console.log("Status of save user is" ,status)
                return res.status(200).send({ "message": "User Added Successfully" })
            })
            .catch(e => {
                //to return db query errors
                console.log("Error:", e)
                if (e.code === 11000) {
                    return res.status(400).send({ "message": "User already exists" })
                }
                else {
                    return res.status(400).send({ "message": "Internal Server Error!" })
                }
            })
      
    }
    catch (e) {
        res.status(400).send({
            "message": "Error in saving user",
            "error": e
        })
    }
}

async function fetchUser(req, res) {
    try{
         userSchema.find({})
         .then(data=>{
              console.log("the data of the user is ",data)
              res.status(200).send({
                "data": data
            })
         })
         .catch(e=>{
             console.log("the error occured in the fetch user in",e)
             res.status(400).send({
                "Error" : e
            })
         })
    }
    catch(e)
    {
        res.status(400).send({
            "message": "Error in saving user",
            "error": e
        })
    }
}

async function deleteUser(req, res) {
    try{
        console.log("the incoming email from front end is",req.body.email)

         userSchema.deleteOne({"email":req.body.email})
         .then(status=>{
              console.log("the status after deletion is ",status)
              res.status(200).send({
                "message" : "The User Deleted Succesfully"
            })
         })
         .catch(e=>{
             console.log("the error occured in the delete user in",e)
             res.status(400).send({
                "Error" : e
            })
         })
    }
    catch(e)
    {
        res.status(400).send({
            "message": "Error in deleting user",
            "error": e
        })
    }
}


module.exports = {
    addUser,
    fetchUser,
    deleteUser
}

