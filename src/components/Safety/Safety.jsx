import * as React from "react"
import iso14001 from "../../images/iso-14001-2015.jpg";
import iso9001 from "../../images/ISO-9001.jpeg";
import iso45001 from "../../images/iso-45001-2018.jpeg";
import {useTranslation} from "gatsby-plugin-react-i18next";


const Safety = () => {
    const {t} = useTranslation();
    return (
        <div className={"container-main container-main--left"}>
            <div className={"one-side one-side--from-right safety-section flex md:flex-row flex-col w-full"}>
                <div className={"safety-section--heading flex flex-col justify-between md:gap-0 gap-5"}>
                    <h2 className={"heading-section leading-10"}>
                        {t("quality_heading")}
                    </h2>
                    <p>
                        {t("quality_description")}
                    </p>
                </div>
                <div className={"safety-section--certificates"}>
                    <a href={"https://drive.usercontent.google.com/u/0/uc?id=17gW5CHD2R6b4-NuXck38ApobeUAvf17x&export=download"}
                       className={"relative"} target={"_blank"}>
                        <img src={iso14001} alt={""}
                             className={"rounded-[10px] w-auto aspect-square object-cover"}/>
                        <div
                            className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO
                            14001:2015
                        </div>
                    </a>
                    <a href={"https://drive.usercontent.google.com/u/0/uc?id=1JdAbyy2bixryf7PjlAYGHULsTbgjgstm&export=download"}
                       className={"relative"}>
                        <img src={iso9001} alt={""}
                             className={"rounded-[10px] w-auto aspect-square object-cover"}/>
                        <div
                            className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO
                            9001:2015
                        </div>
                    </a>
                    <a href={"https://drive.usercontent.google.com/u/0/uc?id=1OMG8EgZXAhCsrMmwNZbmKnu3Qw8ZWDh5&export=download"}
                       className={"relative"}>
                        <img src={iso45001} alt={""}
                             className={"rounded-[10px] w-auto aspect-square object-cover"}/>
                        <div
                            className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO
                            45001:2018
                        </div>
                    </a>
                </div>

                {/*<div className={"safety-section--certificates md:w-9/12 w-full md:justify-center gap-4"}>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}

export default Safety
