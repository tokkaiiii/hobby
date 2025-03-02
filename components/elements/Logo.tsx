'use client'
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import IconButton from "./IconButton";
export default function Logo() {

    const onClickIcon = () => {
        console.log("clicked");
    }

  return (
    <section className="flex flex-row items-center gap-2">
        <IconButton icon={<IoMenu size={24} />} onClickIcon={onClickIcon} />
        <div className="cursor-pointer">
            <Image src="/logo.png" alt="logo" width={"100"} height={"100"} />
        </div>
    </section>
  );
}