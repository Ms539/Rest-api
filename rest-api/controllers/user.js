const userSchema = require ('../models/user');


//Add a user
exports.AddUser = async (req,res)=>{
    try {
        const newUser= new userSchema (req.body)
        await newUser.save();
        res.status(200).json({msg:'the new user has been added successfully',newUser})
    } catch (error) {
        res.status(500).json({msg:'can not add this user',error})
        
    }
}

//get all users
exports.getAllUsers = async(req,res)=>{
    try {
        const Users = await userSchema.find()
        res.status(200).json(Users)
    } catch (error) {
        res.status(500).json({msg:'error in getting users',error})
        
    }
}

//edit a user by id
exports.updateUser = async (req,res)=>{
    try {
        const {id}= req.params
        await userSchema.findByIdAndUpdate(id,req.body,{new: true})
        res.status(200).json({msg:'the user has been updated succufully'})
    } catch (error) {
        res.status(500).json({msg:'cannot update the selected user',error})
        
    }
}

//delete a user by id

exports.deleteUser = async (req,res)=>{
    try {
        const {id} = req.params
    await userSchema.findByIdAndRemove(id)
    res.status(200).json({msg:'the user has been removed succesfully'})
    } catch (error) {
        res.status(500).json({msg:'cannot delete the selected user',error})
        
        
    }
}

