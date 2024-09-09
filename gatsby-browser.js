// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.scss"
// custom CSS styles
import './src/styles/global.scss'

// Highlighting for code blocks
import "prismjs/themes/prism.css"

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

