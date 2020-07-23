import React from 'react';
import eventdetails from '../../../redux/reducers/eventdetails';

const EventHeadache = (props) => {
    // Change handler function
    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            headache : e.target.value,
        })
    }

    return (
        <>
            <label htmlFor="intensity">Headache?  If YES, select severity.{"\u00a0 \u00a0"} </label>
            <select required onChange={handleChange} name="intensity" id="intensity" value={props.eventDetails.headache} >
                <option value="select" defaultValue >Please Select...</option>
                <option value="Light">Light</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
                <option value="No">No</option>
            </select><br/>
        </>
    )
}

export default EventHeadache;
