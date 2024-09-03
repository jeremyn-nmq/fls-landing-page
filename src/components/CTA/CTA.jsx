import * as React from "react"
import BackToTopButton from "./BackToTop/BackToTopButton";
import ContactCTA from "./ContactCTA/ContactCTA";
import zaloIcon from "../../images/cta-zalo.png";
import phoneIcon from "../../images/cta-phone.png";

const ctaItems = [
    {
        logo: phoneIcon,
        name: "phone",
        order: 1,
        info: {
            href: "tel: +842854496084",
            label: '+84 28 54 496 084'
        }
    },
    {
        logo: zaloIcon,
        name: "zalo",
        order: 2,
        info: {
            href: "https://zalo.me/0813822635",
            label: '+84 28 54 496 084',
            newPage: true,
        }
    }
]

const CTA = () => {
    return (
        <div className="cta-wrapper flex sticky bottom-12 left-full z-50 flex-col gap-3">
            <BackToTopButton/>
            <ContactCTA ctaItems={ctaItems}/>
        </div>
    )
}
export default CTA
