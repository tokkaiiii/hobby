'use client'

interface IconButtonProps {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}

export default function IconButton({ icon, onClickIcon= () => {} }: IconButtonProps) {
  return (
    <div onClick={onClickIcon} 
    className='flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer'>
      {icon}
    </div>
  );
}