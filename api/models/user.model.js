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
    },
    avatar: {
        type: String,
        default: "https://cdn.vectorstock.com/i/preview-1x/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg"
    },
}, {timestamps: true})
// sort information by using timestamp (e.g. latest information)

const User = mongoose.model('User', userSchema);

export default User;