import Link from "next/link";

export default function Benefits(){
    return(
        <section className="w-full h-[481px] bg-[#F9F9F9] py-[52px] px-[93px]">
            <div className="w-full h-[364px] bg-white flex flex-col justify-center items-center gap-20">
                <div className="w-[571px] h-[114px] flex flex-col items-center justify-center gap-[16px]">
                    <h1 className="text-[36px] leading-[140%] font-poppins">Join the club and get the benefits</h1>
                    <div className="w-[470px] h-[48px]">
                        <p className="text-center font-poppins text-[16px] leading-[150%]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                    </div>
                </div>
                <div className="w-[472px] h-[56px] flex ">
                    <div className="w-[354px] h-[56px] bg-[#F9F9F9]">
                        <input type="text" placeholder="your@email.com" className="w-[354px] h-[56px] text-[#2A254B] text-[16px] leading-[auto] font-poppins text-center bg-transparent p-2" />
                    </div>
                    <Link href="">
                        <button className="w-[118px] h-[56px] bg-[#2A254B] border-[1px] border-[#4E4D93] flex items-center justify-center hover:bg-[#4E4D93] duration-300 font-poppins text-center leading-[150%] text-[16px] text-white">Sign up</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}