import React from "react";


export default function HomePage({ color }){

    return (
        <>
        <p>{color}</p>
        <div class="flex flex-col items-center">
            <div class="flex flex-col justify-center h-screen">
                <div class="text-left mb-24">
                    <p class="font-Albert text-2xl " style={{color}}>Hi, my name is</p>
                    <h1 class="font-Albert text-8xl font-bold " style={{color}}>CALLUM</h1>
                    <div class="flex items-baseline">
                        <p class="font-Albert text-2xl" style={{color}}>
                            A <span class="font-KodeMono font-bold">software developer</span>,
                            <span class="font-Bayon"> designer</span>, and<span class="font-CarterOne"> creator</span>
                        </p>
                    </div>
                </div>

                <div class="flex space-x-12">
                    <button className={`font-Albert px-8 py-2 border-[2px] border-[${color}] text-[${color}] text-2xl hover:bg-[${color}] hover:text-white transition`}>PORTFOLIO</button>
                    <button class="font-Albert px-8 py-2 border-[2px] text-2xl hover:bg-[#1D16E4] hover:text-white transition">ABOUT ME</button>
                    <button class="font-Albert px-8 py-2w border-[2px] text-2xl hover:bg-[#1D16E4] hover:text-white transition">CONTACT</button>
                </div>
            </div>
        </div>
        </>
    );


}