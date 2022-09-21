import React from 'react';
import PriceLogo from '../assets/USC_Price_School_logo.webp'
import ViterbiLogo from '../assets/USC_Viterbi_School_of_Engineering_logo.svg.png'
import './Logos.css';

function Logos() {

    return (
        <div className={"logoHolder"}>
            <img className={"priceLogo"} src = {PriceLogo} />
            <img className={"viterbiLogo"} src={ViterbiLogo} />
        </div>
    )
}

export default Logos;