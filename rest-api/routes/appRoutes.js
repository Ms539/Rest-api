const express = require ('express');
const { AddUser, getAllUsers, updateUser, deleteUser } = require('../controllers/user');


const appRoutes = express.Router();

appRoutes.post('/AddUser',AddUser)
appRoutes.get('/getAllUsers',getAllUsers)
appRoutes.put('/updateUser',updateUser)
appRoutes.delete('/deleteUser',deleteUser)

module.exports = appRoutes
