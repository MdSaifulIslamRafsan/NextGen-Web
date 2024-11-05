import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

type ErrorMessage = {
    message: string;
  }
export const POST = async (request : NextRequest) => {
try {
    const {email} = await request.json();
    const user = await User.findOne({ email });
    if(!user){
        return NextResponse.json({ message: 'User not found!' , status: 404})
    }
    await user.save();
    return NextResponse.json({message : 'password reset successful', status: 200})
} catch (error : unknown) {
    return NextResponse.json({message: (error as ErrorMessage).message , status: 404})
}
}