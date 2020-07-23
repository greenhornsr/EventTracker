import React from 'react';
import eventdetails from '../../../redux/reducers/eventdetails';

const EventIntensity = (props) => {
    // Change handler function
    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            intensity : e.target.value,
        })
    }
    return (
        <>
            <label htmlFor="intensity">How intense was the event? {"\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0"} </label>
            <select required onChange={handleChange} name="intensity" id="intensity" value={props.eventDetails.intensity} >
                <option value="select" defaultValue >Please Select...</option>
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
            </select><br/>
        </>
    )
}

export default EventIntensity;
