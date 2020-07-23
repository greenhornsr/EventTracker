import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEventDetails } from '../../../redux/actions';

// Form Components
import EventIntensity from './EventIntensity';
import EventHeadache from './EventHeadache';
import eventdetails from '../../../redux/reducers/eventdetails';

const EventDetailsContainer = (props) => {
    const [eventDetails, setEventDetails] = useState({
                                                intensity: 'select', 
                                                headache: 'select'
                                            })
    
    // Handle Redux APP State
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addEventDetails({...eventDetails})
        setEventDetails({   intensity: 'select',
                            headache: 'select'
                        })
    }
    
    // console.log("*** FORM STATE *** : ", eventDetails)

    return (
        <div className="event-details-container">
            <form onSubmit={handleSubmit} action="">
                <EventIntensity eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <EventHeadache eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <br/><button className="edc-button">SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, {addEventDetails})(EventDetailsContainer);