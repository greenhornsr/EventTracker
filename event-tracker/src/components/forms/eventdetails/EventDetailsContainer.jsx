import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEventDetails } from '../../../redux/actions';

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
                <br/><EventIntensity eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <br/><button>SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, {addEventDetails})(EventDetailsContainer);