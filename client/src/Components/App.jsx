import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Event from "./Events";
import Contact from "./Contact";
import Footer from "./Footer";
const App = ()=>{
    return (
        <>
            <Navbar/>
            <Home />
            <Event />
            <Contact />
            <Footer />
        </>
    )
}

export default App;