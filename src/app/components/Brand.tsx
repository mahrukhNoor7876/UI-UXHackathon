import { brand } from "@/app/data/brand";
import Image from "next/image";

export default function Brand(){
    return(
        <main className="flex flex-col gap-12 py-10 items-center w-full h-[355px] bg-white">
            <h1 className="font-poppins text-[24px] leading-[140%]">What makes our brand different</h1>
            <div className="flex gap-10">
                {brand.map(brand => {
                    return(
                        <div className="w-[270px] h-[124px] cursor-pointer" key={brand.id}>
                            <Image 
                                src={brand.src}
                                alt=""
                                width={24}
                                height={24}
                            />
                            <h4 className="mt-5 font-poppins text-[20px] leading-[140%]">{brand.heading}</h4>
                            <p className="mt-5 text-[16px] font-poppins leading-[150%]">{brand.content}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}