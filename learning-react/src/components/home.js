import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainContent from "./maincontent";
import SecondContent from "./secondcontent";
import Menu from "./menu";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <MainContent pageTitle={"Weight loss"} numTopics={5} />
            <SecondContent pageTitle={"Weight loss"} numTopics={5} />
            <Footer />
        </div>
    )
}

export default Home;