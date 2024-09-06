import * as React from "react"
import iso14001 from "../../images/iso-14001-2015.jpg";
import iso9001 from "../../images/ISO-9001.jpeg";
import iso45001 from "../../images/iso-45001-2018.jpeg";
import {useTranslation} from "gatsby-plugin-react-i18next";


const Safety = () => {
    const {t} = useTranslation();
    return (
        <div className={"flex flex-col gap-[80px] flex-wrap"}>
            <div className={"brand-slogan w-full"}>
                <h2 className={"text-[38px] text-center font-[Gotham] font-bold"}>
                    {t("quotes_heading")}
                </h2>
            </div>
            <div className={"pl-[100px] w-full"}>
                <div className={"safety-section flex columns-2 gap-12 md:flex-row flex-col w-full"}>
                    <div className={"md:w-3/12 flex flex-col justify-between md:gap-0 gap-5"}>
                        <h2 className={"heading-section leading-10"}>
                            {t("quality_heading")}
                        </h2>
                        <p>
                            {t("quality_description")}
                        </p>
                    </div>
                    <div className={"flex columns-3 md:w-9/12 w-full md:justify-center gap-4 justify-center md:flex-row flex-col" +
                        ""}>
                        <a href={"https://drive.usercontent.google.com/u/0/uc?id=17gW5CHD2R6b4-NuXck38ApobeUAvf17x&export=download"} className={"relative"} target={"_blank"}>
                            <img src={iso14001} alt={""} className={"rounded-[10px] md:max-w-[250px] w-auto aspect-square object-cover"}/>
                            <div className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO 14001:2015</div>
                        </a>
                        <a href={"https://drive.usercontent.google.com/u/0/uc?id=1JdAbyy2bixryf7PjlAYGHULsTbgjgstm&export=download"} className={"relative"}>
                            <img src={iso9001} alt={""} className={"rounded-[10px] md:max-w-[250px] w-auto aspect-square object-cover"}/>
                            <div className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO 9001:2015</div>
                        </a>
                        <a href={"https://drive.usercontent.google.com/u/0/uc?id=1OMG8EgZXAhCsrMmwNZbmKnu3Qw8ZWDh5&export=download"} className={"relative"}>
                            <img src={iso45001} alt={""} className={"rounded-[10px] md:max-w-[250px] w-auto aspect-square object-cover"}/>
                            <div className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO 45001:2018</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety