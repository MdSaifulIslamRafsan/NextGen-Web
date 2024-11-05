import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "name is required"],
    },
    email: {
        type: String,
        required: [true , "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true , "password is required"],
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        default: "user"
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
    },
    resetToken: {
        type: string
    },
    resetTokenExpiration: {
        type: Date
    }

},
{
    collection : "users"
}
)
const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;