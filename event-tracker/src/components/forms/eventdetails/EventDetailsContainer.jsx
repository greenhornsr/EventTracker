import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEventDetails, resetForm } from '../../../redux/actions';

// Form Components
import EventIntensity from './EventIntensity';
import EventHeadache from './headache/EventHeadache';
import WaterConsumption from './WaterConsumption';
import PhysicalActivity from './PhysicalActivity';

const EventDetailsContainer = (props) => {
    const [eventDetails, setEventDetails] = useState({
                                                intensity: 'select', 
                                                headache: 'select',
                                                duration: 0,
                                                waterconsumption: 0,
                                                physicalactivity: 'select'
                                            })
    
    // Handle Redux APP State
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addEventDetails({...eventDetails})
        setEventDetails({   intensity: 'select',
                            headache: 'select',
                            duration: 0,
                            waterconsumption: 0,
                            physicalactivity: 'select'
                        })
        props.resetForm()
    }
    
    // console.log("*** FORM STATE *** : ", eventDetails)

    return (
        <div className="event-details-container">
            <form onSubmit={handleSubmit} action="">
                <EventIntensity eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <EventHeadache eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <WaterConsumption eventDetails={eventDetails} setEventDetails={setEventDetails} />
                {/* PhysicalActivity Component is First Rendered REUSABLE COMPONENT! */}
                <PhysicalActivity compName='physactivity' maxOptions='5' eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <br/><button className="edc-button">SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, {addEventDetails, resetForm})(EventDetailsContainer);