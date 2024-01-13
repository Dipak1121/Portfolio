import React from "react";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Section from "./Components/Section.js";
import sectionData from "./Data/sectionData.js";
const App = ()=>{
    return (
        <div>
            <Navbar />

            <About />

            {/* <Section 
            title="Skills" 
            description= "A versatile and seasoned Full Stack Developer with over 5 years of comprehensive experience in software development. Proficient in MERN (MongoDB, Express. js, React.js, Node js) Stack and equipped with knowledge of Python Django and Ruby on Rails. Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Additionally skilled in artificial intelligence and machine learning, reflecting a broad understanding of current and emerging technologies. Known for writing clean, maintainable code and ability to design, develop, and deploy complex web applications. Excels in dynamic, high-pressure environments, leveraging a solution-oriented mindset and team collaboration. Strives to create user-centric solutions that drive efficiency and improve the overall user "
            />
            
            <Section 
            title="Dipak" 
            description="Dipak" 
            />

            <Section 
            title="Dipak" 
            description="Dipak" 
            /> */}

            {
                sectionData.map((item, index)=>(
                    <Section key={index}
                    title={item.title} 
                    description={item.description} />
                ))
            }

        </div>
    );
}

export default App