import * as React from "react"
import {useTranslation} from "gatsby-plugin-react-i18next";
import {useState} from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const CTAScript = () => {
    const {t} = useTranslation();
    const [form,setForm] = useState({
        contactName:'',
        contactPhoneNumber:'',
        contactEmail:'',
        contactRequest:''
    });
    function search(formData) {
        console.log(formData);
        const mailjet = require('node-mailjet').connect(
            process.env.MJ_APIKEY_PUBLIC,
            process.env.MJ_APIKEY_PRIVATE
        )
        const request = mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: "quinn@yopmail.com",
                        Name: 'Me',
                    },
                    To: [
                        {
                            Email: "quinn2@yopmail.com",
                            Name: 'You',
                        },
                    ],
                    Subject: 'My first Mailjet Email!',
                    TextPart: 'Greetings from Mailjet!',
                    HTMLPart:
                        '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
                },
            ],
        })
        request
            .then(result => {
                console.log(result.body)
            })
            .catch(err => {
                console.log(err.statusCode)
            })
    }
    return (
        <div className={"container-main container-main--left"}>
            <div className={"one-side one-side--from-right cta-script"}>
                {/*<iframe data-w-type="embedded"*/}
                {/*        src="https://s6w6n.mjt.lu/wgt/s6w6n/xg0l/form?c=78310dce" width="100%" height="800px"></iframe>*/}
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit" onClick={search}>Submit</Button>
                </form>

            </div>
        </div>
    )
}

export default CTAScript
