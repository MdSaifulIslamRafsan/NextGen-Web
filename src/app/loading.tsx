"use client"
import Image from "next/image";

export default function Loading() {
    return <div className="relative flex justify-center items-center h-screen">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    <Image src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" width="100" height="100" alt="loading"   className="rounded-full h-28 w-28"/>
</div>
  }