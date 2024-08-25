import * as React from "react";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import {useTranslation} from "gatsby-plugin-react-i18next";


const Services = () => {
    const {t} = useTranslation();
    return (
        <div className={"service-section bg-[#0068B0] flex flex-col gap-12"} id={"services"}>
            <div className={"flex align-top gap-[60px] flex-wrap"}>
                <h2 className={"heading-section"}>
                    {t("services_heading")}
                </h2>
                <p className={"text-white"}>
                    {t("services_description")}
                </p>
            </div>
            <div className={"flex justify-center md:justify-between md:gap-0 gap-5 md:flex-row flex-col"}>
                <div className={"service-item"}>
                    <img className={"service-image w-full"} src={service1} alt={""}/>
                    <p className={"service-name"}>
                        {t("services_first_service_item")}
                        <span className={"service-index"}>1</span>
                    </p>
                </div>
                <div className={"service-item"}>
                    <p className={"service-name md:flex hidden"}>
                        {t("services_second_service_item")}
                        <span className={"service-index bottom-index"}>2</span>
                    </p>
                    <img className={"service-image w-full"} src={service2} alt={""}/>
                    <p className={"service-name md:hidden flex justify-center"}>
                        {t("services_second_service_item")}
                        <span className={"service-index"}>2</span>
                    </p>
                </div>
                <div className={"service-item"}>
                    <img className={"service-image w-full"} src={service3} alt={""}/>
                    <p className={"service-name"}>
                        {t("services_third_service_item")}
                        <span className={"service-index"}>3</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;