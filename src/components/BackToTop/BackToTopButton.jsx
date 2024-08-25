import * as React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";
import backToTop from "../../images/backToTop.png";

const BackToTopButton = () => {
    const {t} = useTranslation();

    return (
        <div className={"flex sticky bottom-12 right-0 justify-end z-50"}>
            <a href={"#top-banner"} className={"shadow-[-4px 8px 20px 4px #0000001A] bg-white flex gap-2 px-4 py-2 rounded-l-[10px]"}>
                <div className={"uppercase text-[#0068B0]"}>{t("sticky_backtotop")}</div>
                <img src={backToTop} alt={""}/>
            </a>
        </div>
    )

}
 export default BackToTopButton;