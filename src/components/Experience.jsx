import React from 'react'
import "../styles/experience.scss"

const Experience = () => {
    return (
        <div className='pb-24'>
            <div id='experience' >
                <p className="text-4xl font-bold pt-32 p-2 text-center text-white">
                    Work Experience
                </p>
                <p className="py-6 mt-2 text-white text-center">Here I have mentioned my work experience</p>
            </div>
            <div className="container">
            <div className="drop"><div className="content">
                    <h2>Process Analyst</h2>
                    <h3 className='font-semibold'>Teck Resources, Sparwood, BC</h3>
                    <p>Developed Python-based dashboard, integrating AI, ML for data visualization, saving $10k-$50k yearly. Improved equipment efficiency, optimized loading, reduced lab analysis time, and implemented Model Predictive Control.</p></div></div>
            
                <div className="drop">
                    <div className="content">
                        <h2>Packer</h2>
                        <h3 className='font-semibold'>Amazon Warehouse, Edmonton, AB</h3>
                        <p>Excelled in warehouse tasks, packing at double the rate, maintaining cleanliness, earning promotion for consistent high performance.</p>
                    </div>
                </div>
                <div className="drop" ><div className="content">
                    <h2>Dispatcher</h2>
                    <h3 className='font-semibold'>Crown Cab, North Battleford, SK</h3>
                    <p>Managed call records, led company operations, secured contracts, hired/trained drivers, addressed concerns, ensuring smooth operations and customer satisfaction.</p></div></div>
                </div>
        </div>
    )
}

export default Experience;