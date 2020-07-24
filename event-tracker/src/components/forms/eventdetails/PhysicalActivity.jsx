import React from 'react';
import { physicalActivityData } from '../../../data/componentdata';

const PhysicalActivity = (props) => {

    // Destructure Declaration of imported Component Data / Info
    const {componentName, question, maxOptions} = physicalActivityData

    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            [componentName] : e.target.value
        })
    }

    // generate dynamic array
    const max = Array.from({length: maxOptions+1}, (_, i) => `${i} hours`)

    return (
        <>
            <label htmlFor={componentName}>{question} </label>
            <select required onChange={handleChange} name={componentName} id={componentName} value={props.eventDetails[componentName]} >
                <option value="select" defaultValue >Please Select...</option>
                {max.map(num => {
                    return <option key={num} value={num}>{num}</option> 
                })}
            </select><br/>
        </>
    )
}

export default PhysicalActivity;