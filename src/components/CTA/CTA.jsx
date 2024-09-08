import * as React from "react"
import BackToTopButton from "./BackToTop/BackToTopButton";
import ContactCTA from "./ContactCTA/ContactCTA";
import {CTA_ITEMS} from "../../utils/data";

const CTA = () => {
    return (
        <div className="cta-wrapper flex sticky left-full z-50 flex-col gap-3">
            <BackToTopButton/>
            <ContactCTA ctaItems={CTA_ITEMS}/>
        </div>
    )
}
export default CTA
