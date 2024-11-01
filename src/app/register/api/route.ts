
import { connectDB } from '@/Database/dbconfig';
import {hashSync } from "bcrypt-ts";
// import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import User from './../../../models/userModel';
import { SendEmail } from '@/Helper/Sendmail';

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

       const sendEmail = await SendEmail(email , "verify-email");
       if(sendEmail === "Email sent successfully"){
        return NextResponse.json({
            message: "User created successfully",
            status: 200,
          });
       }
        
        return NextResponse.json({message: "user successfully register" , status: 200 })
    } catch (error: unknown) {
       return NextResponse.json({message: error , status: 500 })
    }
}