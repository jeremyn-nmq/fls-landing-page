import * as React from "react"
import flag1 from "../../images/flag1.png";
import flag2 from "../../images/flag2.png";
import flag3 from "../../images/flag3.png";
import flag4 from "../../images/flag4.png";
import { useTranslation } from 'gatsby-plugin-react-i18next';


const TransportRoutes = () => {
    const {t} = useTranslation();
    return (
        <div className={"container mx-auto flex flex-col gap-5"} id={"routes"}>
            <h2 className={"heading-section text-center"}>ROUTES</h2>
            <p className={"text-center opacity-60"}>
                {t("routes_description")}
            </p>
            <div className={"flex columns-4 md:justify-between justify-center flex-wrap md:gap-0 gap-5"}>
                <div className={"flex flex-col gap-5"}>
                    <img src={flag1} alt={""}/>
                    <p className={"text-center route-name"}>Viet Nam</p>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <img src={flag2} alt={""}/>
                    <p className={"text-center route-name"}>China</p>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <img src={flag3} alt={""}/>
                    <p className={"text-center route-name"}>Campodia</p>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <img src={flag4} alt={""}/>
                    <p className={"text-center route-name"}>Laos</p>
                </div>
            </div>

        </div>
    )
}
export default TransportRoutes
