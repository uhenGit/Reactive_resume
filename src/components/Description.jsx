import React from 'react';

const Description = (data) => {
    //console.log(ol);
    
    return (
        <div className='about wrap'>
            <h2>Description component</h2>
            <h3>Education</h3>
            {data.education.map((item, index)=>{return(<section className='flex' key={index}>    
                <article>
                    <hr/>
                    <h3>{item.school}</h3>
                    <h4>{item.degree}</h4>
                    <h4>{item.graduated}</h4>
                    <p>{item.description}</p>
                </article>
                <br/>
            </section> )})}
            <br/>
            <hr/>
            <br/>
            <h3>Work Experience</h3>
            {data.work.map((item, index)=>{return(<section className='flex' key={index}>    
                <article>
                    <hr/>
                    <h3>{item.company}</h3>
                    <h4>{item.title}</h4>
                    <h4>{item.years}</h4>
                    <p>{item.description}</p>
                </article>
                <br/>
            </section> )})}
        </div>
    )
}

export default Description
