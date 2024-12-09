import { ceramic } from "@/app/data/ceramic";
import Image from "next/image";
import Link from "next/link";

export default function Ceramics(){
    return(
        <section className="w-full h-[761px] py-[20px] px-[80px] bg-white">
            <h1 className="text-[32px] text-[#2A254B] leading-[auto]">New ceramics</h1>
            <div className="mt-10 flex gap-5 w-full h-auto">
                {ceramic.map(ceramic => {
                    return(
                         <div className="w-[305px] h-[427px] flex flex-col gap-[24px] cursor-pointer border-black hover:border-[1px] duration-300" key={ceramic.id}>
                            <Link href="/productListing">
                                <Image 
                                    src={ceramic.src}
                                    alt=""
                                    width={305}
                                    height={375}
                                />
                            </Link>
                            <div className="flex flex-col gap-[8px] w-[154px] h-[63px]">
                                <p className="text-[20px] leading-[140%] font-poppins text-[#2A254B]">{ceramic.title}</p>
                                <p className="text-[18px] leading-[150%] font-poppins text-[#2A254B]">{ceramic.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link href="">
                <button className="mx-[44%] my-12 w-[170px] h-[56px] px-[32] py-[16] bg-[#F9F9F9] border-[1px] border-[#4E4D93] text-[16px] hover:bg-[#4E4D93] hover:text-white duration-300 leading-[150%] text-[#2A254B] font-poppins">View collection</button>
            </Link>
        </section>
    );
}