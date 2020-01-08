import React from 'react'

const About = (data) => {    
    console.log("data from About", data);
    return (
        <div className='about wrap'>
            <h2>About component</h2>
            <section className='flex'>
                <img src={"img/"+data.image} alt="profile"/>
                <article>{data.bio}</article>
            </section>        
        </div>
    )
}

export default About
