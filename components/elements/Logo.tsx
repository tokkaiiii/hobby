'use client'
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
export default function Logo() {
const router = useRouter();
    const onClickIcon = () => {
        router.push("/");
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