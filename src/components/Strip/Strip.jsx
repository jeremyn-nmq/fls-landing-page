import * as React from "react"

import { useTranslation } from 'gatsby-plugin-react-i18next';

const Strip = () => {
    const {t} = useTranslation();
    return (
        <div className={"bg-[#0068B0] py-4 "}>
            <div className={"strip-wrapper"}>
                <h2 className={"heading-section text-center m-4 px-4 quotes bg-[#0068B0] z-10"}>
                    {t("statement_heading")}
                </h2>
            </div>
        </div>
    )
}

export default Strip;
