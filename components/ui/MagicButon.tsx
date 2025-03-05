import React from 'react'

const MagicButon = ({
    title, icon, position, handleClick, otherClasses, img, description,
}: {
    title?: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
    img?: string;
    description?: string;

}
) => {
  return (
    <div>
        <button className="p-[3px] relative rounded-lg animate-shimmer" onClick={handleClick}>
            <div className="absolute inset-0
             bg-gradient-to-r from-cyan-500
             to-gray-500 rounded-lg" />
            <div className={`flex cursor-pointer
            items-center justify-center w-60 px-8 py-2 bg-black rounded-[6px]  
            relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
            {title ? (
              <>
              {position === "left" && icon}
              {title}
              {position === "right" && icon}
              </>                                      
            ) : (
              <>
            <div className="flex items-center w-full space-x-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                {img && (
                  <img
                    src={img}
                    alt={img}
                    className="object-cover object-center w-full h-full lg:scale-125 scale-100"
                  />
                )}
              </div>
              <div className="flex-1 text-xs lg:text-base text-left">
              {description}
              </div>
            </div>
              </>
            )}
          </div>
        </button>
    </div>
  )
}

export default MagicButon




      