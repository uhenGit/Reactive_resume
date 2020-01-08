import React from 'react'

const Description = (data) => {
    console.log(data.education);
    
    return (
        <div className='about wrap'>
            <h2>Description component</h2>
            {data.education.map((item, index)=>{return(<section className='flex' key={index}>
                <h3>Education</h3>
                <article>
                    <h4>{item.school}</h4>
                    <h5>{item.degree}</h5>
                    <h6>{item.graduated}</h6>
                    <p>{item.description}</p>
                </article>
            </section> )})}
        </div>
    )
}

export default Description
