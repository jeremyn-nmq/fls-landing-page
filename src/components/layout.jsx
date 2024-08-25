import * as React from "react"
import '../styles/global.scss';
import Footer from "./Footer/Footer";
import Faqs from "./FAQS/Faqs";
import TransportRoutes from "./TransportRoutes/TransportRoutes";
import Services from "./Services/Services";
import Safety from "./Safety/Safety";
import WhyUs from "./WhyUs/WhyUs";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import BackToTopButton from "./BackToTop/BackToTopButton";

const Layout = () => {
    return (
        <div className={"flex flex-col gap-[80px]"}>
            <Header/>
            <main className={"flex flex-col gap-[80px]"}>
                <Banner/>
                <TransportRoutes/>
                <Services/>
                <Safety/>
                <WhyUs/>
                <Faqs/>
            </main>
            <Footer/>
            <BackToTopButton/>
        </div>
    )
}

export default Layout
