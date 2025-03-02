import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButon from './ui/MagicButon'

const Hero = () => {
  return (
    <div className="pb-20 pt-36 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20">
        <div className="flex justify-center relative my-20 z-10 lg:col-span-2 md:col-span-3 md:row-span-4">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col
             justify-center"> 
                <h2 className="uppercase tracking-widest text-xs
                text-left text-blue-100 max-w-80">
                    Ain't no way for it can be true
                </h2>
                <TextGenerateEffect 
                    className="text-left text--[40px]
                    md:text-5xl lg:text-6xl"
                    words="Welcome to my digital CV"
                />
                <p className="text-left ">
                    What's up, I'm Pham Duc Manh
                </p>
                <a href="#about" className="mt-10">
                    <MagicButon
                        title="Let's go"
                    />
                </a>
            </div>
        </div>
        <div className=" lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh] pt-10  ">
            <img
                src="/me.jpg"
                alt="me"
                className="rounded-4xl scale-75 object-cover "
            />
        </div>
    </div>
  )
}

export default Hero