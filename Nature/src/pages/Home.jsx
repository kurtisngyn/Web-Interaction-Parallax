import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
    return (
        <div className=" border-2 border-black p-4">
        
                <Header />
                <Hero />
                {/* <About /> */}
            
        </div>
    );
};


export default Home;