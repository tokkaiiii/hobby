import { PacmanLoader } from "react-spinners";
export default function ErrorMessage() {
    return(
        <div className="my-20 flex flex-col items-center justify-center gap-4">
        <PacmanLoader color="#FFFB00FF" />  
        <div className="text-[50px]">Oops!</div>
        <div>잠시 후 다시 확인해주세요...</div>
        </div>
    )
}