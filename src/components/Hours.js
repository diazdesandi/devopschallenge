import React from 'react';

// Placeholder to host a component
const Hours = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    const currentHours = new Date().getHours();

    return (
        <div>
            <h2>Hours for {daysOfWeek[currentDay]}</h2>
            <p>{currentHours} hours</p>
        </div>
    );
};

export default Hours;