import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String
    },
    verifyTokenExpiration: {
        type: Date
    }
},
{
    collection : "users"
}
)
const user = mongoose.models.users || mongoose.model('User', userSchema);

export default user;