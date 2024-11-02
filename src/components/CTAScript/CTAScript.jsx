import * as React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";
import {useState} from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const INITIAL_FORM = {
    contactName: '',
    contactPhoneNumber: '',
    contactEmail: '',
    contactRequest: ''
}

const CTAScript = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';

        if (name === 'contactPhoneNumber') {
            error = !/^(\+?\d+)?$/.test(value)
                ? 'Phone number is invalid. Use only numbers or start with "+" followed by numbers.'
                : '';
        } else if (name === 'contactEmail') {
            error = !/\S+@\S+\.\S+/.test(value)
                ? 'Email is invalid. Please enter a valid email address.'
                : '';
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const isFormValid = () => {
        return form.contactName.trim() !== '' &&
            form.contactPhoneNumber.trim() !== '' &&
            form.contactEmail.trim() !== '' &&
            !errors.contactPhoneNumber &&
            !errors.contactEmail;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) return;

        try {
            await sendEmail(form);
            setStatus("Email sent successfully!");
            setForm(INITIAL_FORM);
            setErrors({});
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("Failed to send email. Please try again later.");
        }
    };

    const sendEmail = async (formData) => {
        const response = await fetch("https://api.mailjet.com/v3.1/send", {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa(`${process.env.GATSBY_MJ_APIKEY_PUBLIC}:${process.env.GATSBY_MJ_APIKEY_PRIVATE}`),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Messages: [
                    {
                        From: { Email: "quinn@yopmail.com", Name: "Me" },
                        To: [{ Email: "quinn2@yopmail.com", Name: "You" }],
                        Subject: "New Consultation Request",
                        HTMLPart: `
                            <h3>New Consultation Request</h3>
                            <p><strong>Name:</strong> ${formData.contactName}</p>
                            <p><strong>Phone Number:</strong> ${formData.contactPhoneNumber}</p>
                            <p><strong>Email:</strong> ${formData.contactEmail}</p>
                            <p><strong>Request:</strong> ${formData.contactRequest}</p>
                        `,
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to send email");
        }
    };


    // function search(formData) {
    //     console.log(formData);
    //     const mailjet = require('node-mailjet').connect(
    //         process.env.MJ_APIKEY_PUBLIC,
    //         process.env.MJ_APIKEY_PRIVATE
    //     )
    //     const request = mailjet.post('send', { version: 'v3.1' }).request({
    //         Messages: [
    //             {
    //                 From: {
    //                     Email: "quinn@yopmail.com",
    //                     Name: 'Me',
    //                 },
    //                 To: [
    //                     {
    //                         Email: "quinn2@yopmail.com",
    //                         Name: 'You',
    //                     },
    //                 ],
    //                 Subject: 'My first Mailjet Email!',
    //                 TextPart: 'Greetings from Mailjet!',
    //                 HTMLPart:
    //                     '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
    //             },
    //         ],
    //     })
    //     request
    //         .then(result => {
    //             console.log(result.body)
    //         })
    //         .catch(err => {
    //             console.log(err.statusCode)
    //         })
    // }
    return (
        <div className={"container-main container-main--left"}>
            <div className="one-side one-side--from-right cta-script bg-white p-8 shadow-lg border border-gray-200">
                <h2 className="text-[40px] font-extrabold uppercase text-black mb-8">
                    Request for consultation
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="contactName"
                                value={form.contactName}
                                onChange={handleChange}
                                placeholder="Name*"
                                className="w-full h-12 p-4 border border-gray-400 rounded-tr-[20px] rounded-bl-none bg-white text-gray-500 font-bold text-[18px]"
                            />
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="contactPhoneNumber"
                                value={form.contactPhoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number*"
                                className="w-full h-12 p-4 border border-gray-400 rounded-tr-[20px] rounded-bl-none bg-white text-gray-500 font-bold"
                            />
                            {errors.contactPhoneNumber && (
                                <p className="text-red-500 text-sm">{errors.contactPhoneNumber}</p>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="contactEmail"
                            value={form.contactEmail}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="w-full h-12 p-4 border border-gray-400 rounded-tr-[20px] rounded-bl-none bg-white text-gray-500 font-bold"
                        />
                        {errors.contactEmail && (
                            <p className="text-red-500 text-sm">{errors.contactEmail}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <textarea
                            name="contactRequest"
                            value={form.contactRequest}
                            onChange={handleChange}
                            placeholder="Your request"
                            className="w-full h-32 p-4 border border-gray-400 rounded-tr-[20px] rounded-bl-none bg-white text-gray-500 font-bold resize-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`w-[221px] h-12 ${isFormValid() ? 'bg-[#0068B0] text-white' : 'bg-gray-400 text-gray-200'} font-extrabold text-[25px] uppercase rounded-tr-[20px]`}
                            disabled={!isFormValid()}
                        >
                            Submit now
                        </button>
                    </div>
                </form>

                {status && <p className="mt-4 text-center text-lg font-bold">{status}</p>}
            </div>
            {/*<div className={"one-side one-side--from-right cta-script"}>*/}
            {/*    /!*<iframe data-w-type="embedded"*!/*/}
            {/*    /!*        src="https://s6w6n.mjt.lu/wgt/s6w6n/xg0l/form?c=78310dce" width="100%" height="800px"></iframe>*!/*/}
            {/*    <form className="flex max-w-md flex-col gap-4">*/}
            {/*        <div>*/}
            {/*            <div className="mb-2 block">*/}
            {/*                <Label htmlFor="email1" value="Your email" />*/}
            {/*            </div>*/}
            {/*            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <div className="mb-2 block">*/}
            {/*                <Label htmlFor="password1" value="Your password" />*/}
            {/*            </div>*/}
            {/*            <TextInput id="password1" type="password" required />*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center gap-2">*/}
            {/*            <Checkbox id="remember" />*/}
            {/*            <Label htmlFor="remember">Remember me</Label>*/}
            {/*        </div>*/}
            {/*        <Button type="submit" onClick={search}>Submit</Button>*/}
            {/*    </form>*/}

            {/*</div>*/}
        </div>
    )
}

export default CTAScript
