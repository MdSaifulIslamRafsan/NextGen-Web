import { SendEmail } from "@/Helper/SendMail";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

type ErrorMessage = {
    message: string;
  }
export const POST = async (request : NextRequest) => {
try {
    const { email } = await request.json();
    const user = await User.findOne({ email });
    if(!user){
        return NextResponse.json({ message: 'User not found!' , status: 404})
    }
    await user.save();
    const sendEmail = await SendEmail(email , 'reset-password');
    if(sendEmail === "Email sent successfully"){
        return NextResponse.json({
            message:  "Password reset email sent successfully",
            status: 200,
          });
       }
       return NextResponse.json({
        message: "Failed to send password reset email",
        status: 500,
      });
} catch (error : unknown) {
    return NextResponse.json({message: (error as ErrorMessage).message , status: 404})
}
}