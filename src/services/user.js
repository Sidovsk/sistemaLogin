const User = require('../models/user');

const createAccount = async (name, status, email, password) => {
    try {
        await User.create({
            name,
            status,
            email,
            password
        })
    } catch(err){
        throw err;
    }
}

const getAllUsers = async () => {
    try {
        return await User.find({}).select({password: 0});
    } catch(err){
        throw err
    }
}

const getUser = async (userId) => {
    try {
        return await User.findById(userId).select({password: 0});
    } catch(err){
        throw err;
    }
}

const updateUser = async (userId, updateData) => {
    try {
        const user = await User.findById(userId);
        for(const key in updateData){
            user[key] = updateData[key];
        }
        return await user.save();
    } catch(err){
        throw err;
    }
}

const deleteUser = async (userId) => {
    try {
        return await User.deleteOne({_id: userId});
    } catch(err){
        throw err;
    }
}

module.exports = {
    createAccount,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};