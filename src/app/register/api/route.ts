
import { connectDB } from '@/app/Database/dbconfig';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import User from './../../../models/userModel';

export const POST = async (request: NextRequest) => {
    try {
        await connectDB();
        const userInfo = await request.json();
        const {name, email, password} = userInfo;
        console.log("line 13", name)
        console.log("line 14", email)
        const userExist = await User.findOne({email});
        console.log("line 15", userExist)
        if(userExist){
            return NextResponse.json({message: "user already exist", status: 400})
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        console.log("line 20",hashPassword)
        const newUser = new User({...userInfo, password: hashPassword})
        await newUser.save();
        
        return NextResponse.json({message: "user successfully login" , status: 200 })
    } catch (error) {
       return NextResponse.json({message: error.message , status: 500 })
    }
}