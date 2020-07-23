import React, { useState } from 'react';
import { connect } from 'react-redux';


const EventIntensity = (props) => {
    const [intensity, setIntensity] = useState({
                                        intensity: 'select'
                                    })

    // Change handler function
    const handleChange = (e) => {
        e.preventDefault()
        setIntensity({
            intensity : e.target.value,
        })
    }

    // Handle Redux APP State
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addOccurrence({...intensity})
        setIntensity({intensity: 'select',
                            })
    }

    return (
        <>
            <label htmlFor="intensity">How intense was the event? {"\u00a0 \u00a0"} </label>
            <select required onChange={handleChange} name="intensity" id="intensity" value={intensity.intensity} >
                <option value="select" defaultValue >Please Select...</option>
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
            </select><br/>
        </>
    )
}

export default EventIntensity;
