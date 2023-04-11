import React from "react";

function About({image,about}) {
    return (
        <aside>
            <img src={image} alt="https://via.placeholder.com/215"></img>
            <p>{about}</p>
        </aside>
    )
}
export default About;