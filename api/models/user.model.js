import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true})
// sort information by using timestamp (e.g. latest information)

const User = mongoose.model('User', userSchema);

export default User;