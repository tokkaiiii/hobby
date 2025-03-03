"use client"
import { RingLoader } from "react-spinners";

export default function LoadingBar() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-background/80">
        <RingLoader 
        color="#FFFB00FF" 
        size={150}
        />
        <div className="text-[50px]">Loading...</div>
    </div>
  )
}
