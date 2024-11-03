import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { compareSync } from "bcrypt-ts";
import { connectDB } from "@/Database/dbconfig";
import User from "@/models/userModel";
type ErrorMessage = {
    message: string;
  }
  interface UserInfoType {
    email : string;
    password : string;
  }

 export const POST = async (request : NextRequest) => {
     try {
        await connectDB();
        const userInfo : UserInfoType = await request.json();
        const {email , password} = userInfo;
        const user = await User.findOne({email}).select('+password');
        console.log('line 21', user)
        if(!user) {
            return NextResponse.json({message: "user not found", status: 400})
        }
        if(!user?.isVerified){
            return NextResponse.json({message: "please verify your email", status: 400})
        }
        const isMatchPassword = compareSync(password, user?.password);
        console.log('line number 28', isMatchPassword)
        if(!isMatchPassword){
            return NextResponse.json({message: "Password not match", status: 400})
        }

        const token = jwt.sign({email}, process.env.JWT_SECRET , {
            expiresIn: '1h',
        })
        

        console.log('line number 11', email , password)
        const response = NextResponse.json({message: "successful" , token,  status:200});
        response.cookies.set('token' , token);
        return response;

        
    } catch (error: unknown) {
       return NextResponse.json({message: (error as ErrorMessage).message, status: 400})
    }
}