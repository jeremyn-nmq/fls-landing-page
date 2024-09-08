import * as React from "react";
import {FAQ} from '../../utils/data'
import {Accordion, Flowbite} from "flowbite-react";
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Faqs = () => {
    const {t} = useTranslation();
    const customTheme = {
        accordion:{
            "root": {
                "base": "",
                "flush": {
                    "off": "",
                    "on": ""
                }
            },
            "content": {
                "base": "bg-[#EBEBEB] py-[5px] px-[10px] faq-answers",
            },
            "title": {
                "arrow": {
                    "base": "h-6 w-6 shrink-0 text-[#0068B0]",
                    "open": {
                        "off": "",
                        "on": "rotate-180"
                    }
                },
                "base": "flex w-full items-center justify-between py-[5px] px-[10px] text-left bg-[#EBEBEB] rounded-tr-[20px]",
                "flush": {
                    "off": "",
                    "on": "bg-transparent dark:bg-transparent"
                },
                "heading": "",
                "open": {
                    "off": "",
                    "on": ""
                }
            }
        }
    }
    return (
        <div className={'container-main container-main--right'}>
            <div className={'one-side one-side--from-left flex flex-col gap-5 faq-section flex-wrap'} id={"faqs"}>
                <h2 className={"heading-section"}>FAQs</h2>
                <div className={"faq-accordion flex flex-col gap-3 flex-wrap"}>
                    {FAQ.map((item, index) => {
                            return (
                                <Flowbite theme={{theme: customTheme}} key={index}>
                                    <Accordion collapseAll>
                                        <Accordion.Panel>
                                            <Accordion.Title>{t(item.question)}</Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                    {t(item.answer)}
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                </Flowbite>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Faqs;
