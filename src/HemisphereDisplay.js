import React from "react";
import './hemis.css';
import NorthP from "./image/north.jpg"
import SouthP from "./image/south.jpg"


const hemisphereConfig = {

    Northern: {
        text: 'It is Northern Hemisphere',
        picture: NorthP
    },

    Southern: {
        text: 'It is Southern Hemisphere',
        picture: SouthP
    }
}

const HemisphereDisplay = ({ latitude }) => {

    /// ternary expression
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]

    return(

        <div className={hemisphere}>
            <div className="ui raised text container segment">

                <div className="image">
                    <img src={ picture } alt="hemisphere picture" />              
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{ text }</h1>
                </div>
        
            </div>
        </div>

    )
}

export default HemisphereDisplay;