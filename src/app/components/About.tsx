import Image from "next/image";
import Link from "next/link";

export default function About(){
    return(
        <section className="w-[1340px] h-[603px] flex bg-white">
            <div className="w-[670px] h-[603px] py-[50px] px-[60px]">
                <div className="w-[536px] h-[225px] flex flex-col gap-[25px]">
                    <h1 className="text-[24px] font-poppins leading-[140%] text-[#2A254B]">From a studio in London to a global brand with
                    over 400 outlets</h1>
                    <div className="w-[536px] h-[132px] flex flex-col gap-[20px]">
                        <p className="text-[16px] leading-[auto] text-[#505977] font-poppins">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                        <p className="text-[16px] leading-[auto] text-[#505977] font-poppins">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                </div>
                <Link href="">
                    <button className="mt-[25%] w-[150px] h-[56px] px-[32] py-[16] bg-[#F9F9F9] border-[1px] border-[#4E4D93] hover:bg-[#4E4D93] hover:text-white duration-300 text-[16px] leading-[150%] text-[#2A254B] font-poppins">Get in touch</button>
                </Link>
            </div>
            <div className="w-[720px] h-[603px] ml-auto -mr-2">
                <Image 
                    src="/images/Image.png"
                    alt=""
                    width={720}
                    height={603}
                />
            </div>
        </section>
    );
}