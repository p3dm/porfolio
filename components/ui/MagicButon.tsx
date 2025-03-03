import React from 'react'

const MagicButon = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}
) => {
  return (
    <div>
        <button className="p-[3px] relative rounded-lg animate-shimmer" onClick={handleClick}>
            <div className="absolute inset-0
             bg-gradient-to-r from-cyan-500
             to-gray-500 rounded-lg" />
            <div className={`inline-flex h-full w-full cursor-pointer
            items-center justify-center px-8 py-2  bg-black rounded-[6px]  
            relative group transition duration-200 text-white hover:bg-transparent gap-2 &{otherClasses}`}>
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
            </div>
        </button>
    </div>
  )
}

export default MagicButon




      