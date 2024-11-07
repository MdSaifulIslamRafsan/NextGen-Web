import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import {hashSync } from "bcrypt-ts";

type ErrorMessage = {
    message: string;
  }

export const POST = async (request : NextRequest) => {
    try {
        const {token, password  } = await request.json();
        console.log( 'line no 26',token)
        console.log( 'line no 27',password)
        
        const user = await User.findOne({
            resetToken : token,
          resetTokenExpiration: { $gt: Date.now() }
        })
        console.log( 'line no 33',user)
            if(!user){
                return NextResponse.json({message: "Invalid reset token", status: 400})
            }
            
            const newPassword =  hashSync(password, 10);
            user.password = newPassword;
            user.resetToken = undefined;
            user.resetPasswordExpires = undefined;
            await user.save();
    
            return NextResponse.json({message: "Password has been reset successfully!" , status: 200})
    } catch (error : unknown) {
        return NextResponse.json({message: (error as ErrorMessage).message , status: 404})
    }
}