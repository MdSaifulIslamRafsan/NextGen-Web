
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    try {
        const userInfo = await request.json();
        console.log(userInfo)
        return NextResponse.json({message: "user successfully login" , status: 200 })
    } catch (error : any) {
       return NextResponse.json({message: error.message , status: 500 })
    }
}