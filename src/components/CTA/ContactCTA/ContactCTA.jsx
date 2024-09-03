import * as React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";

const CTAItem = ({logo, name, info}) => {
    return (
        <a href={info.href} target={info.newPage? "_blank":""} key={name}>
            <img src={logo} alt={`cta-logo-${name}`}/>
        </a>
    )
}

const ContactCTA = ({ctaItems}) => {
    const {t} = useTranslation();
    return (
        <div className="contact-cta-wrapper">
            {
                ctaItems.sort((a,b) => a.order - b.order).map(item => CTAItem(item))
            }
        </div>
    )

}
export default ContactCTA;
