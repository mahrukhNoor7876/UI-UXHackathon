'use client';
import Link from "next/link";
import { navLinks } from "@/app/data/Links";
import { OtherLinks } from "@/app/data/Links";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation";
import { icons } from "@/app/data/Links"
import Image from "next/image";

export default function MobileNavbar(){
    
    const pathname = usePathname();

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <nav className="lg:hidden w-full h-[134px] bg-white">
            <div className="flex w-[100%] h-16 items-center px-5">
                <Link href="/">
                    <h1 className="text-[24px] leading-[auto] text-[#22202E] font-poppins">Avion</h1>
                </Link>
                <div className="mr-5 sm:mr-0 flex ml-[50%] gap-5">
                    {icons.map(icon => {                            
                        return(
                            <Link href={icon.href} key={icon.id}>
                                <Image 
                                    src={icon.src}
                                    alt="icon"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        );
                    })}
                </div>
                <div className="ml-auto">
                    {nav ? (
                        <div className={`absolute w-[200px] h-[200px] shadow-lg bg-white top-0 right-0 transition-all duration-300 transform ${nav ? "right-0" : "right-[-100%]"}`}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="cursor-pointer absolute top-5 right-5 text-[16px]"
                                onClick={handleNav}
                            />
                            <ul className="absolute top-[60px] mx-5 text-[16px] text-[#726E8D]">
                                {navLinks.map(link => {
                                    const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                    return(
                                        <li key={link.id} className="mt-2">
                                            <Link href={link.href} className="leading-[auto] relative flex flex-col group">{link.title}
                                                <span className={isActive ? "h-[2px] inline-block absolute w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block absolute w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : (
                        <FontAwesomeIcon
                            icon={faBars}
                            className="cursor-pointer text-[16px]"
                            onClick={handleNav}
                        />
                    )}
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
