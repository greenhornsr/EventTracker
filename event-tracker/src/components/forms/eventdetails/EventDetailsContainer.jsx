import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEventDetails, resetForm } from '../../../redux/actions';
import { waterConsumptionData } from '../../../data/componentdata';
import { physicalActivityData } from '../../../data/componentdata';

// Form Components
import EventIntensity from './EventIntensity';
import EventHeadache from './headache/EventHeadache';
import WaterConsumption from '../../SelectWithOptions';
import PhysicalActivity from '../../SelectWithOptions';

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
        setEventDetails({   
                            intensity: 'select',
                            headache: 'select',
                            duration: 'select',
                            waterconsumption: 'select',
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
                {/* WaterConsumption is rendered with Dynamic reusability in mind.  However, considering the way I am adding measurements to the rendered options content, More work would need done to make this truly reusable. */}
                <WaterConsumption componentData={waterConsumptionData} eventDetails={eventDetails} setEventDetails={setEventDetails} />
                {/* PhysicalActivity Component is First Rendered REUSABLE COMPONENT! */}
                <PhysicalActivity componentData={physicalActivityData} eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <br/><button className="edc-button">SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, {addEventDetails, resetForm})(EventDetailsContainer);