import React from "react";
import Header from "../components/Header";
import Parallaxhome from "../components/Parallaxhome";
import About from "../components/About";

const Home = () => {
    return (
        <div>
            <Header />
            <Parallaxhome />

            
            {/* Rest of your page content */}
            <About />
        </div>
    );
};

export default Home;