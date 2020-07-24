import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEventDetails, resetForm } from '../../../redux/actions';

// Dynamic Component Data
import { EventIntensityData } from '../../../data/componentdata';
import { EventHeadacheData } from '../../../data/componentdata';
import { EHeadacheDurationData } from '../../../data/componentdata';
import { waterConsumptionData } from '../../../data/componentdata';
import { physicalActivityData } from '../../../data/componentdata';

// FORM COMPONENTS
import EventIntensity from '../SelectWithOptions';
// SelectWithOptions Components
import EventHeadache from '../SelectWithOptions';
import EHeadacheDuration from '../SelectWithOptions';
import WaterConsumption from '../SelectWithOptions';
import PhysicalActivity from '../SelectWithOptions';

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
        <div className="event-details-form-container">
            <form onSubmit={handleSubmit} action="">
                <EventIntensity componentData={EventIntensityData} eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <EventHeadache componentData={EventHeadacheData} eventDetails={eventDetails} setEventDetails={setEventDetails} />
                {eventDetails.headache !== 'select' && 
                    eventDetails.headache !== 'No' && <EHeadacheDuration componentData={EHeadacheDurationData} eventDetails={eventDetails} setEventDetails={setEventDetails} />}
                <WaterConsumption componentData={waterConsumptionData} eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <PhysicalActivity componentData={physicalActivityData} eventDetails={eventDetails} setEventDetails={setEventDetails} />
                <br/><button className="edc-button">SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, {addEventDetails, resetForm})(EventDetailsContainer);