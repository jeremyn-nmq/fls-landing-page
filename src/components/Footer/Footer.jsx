import * as React from "react";
import facebookIcon from '../../images/facebook-icon.png';
import zaloIcon from '../../images/zalo-icon.png';
import youtubeIcon from '../../images/youtube-icon.png';
import linkedinIcon from '../../images/linkedin-icon.png';
import {useTranslation} from "gatsby-plugin-react-i18next";


const Footer = () => {
    const {t} = useTranslation();
    return (
    <footer className={"container mx-auto pt-[80px]"}>
        <div className={'flex columns-2 gap-16 py-8 md:flex-row flex-col border-[1px] border-[#E6E6E6] border-solid border-x-0'}>
            <div className={"google-map md:w-4/12 w-full"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.106730635836!2d106.73208108250266!3d10.803136961879936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a5fe10cf5%3A0x7692272de2bb8b31!2sFLS%20Group%20(Ho%20Chi%20Minh%20City%20branch)%20-%20FLS%20Vietnam%20Ltd.!5e0!3m2!1sen!2s!4v1723375258209!5m2!1sen!2s"
                    height="300" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" className={"h-full"}></iframe>
            </div>
            <div className={"md:w-8/12 w-full px-4 md:px-0"}>
                <div className={"mb-4"}>
                    <h3>
                        {t("footer_heading")}
                    </h3>
                    <h4>
                        {t("footer_subheading")}
                    </h4>
                </div>

                <div className={"flex columns-2 gap-5 md:flex-row flex-col"}>
                    <div className={"pr-4 md:border-r-[1px] border-[#828282] flex flex-col justify-between"}>
                        <p>
                            {t("footer_description")}
                        </p>
                        <div className={"flex gap-4 align-middle mt-4"}>
                            <a href={"#"} className={"self-center"}>
                                <img src={facebookIcon} alt={""}/>
                            </a>
                            <a href={"https://zalo.me/0987003278"} className={"self-center"}>
                                <img src={zaloIcon} alt={""}/>
                            </a>
                            <a href={"#"} className={"self-center"}>
                                <img src={youtubeIcon} alt={""}/>
                            </a>
                            <a href={"#"} className={"self-center"}>
                                <img src={linkedinIcon} alt={""}/>
                            </a>
                        </div>
                    </div>
                    <div className={"md:pl-4 flex flex-col justify-start whitespace-nowrap gap-[10px]"}>
                        <a href={"https://zalo.me/0987003278"}>
                            Vũ Công Thành <br/>
                            +84 987003278
                        </a>
                        <a href={"https://zalo.me/0933028639"}>
                            Linh Huỳnh <br/>
                            +84 933028639
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
