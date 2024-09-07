import * as React from "react";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import {useTranslation} from "gatsby-plugin-react-i18next";

const Services = () => {
    const {t} = useTranslation();
    return (
        <div className={"container-main container-main--right"} id={"services"}>
            <div className={"one-side one-side--from-left service-section bg-[#0068B0] flex flex-col gap-12"}>
                <div className={"service-section--wrapper flex align-top gap-[3rem] justify-start"}>
                    <h2 className={"heading-section"}>
                        {t("services_heading")}
                    </h2>
                    <p className={"heading-section--description text-white"}>
                        {t("services_description")}
                    </p>
                </div>
                <div className={"service-section--wrapper flex justify-center md:justify-between"}>
                    <div className={"service-item"}>
                        <img className={"service-image w-full"} src={service1} alt={""}/>
                        <p className={"service-name"}>
                            {t("services_first_service_item")}
                            <span className={"service-index"}>1</span>
                        </p>
                    </div>
                    <div className={"service-item"}>
                        <p className={"service-name show-on-desktop"}>
                            {t("services_second_service_item")}
                            <span className={"service-index bottom-index"}>2</span>
                        </p>
                        <img className={"service-image w-full"} src={service2} alt={""}/>
                        <p className={"service-name show-on-mobile flex justify-center"}>
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
        </div>
    )
}

export default Services;
