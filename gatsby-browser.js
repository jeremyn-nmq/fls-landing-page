// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.scss"
// custom CSS styles
import './src/styles/global.scss'

// Highlighting for code blocks
import "prismjs/themes/prism.css"
const $ = require('jquery')
export const onInitialClientRender = () => {
    $('form .submitBtn').click(function(){

    })
}

// export const sendEmail = () => {
//     /**
//      *
//      * Run:
//      *
//      */
//     const mailjet = require('node-mailjet').connect(
//         process.env.MJ_APIKEY_PUBLIC,
//         process.env.MJ_APIKEY_PRIVATE
//     )
//     const request = mailjet.post('send', { version: 'v3.1' }).request({
//         Messages: [
//             {
//                 From: {
//                     Email: SENDER_EMAIL,
//                     Name: 'Me',
//                 },
//                 To: [
//                     {
//                         Email: RECIPIENT_EMAIL,
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

export const onClientEntry = () => {
    const userLanguage = localStorage.getItem('gatsby-i18next-language') || 'eng';
    const currentLocation = window.location.pathname;

    if (userLanguage === 'vie' && !currentLocation.startsWith('/vie')) {
        window.location.replace('/vie');
    }
    if (userLanguage === 'eng' && currentLocation !== '/') {
        window.location.replace('/');
    }
}

