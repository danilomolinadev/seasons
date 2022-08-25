import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer: {
        text: 'Let\'s hit to the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
       return  lat > 0 ? 'summer' : 'winter';
    } else{
        return  lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    //console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    
    //console.log(season);

    /** one way to do it... very long replace with seasonConfig 
    const text = season === 'winter' ? 'Burr is chilly' : 'Lets hit to the beach';
    const icon = season === 'winter' ? 'snowflake' : 'sun';*/


    return(
    <div className={`season-display ${season}`}> 
       <i className={`icon-left massive ${iconName} icon`} ></i>    
       <h1>{text}</h1>
       <i className={`icon-right massive ${iconName} icon`} ></i> 
    </div>
    )
};

export default SeasonDisplay;