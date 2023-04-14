import React from 'react';

export default function About() {
    
    return(
        <React.Fragment>
        <h1 className="titleSecond">About</h1>
        <h3>Created using React.js as a solo project during the 2022 Midwest Hackathon</h3>
        <h1 className="titleSecond">Functionality</h1>
        <h3>Doughboy: Provide future dates for perishable products</h3>
        <h3>Converter: Table for converting ounces to pounds</h3>
        <h1 className="titleSecond">Future Work</h1>
        <h3>DoughBoy table will provide a list of products relative to the shelf life</h3>
        <h3>Example: Clicking on "5 days out" will provide a list of products that have a 5 day shelf life </h3>
        <h1 className="titleSecond">Contact</h1>
        <h3 class="tooltip">Hover for info
        <span class="tooltiptext">
            JakeBees@gmail.com
        </span>
        </h3>
        </React.Fragment>
    );
}