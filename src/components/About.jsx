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
            <hr/>
            <br/>
            <h3>Skills Level</h3>
            <section className='flex skills'>
            {data.skills.map((item, index)=>{return(<div key={index}>
                    <label htmlFor={item.name + "skill"}>
                        {item.name}
                        <progress className='skill' name={item.name + "skill"} max='100' value={item.level}></progress>
                    </label>    
                <br/>
            </div> )})}
            </section>   
        </div>
    )
}

export default About
