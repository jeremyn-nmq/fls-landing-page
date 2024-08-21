import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import {useState} from "react";
import FLSlink from '../../images/FLS-link.png';

const Header = ({ siteTitle }) => {
    const { languages, originalPath, t, i18n } = useI18next();
    const [isOpened, setIsOpened] = useState(false);
    const navBarItems = [
        {
            name: "ROUTES",
            url: "#routes"
        },
        {
            name: "SERVICES",
            url: "#services"
        },
        {
            name: "WHY US",
            url: "#why-us"
        },
        {
            name: "FAQs",
            url: "#faqs"
        },
    ]
    return (
        <header className="main-header h-[130px] w-full bg-white text-white flex justify-between">
            <div className={"flex items-center justify-between container mx-auto relative"}>
                <div className={"flex items-start gap-4"}>
                    <div className={`burger-menu-icon flex flex-col hover:cursor-pointer ${isOpened ? "is-opened": ""}`} onClick={()=> setIsOpened(!isOpened)}>
                        <div className={'menu-line-1'}/>
                        <div className={'menu-line-2'}/>
                        <div className={'menu-line-3'}/>
                    </div>
                    <ul className={`navbar flex gap-5 transition items-center md:flex-row flex-col md:static absolute ${isOpened ? "opacity-100 block top-[130px] z-10 w-full left-0 bg-white": "opacity-0 hidden"}`}>
                        {navBarItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.url} className={"text-black uppercase font-[Gotham] hover:cursor-pointer flex items-center"}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={"flex gap-5"}>
                    <button className={"bg-[#0068B0] px-[18px] py-[12px] rounded-[8px] shadow-[0px 1px 2px 0px #0000000D] text-[16px]"}>Enquiry</button>
                    <ul className="languages">
                        {languages.map((lng) => (
                            <li key={lng}>
                                <Link to={originalPath} language={lng} className={`text-[#0068B0] border-[#0068B0] border-solid border-[1px] px-[18px] py-[12px] rounded-[8px] capitalize ${i18n.resolvedLanguage === lng ? "hidden" : "flex"}`}>
                                    {lng}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <img src={FLSlink} alt={""} className={"w-100 object-contain hover:cursor-pointer"}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
