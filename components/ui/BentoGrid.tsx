import { socialMedia } from "@/data";
import { cn } from "@/lib/utils";
import MagicButon from "./MagicButon";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgb(89,89,89)",
          backgroundColor:
            "linear-gradient(90deg, rgba(89,89,89,1) 0%, rgba(165,165,233,1) 0%, rgba(91,91,103,1) 50%, rgba(75,75,75,1) 100%)",
        }}
      >
        <div className="h-full">
          <div className="scale-130 absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>

          <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-0"}`}>
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>

          <div
            className={cn(
              titleClassName,
              " group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight text-neutral-300 stroke-2 text-sm ">
              {description}
            </div>

            <div
              className={`${
                id === 1
                  ? "lg:text-5xl font-sans text-lg font-bold z-20 stroke-2"
                  : "font-sans text-lg max-w-96 lg:text-2xl  font-bold z-20 "
              }`}
            >
              {title}
            </div>
            {id === 2 && (
              <div className="z-30 flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-3 -bottom-3 lg:bottom-6">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {socialMedia.map((item) => (
                <Link href={item?.link} key={item?.id} >
                  <MagicButon
                    img={item.img}
                    description={item.description}
                  />
                </Link>
                ))}
              </div>
              </div>
            )}

            {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-1 -bottom-1 lg:-bottom-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {["Java", "HTML", "TypeScript"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#1c1c1f]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#1c1c1f]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#1c1c1f]"></span>
                {["React", "NextJs", "TailwindCSS"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#1c1c1f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
  );
};
