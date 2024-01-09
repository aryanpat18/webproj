import React from 'react'
import Tilt from 'react-parallax-tilt';
import sql from "../assets/sql.png";
import HTML from "../assets/html.png";
import Python from "../assets/python.png";
import Excel from "../assets/excel.png";
import cplusplus from "../assets/cplusplus.png";
import github from "../assets/github.png";
import Matlab from "../assets/Matlab.png";
import Mongo from "../assets/mongo.png";
import Java from "../assets/java.png";
import Plotly from "../assets/plotly.png";
import Css from "../assets/css.png";
import docker from "../assets/docker.png";
import JavaScrip from "../assets/javascript.png";
import Jupyter from "../assets/jupyter-removebg-preview.png";
import PowerBI from "../assets/Power-BI-Logo.png";
import SKLearn from "../assets/scikit-learn.png";
import seaborn from "../assets/sea.png";
import streamlit from "../assets/stream.png";
import Tableau from "../assets/Tableau.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {

    const techs = [
        {
            id: 1,
            src: sql,
            title: "SQL",
            style: "shadow-[#B5D567]",
        },
        {
            id: 2,
            src: HTML,
            title: "HTML",
            style: "shadow-[#E96531]",
        },
        {
            id: 3,
            src: Python,
            title: "Python",
            style: "shadow-[#F2D75B]",
        },
        {
            id: 4,
            src: Excel,
            title: "Microsoft Excel",
            style: "shadow-[#67EAA4]",
        },
        {
            id: 5,
            src: cplusplus,
            title: "C++ Programming",
            style: "shadow-blue-300",
           
        },
        {
            id: 19,
            src: SKLearn,
            title: "Tableau",
            style: "shadow-[#B56555]"
        },
        {
            id: 16,
            src: seaborn,
            title: "Seaborn",
            style: "shadow-blue-300"
        },
        {
            id: 6,
            src: Mongo,
            title: "MongoDB",
            style: "shadow-[#60B15C]",
           
        },
        {
            id: 7,
            src: Java,
            title: "Java Programming",
            style: "shadow-[#E2454A]",
        },
        {
            id: 15,
            src: Css,
            title: "CSS",
            style: "shadow-blue-300"
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },

        {
            id: 9,
            src: Matlab,
            title: "MATLAB",
            style: "shadow-[#B56555]"
        },

        {
            id: 10,
            src: Plotly,
            title: "Plotly",
            style: "shadow-blue-300"
        },
        {
            id: 11,
            src: PowerBI,
            title: "Power BI",
            style: "shadow-[#F2D75B]"
        },
        
        {
            id: 12,
            src: docker,
            title: "Docker",
            style: "shadow-blue-300"
        },
        {
            id: 13,
            src: JavaScrip,
            title: "Java Script",
            style: "shadow-[#F2D75B]"
        },
        
        {
            id: 17,
            src: streamlit,
            title: "StreamLit",
            style: "shadow-[#E2454A]"
        },
        {
            id: 20,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-blue-300"
        },
        {
            id: 18,
            src: Tableau,
            title: "Tableau",
            style: "shadow-[#B56555]"
        },
        
        
        {
            id: 14,
            src: Jupyter,
            title: "Jupyter",
            style: "shadow-[#F2D75B]"
        },
        
    ];

    return (
        <div
            id="skills"
            className="home3 pt-15 text-white w-full min-h-screen p-10"
        >
            <div className=" inner max-w-screen-lg mx-auto p-4 flex flex-col text-black justify-center w-full h-full ">
                <div>
                    <p className="text-4xl font-bold  p-2 text-center text-white">
                        Skills
                    </p>
                    <p className="py-6 mt-2 text-white text-center"> I have worked with the following technologies</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-14 text-center py-8 px-3 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all"
                            key={id}
                            className={`shadow-xl text-white hover:scale-110 border-white border-2  bg-[$color1] cursor-pointer duration-300 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </Tilt >
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills