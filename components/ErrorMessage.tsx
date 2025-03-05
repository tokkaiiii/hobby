'use client'

import { PacmanLoader } from "react-spinners";
import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function ErrorMessage({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter();
    useEffect(() => {
        console.error(error);
    }, [error]);
    const handleClickReset = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return(
        <div className="my-20 flex flex-col items-center justify-center gap-4">
        <PacmanLoader color="#FFFB00FF" />  
        <div className="text-[50px]">Oops!</div>
        <div>잠시 후 다시 확인해주세요...</div>
        <button onClick={handleClickReset}>다시 시도</button>
        </div>
    )
}