import { popularProducts } from "@/app/data/popularProduct";
import Image from "next/image";
import Link from "next/link";

export default function PopularProducts(){
    return(
        <section className="w-full h-[744px] p-[20px] px-[80px] bg-white">
            <h1 className="text-[32px] leading-[140%] font-poppins text-[#2A254B]">Our popular products</h1>
            <div className="mt-10 flex w-full gap-5 h-auto">
                {popularProducts.map(popularProduct => {
                    return(
                        <div className="w-auto h-[430px] flex flex-col gap-[24px] duration-300 cursor-pointer border-black hover:border-[1px]">
                            <Link href="/productListing">
                                <Image 
                                    src={popularProduct.src}
                                    alt=""
                                    width={popularProduct.width}
                                    height={375}
                                />
                            </Link>
                            <div className="flex flex-col gap-[8px] w-[209px] h-[63px]">
                                <p className="text-[20px] leading-[140%] font-poppins text-[#2A254B]">{popularProduct.title}</p>
                                <p className="text-[18px] leading-[150%] font-poppins text-[#2A254B]">{popularProduct.price}</p>
                            </div>
                        </div>                        
                    );
                })}
            </div>
            <Link href="">
                <button className="mx-[44%] my-20 w-[170px] h-[56px] px-[32] py-[16] bg-[#F9F9F9] border-[1px] border-[#4E4D93] text-[16px] leading-[150%] text-[#2A254B] font-poppins hover:bg-[#4E4D93] hover:text-white duration-300">View collection</button>
            </Link>
        </section>
    );
}