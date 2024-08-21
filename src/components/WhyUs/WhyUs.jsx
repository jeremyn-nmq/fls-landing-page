import * as React from "react"
import flag1 from "../../images/flag1.png";

const WhyUs = () => {
    return (
        <div className={"wrapper flex flex-col gap-[80px]"} id={"why-us"}>
            <div className={"why-us-section container mx-auto flex flex-col gap-5"}>
                <h2 className={"heading-section text-center"}>WHY US?</h2>
                <div className={"flex columns-4 gap-6 md:flex-row flex-col"}>
                    <div className={"flex flex-col why-us-item gap-5"}>
                        <img src={flag1} alt={""} className={""}/>
                        <div className={"flex flex-col gap-5 px-5"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                Asset <br/>
                                ownership
                            </h4>
                            <p>
                                Our modern fleet, exclusively owned by FLS, boasts GPS-equipped trucks under 7 years old for reliable, efficient deliveries.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col why-us-item gap-5"}>
                        <img src={flag1} alt={""}/>
                        <div className={"flex flex-col gap-5 px-5"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                dedicated team
                            </h4>
                            <p>
                                Our dedicated team handles every aspect from paperwork to final delivery, providing comprehensive, personalized solutions.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col why-us-item gap-5"}>
                        <img src={flag1} alt={""}/>
                        <div className={"flex flex-col gap-5 px-5"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                Trans-Asia
                            </h4>
                            <p>
                                Leveraging Vietnam's strategic coastline, we seamlessly connect deliveries to neighboring countries — Laos, Cambodia, and China — spanning international
                                and domestic routes.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col why-us-item gap-5"}>
                        <img src={flag1} alt={""}/>
                        <div className={"flex flex-col gap-5 px-5"}>
                            <h4 className={"uppercase text-[32px] font-[Gotham] leading-8 font-semibold"}>
                                FLEXIBLE
                                PROBLEM-SOLVER
                            </h4>
                            <p>
                                We adapt quickly to
                                solve challenges, ensuring
                                on-time delivery with precision and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-[#0068B0] py-4 "}>
                <div className={"quotes-wrapper"}>
                    <h2 className={"heading-section text-center m-4 px-4 quotes bg-[#0068B0] z-10"}>
                        From Here to There, with Utmost Care
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;