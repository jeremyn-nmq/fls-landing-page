import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next';

const TransportRoutes = ({transportRoutes}) => {
    const {t} = useTranslation();

    return (
        <div className={"container-main container-main--even flex flex-col items-center justify-center gap-5"} id={"routes"}>
            <h2 className={"heading-section text-center"}>{t("routes_heading")}</h2>
            <p className={"text-center opacity-60"}>
                {t("routes_description")}
            </p>
            <div className={"transport-routes-flags"}>
                {
                    transportRoutes?.map(tr => (
                        <div className={"flex flex-col items-center sm:gap-5 gap-3"} key={tr.id}>
                            <img src={tr.flag} alt={tr.alt}/>
                            <p className={"text-center route-name"}>{t(`routes_country_${tr.id}`)}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default TransportRoutes
