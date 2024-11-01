
import { connectDB } from '@/Database/dbconfig';
import {hashSync } from "bcrypt-ts";
// import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import User from './../../../models/userModel';

export const POST = async (request: NextRequest) => {
    try {
        await connectDB();
        const userInfo = await request.json();
        const {email, password} = userInfo;
        const userExist = await User.findOne({email});
       
        if(userExist){
            return NextResponse.json({message: "user already exist", status: 400})
        }
        const hashPassword =  hashSync(password, 10);
        console.log("line 20",hashPassword)
        const newUser = new User({...userInfo, password: hashPassword})
        await newUser.save();
        
        return NextResponse.json({message: "user successfully register" , status: 200 })
    } catch (error: unknown) {
       return NextResponse.json({message: error , status: 500 })
    }
}