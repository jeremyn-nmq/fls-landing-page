import * as React from "react";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";


const Services = () => {
    return (
        <div className={"service-section bg-[#0068B0] flex flex-col gap-12"} id={"services"}>
            <div className={"flex align-top gap-[60px] flex-wrap"}>
                <h2 className={"heading-section leading-6"}>
                    SERVICES
                </h2>
                <p className={"text-white"}>
                    Our comprehensive cold chain logistics services ensure the seamless transport of your perishable goods, whether across borders or within domestic markets, eliminating logistical worries.
                </p>
            </div>
            <div className={"flex justify-between flex-wrap md:gap-0 gap-5"}>
                <div className={"service-item"}>
                    <img className={"service-image"} src={service1} alt={""}/>
                    <p className={"service-name"}>
                        Customs <br/> clearance
                        <span className={"service-index"}>1</span>
                    </p>
                </div>
                <div className={"service-item"}>
                    <p className={"service-name md:flex hidden"}>
                        Cargo <br/> handling
                        <span className={"service-index bottom-index"}>2</span>
                    </p>
                    <img className={"service-image"} src={service2} alt={""}/>
                    <p className={"service-name md:hidden flex justify-center"}>
                        Cargo <br/> handling
                        <span className={"service-index bottom-index"}>2</span>
                    </p>
                </div>
                <div className={"service-item"}>
                    <img className={"service-image"} src={service3} alt={""}/>
                    <p className={"service-name"}>
                        Transportation
                        <span className={"service-index"}>3</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;