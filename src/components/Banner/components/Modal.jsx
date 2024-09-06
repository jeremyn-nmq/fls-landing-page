import React, {useEffect} from "react";
import originalTruck from '../../../images/original-truck.png';
import {BANNER_ITEMS} from '../../../utils/data'
import {Accordion, Flowbite} from "flowbite-react";
import { useTranslation } from 'gatsby-plugin-react-i18next';

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
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
                "base": "bg-[#EBEBEB] p-[10px] banner-accordions",
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

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'scroll';
        return () => {};
    }, [showModal]);

    return (
        <>
            <button
                className="bg-transparent w-full px-4"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <img
                    className="z-10 object-contain"
                    src={originalTruck}
                    alt="original-truck"
                    id="originalTruck"
                />
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="h-[100vw] overflow-y-scroll border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-[#0067B0] opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                          ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto max-h-[80vh] overflow-auto">
                                    <div className={"flex flex-col gap-3 flex-wrap"}>
                                        {BANNER_ITEMS.map((item, index) => {
                                            return (
                                                <Flowbite theme={{ theme: customTheme }} key={index}>
                                                    <Accordion collapseAll>
                                                        <Accordion.Panel>
                                                            <Accordion.Title>
                                                                <h2 className={"font-bold"}>
                                                                    {t(item.heading)}
                                                                </h2>
                                                                <p className={"text-sm"}>
                                                                    {t(item.subHeading)}
                                                                </p>
                                                            </Accordion.Title>
                                                            <Accordion.Content>
                                                                {item.content.map((content) =>
                                                                    (<img src={content} alt={""} className={"modal-images"}/>)
                                                                )}

                                                            </Accordion.Content>
                                                        </Accordion.Panel>
                                                    </Accordion>
                                                </Flowbite>
                                            )}
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
