import React from 'react'
import vg from "../assets/2.png"

const About = () => {
    return (
        <div className="home2" id='about' >

            <img src={vg} alt="Graphics" />
            
            <div>
                <h1 >About me 😃</h1>
                <br></br>
                <p>
                👋 Hey, I'm Aryan Patel, currently in my fourth year of Computer Engineering at the University of Alberta. Recent updates in my journey include a rewarding internship at Teck Resources as a Process Analyst, where I delved into process optimization. Now, my academic focus revolves around data analysis and science, machine learning, and cyber security. I'm passionate about extracting insights from complex datasets, exploring the potential of machine learning, and contributing to the ever-evolving landscape of cybersecurity. Graduating in April 2025, I'm excited about the intersection of technology and problem-solving and committed to making a positive impact in these dynamic fields.
                </p>
                <br></br>
                <br></br>
                <p>
                🌐 Feel free to access my resume located on the homepage for a comprehensive overview of my qualifications. Should you require additional details or wish to discuss further, I'm more than happy to provide any necessary information to enhance your understanding of my professional journey. Looking forward to connecting with you!.
                </p>
            </div>
        </div>
    )
}

export default About