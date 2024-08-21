import * as React from "react"
import flag1 from "../../images/flag1.png";


const Safety = () => {
    return (
        <div className={"flex flex-col gap-[80px] flex-wrap"}>
            <div className={"brand-slogan"}>
                <h2 className={"text-[38px] text-center font-[Gotham] font-bold"}>
                    Your Seamless Cold Chain Partner Effortlessly
                    <br/>
                    Linking Domestic and International Routes
                </h2>
            </div>
            <div className={"safety-section flex columns-2 gap-12 md:flex-row flex-col"}>
                <div className={"md:w-3/12 flex flex-col justify-between"}>
                    <h2 className={"heading-section text-[#0068B0] leading-10"}>
                        SAFETY & <br/>
                        QUALITY
                    </h2>
                    <p>
                        At FLS, we follow the international standards of quality management, health and safety.
                    </p>
                </div>
                <div className={"flex columns-3 md:w-9/12 justify-between flex-wrap"}>
                    <div className={"relative"}>
                        <img src={flag1} alt={""}/>
                        <div className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO 14001:2015</div>
                    </div>
                    <div className={"relative"}>
                        <img src={flag1} alt={""}/>
                        <div className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO 14001:2015</div>
                    </div>
                    <div className={"relative"}>
                        <img src={flag1} alt={""}/>
                        <div className={"iso-mask absolute w-full h-full bg-[#252525E5] top-0 rounded-[10px] flex justify-center items-center text-white text-[24px] font-[Gotham] font-bold"}>ISO 14001:2015</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety