import * as React from "react"
import whyUs1 from "../../images/us1.png";
import whyUs2 from "../../images/us2.png";
import whyUs3 from "../../images/us3.png";
import whyUs4 from "../../images/us4.png";

import { useTranslation } from 'gatsby-plugin-react-i18next';

const WhyUs = () => {
    const {t} = useTranslation();
    return (
        <div className={"wrapper flex flex-col gap-[80px]"} id={"why-us"}>
            <div className={"why-us-section container mx-auto flex flex-col gap-5"}>
                <h2 className={"heading-section text-center"}>{t("whyus_heading")}</h2>
                <div className={"flex columns-4 gap-6 md:flex-row flex-col"}>
                    <div className={"flex flex-col why-us-item gap-5 md:self-start self-center"}>
                        <img src={whyUs1} alt={""} className={""}/>
                        <div className={"flex flex-col gap-5 px-5 why-us-item-content"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                {t("whyus_heading1")}
                            </h4>
                            <p>
                                {t("whyus_description1")}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col why-us-item gap-5 md:self-start self-center"}>
                        <img src={whyUs2} alt={""}/>
                        <div className={"flex flex-col gap-5 px-5 why-us-item-content"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                {t("whyus_heading2")}
                            </h4>
                            <p>
                                {t("whyus_description2")}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col why-us-item gap-5 md:self-start self-center"}>
                        <img src={whyUs3} alt={""}/>
                        <div className={"flex flex-col gap-5 px-5 why-us-item-content"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                {t("whyus_heading3")}
                            </h4>
                            <p>
                                {t("whyus_description3")}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col why-us-item gap-5 md:self-start self-center"}>
                        <img src={whyUs4} alt={""}/>
                        <div className={"flex flex-col gap-5 px-5 why-us-item-content"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                {t("whyus_heading4")}
                            </h4>
                            <p>
                                {t("whyus_description4")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-[#0068B0] py-4 "}>
                <div className={"quotes-wrapper"}>
                    <h2 className={"heading-section text-center m-4 px-4 quotes bg-[#0068B0] z-10"}>
                        {t("statement_heading")}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;