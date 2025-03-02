'use client'
import Image from "next/image";
import { IoClose, IoMenu } from "react-icons/io5";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
export default function Logo({ isInDrawer, onClickClose = () => {} }: { isInDrawer?: boolean, onClickClose?: () => void }) {
const router = useRouter();
    const onClickIcon = () => {
        router.push("/");
    }

  return (
    <section className="flex flex-row items-center gap-2">
        {isInDrawer ? (
            <IconButton icon={<IoClose size={24} />} onClickIcon={onClickClose} />
        ) : (
            <IconButton icon={<IoMenu size={24} />} onClickIcon={onClickIcon} />
        )}
        <div className="cursor-pointer">
            <Image src="/logo.png" alt="logo" width={"100"} height={"100"} />
        </div>
    </section>
  );
}