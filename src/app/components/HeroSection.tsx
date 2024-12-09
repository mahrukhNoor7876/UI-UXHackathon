import Image from "next/image";
import Link from "next/link";

export default function HeroSection(){
    return(
        <section className="w-full h-[704px] bg-white px-[80px] py-[60px]">
            <div className="flex w-full h-[584px] bg-[#2A254B]">
                <div className="p-[40px]">
                    <h1 className="text-[32px] font-poppins text-white leading-[140%]">The furniture brand for the future, with timeless designs</h1>
                    <Link href="">
                        <button className="w-[180px] h-[56px] px-[32px] py-[16px] bg-[#F9F9F9] bg-opacity-[15%] border-[1px] border-[#4E4D93] leading-[150%] text-[16px] font-poppins text-white mt-[50px] hover:bg-[#4E4D93] duration-300">View collection</button>
                    </Link>
                    <div className="w-[602px] h-[81px] ">
                        <p className="text-white text-[18px] font-poppins mt-[220px] leading-[150%]">
                           A new era in eco friendly furniture with Avelon, the French luxury retail brand
                           with nice fonts, tasteful colors and a beautiful way to display things digitally 
                           using modern web technologies.</p>
                    </div>
                </div>
                <Image 
                    src="/images/Right Image.png"
                    alt="right image"
                    width={520}
                    height={584}
                    className="ml-auto"
                />
            </div>
        </section>
    );
}