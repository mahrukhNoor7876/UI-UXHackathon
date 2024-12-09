'use client';
import Link from "next/link";
import { navLinks } from "@/app/data/Links";
import { icons } from "@/app/data/Links"
import Image from "next/image";
import { OtherLinks } from "@/app/data/Links";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();
    return(
            <nav className="hidden lg:block w-full h-[134px] bg-white">
                <div className="flex w-[100%] h-16 items-center px-5">
                    <Link href="/">
                        <h1 className="text-[24px] leading-[auto] text-[#22202E] font-poppins">Avion</h1>
                    </Link>
                    <div className="ml-auto mr-[20px] w-[235px] h-[22px]">
                        <ul className="flex gap-8 text-[16px] font-poppins text-[#726E8D] leading-[auto]">
                            {navLinks.map(link => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                return(
                                    <li key={link.id}>
                                        <Link href={link.href} className="text-[16px] leading-[auto] relative flex flex-col group">{link.title}
                                            <span className={isActive ? "h-[2px] inline-block absolute w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block absolute w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-[80px] h-4 flex leading-[auto] py-1 gap-[16px]">
                        {icons.map(icon => {                            
                            return(
                                <Link href={icon.href} key={icon.id}>
                                    <Image 
                                        src={icon.src}
                                        alt="icon"
                                        width={16}
                                        height={16}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-[#F9F9F9]">
                    <div className="w-[803px] h-[22px]">
                        <ul className="flex items-center justify-center gap-[20px] leading-[auto]">
                            {OtherLinks.map(link => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                return(
                                    <li key={link.id} className="text-[16px] font-poppins text-[#726E8D]">
                                        <Link href={link.href} className="relative flex flex-col group">{link.title}
                                            <span className={isActive ? "h-[2px] inline-block absolute w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block absolute w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>  
                </div>
            </nav>
    );
}