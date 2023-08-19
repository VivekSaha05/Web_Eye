import React from "react";
import AboutCard from "./AboutCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
function About() {

    return (
        <>
            <Navbar />
            <section class="bg-white dark:bg-gray-700">
                <div class="container px-6 py-8 mx-auto">
                    <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

                    <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <AboutCard
                            image="https://i.imgur.com/QXXHg7B.jpg"
                            name="Ankit Choudhary"
                            desc="Lead || Back-End Developer"
                        />
                        <AboutCard
                            image="https://i.imgur.com/mCmGNCo.jpg"
                            name="Sushant Kumar Bishoi"
                            desc="Lead || MERN Stack Developer"
                        />
                        <AboutCard
                            image="https://i.imgur.com/6QtS2vS.jpg"
                            name="Aditi Bisoi"
                            desc="Technical || Front-End Developer"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/BdYM6pn.jpg"
                            name="Vivek Saha"
                            desc="Technical || MERN Developer"
                        />
                        <AboutCard 
                            image=""
                            name="Namish Kumar Sahu"
                            desc="Technical || Back-End Developer"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/7m2IgAk.jpg"
                            name="Satyam Mohanty"
                            desc="Technical || Front-End Developer"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/cnGchIH.jpg"
                            name="Shashwat Tripathy"
                            desc="Technical || Front-End Developer"
                        />

                        <AboutCard 
                            image="https://i.imgur.com/U0WAkPP.jpg"
                            name="S Kartik"
                            desc="Lead || Management"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/bGk3xFF.jpg"
                            name="T Reshma"
                            desc="Content || Management"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/Z1ITKnz.jpg"
                            name="Deeptimayee Adhikari"
                            desc="Content || Management"
                        />
                        <AboutCard 
                            image='https://i.imgur.com/ODnyk8v.jpg'
                            name="Sreehita Ramesh Deverasetii"
                            desc="Content || Management"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/q8fU5fF.jpg"
                            name="B Akash"
                            desc="Content || Management"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/E7zzhXI.jpg"
                            name="Ruturaj Maharana"
                            desc="Poster || Management"
                        />
                        <AboutCard 
                            image="https://i.imgur.com/wp2s2pg.jpg"
                            name="Debasis Mohapatra"
                            desc="Poster || Management"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;