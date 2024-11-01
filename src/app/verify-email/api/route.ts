
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
type ErrorMessage = {
  message : string;
}

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    console.log("from line 8", token);
    console.log(token);
    const user = await User.findOne({
        verifyToken: token,
        verifyTokenExpiration: { $gt: Date.now() },
    });
    console.log("from line 14 user", user);
    if (!user) {
      return NextResponse.json({ message: "Invalid token", status: 400 });
    }
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiration = undefined;
    await user.save();
    return NextResponse.json({
      message: "Email verified successfully",
      status: 200,
    });
  } catch (error: unknown) {
    return NextResponse.json({ message: (error as ErrorMessage).message, status: 500 });
  }
};