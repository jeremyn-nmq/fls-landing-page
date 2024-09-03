import * as React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";
import backToTop from "../../../images/backToTop.svg";

const BackToTopButton = () => {
    const {t} = useTranslation();

    return (
        <a href={"#top-banner"} className={"back-to-top-btn"}>
            <div className={"uppercase text-[#0068B0]"}>{t("sticky_backtotop")}</div>
            <img src={backToTop} alt={""}/>
        </a>
    )

}
 export default BackToTopButton;
