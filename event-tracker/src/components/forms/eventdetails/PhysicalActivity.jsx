import React from 'react';

// Reusuable set up...I've been doing this wrong...One file per form drop down.  :(
const PhysicalActivity = (props) => {
    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            [props.compName] : e.target.value
        })
    }

    // generate dynamic array
    const max = Array.from({length: Number(props.maxOptions)+1}, (_, index) => index)

    return (
        <>
            <label htmlFor={props.compName}>Hours of Physical Activity? </label>
            <select required onChange={handleChange} name={props.compName} id={props.compName} value={props.eventDetails[props.compName]} >
                <option value="select" defaultValue >Please Select...</option>
                {max.map(num => {
                    return <option key={num} value={num}>{num} hours</option> 
                })}
            </select><br/>
        </>
    )
}

export default PhysicalActivity;