import * as React from "react"
import '../styles/global.scss';
import Footer from "./Footer/Footer";
import Faqs from "./FAQS/Faqs";
import TransportRoutes from "./TransportRoutes/TransportRoutes";
import Services from "./Services/Services";
import Slogan from "./Slogan/Slogan";
import Safety from "./Safety/Safety";
import WhyUs from "./WhyUs/WhyUs";
import Strip from "./Strip/Strip";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import CTA from "./CTA/CTA";

import {TRANSPORT_ROUTES} from '../utils/data'
import CTAScript from "./CTAScript/CTAScript";

const Layout = () => {
    return (
        <div className={"flex flex-col"}>
            <Header/>
            <main className={"flex flex-col relative"}>
                <Banner/>
                <TransportRoutes transportRoutes={TRANSPORT_ROUTES}/>
                <Services/>
                <Slogan/>
                <Safety/>
                <WhyUs/>
                <Strip/>
                <Faqs/>
                <CTAScript/>
                <CTA/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
