import * as React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";

const Slogan = () => {
    const {t} = useTranslation();
    return (
        <div className={"container-main container-main--even flex flex-col flex-wrap"}>
            <div className={"brand-slogan w-full"}>
                <h2 className={"text-[38px] text-center font-[Gotham] font-bold"}>
                    {t("quotes_heading")}
                </h2>
            </div>
        </div>
    )
}

export default Slogan
