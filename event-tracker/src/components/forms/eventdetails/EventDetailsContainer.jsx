import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEventDetails, resetForm } from '../../../redux/actions';

// Form Components
import EventIntensity from './EventIntensity';
import EventHeadache from './headache/EventHeadache';

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
                            headache: 'select',
                            duration: 0
                        })
        props.resetForm()
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

export default connect(null, {addEventDetails, resetForm})(EventDetailsContainer);