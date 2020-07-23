import React, { useState } from 'react';


// Form Components
import EventIntensity from './EventIntensity';

const EventDetailsContainer = (props) => {
    const [eventDetails, setEventDetails] = useState({
                                                intensity: 'select'
                                            })
    
    // Handle Redux APP State
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addEventDetails({...eventDetails})
        setEventDetails({intensity: 'select',
                            })
    }
    
    return (
        <div className="event-details-container">
            <form onSubmit={handleSubmit} action="">
                <EventIntensity />
            </form>
        </div>
    )
}

export default EventDetailsContainer;