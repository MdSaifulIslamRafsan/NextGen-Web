import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import {hashSync } from "bcrypt-ts";

type ErrorMessage = {
    message: string;
  }

export const GET = async (request : NextRequest) => {
    
    try {
    const { password  } = await request.json();
       const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    console.log("Reset Token:", token);

    const user = await User.findOne({
        resetToken : token,
        resetPasswordExpires: { $gt: Date.now() }
        })
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