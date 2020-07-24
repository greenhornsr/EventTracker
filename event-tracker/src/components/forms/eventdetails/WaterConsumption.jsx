import React from 'react';
import { waterConsumptionData } from '../../../data/componentdata';

const WaterConsumption = (props) => {

    const {componentName, question, maxOptions} = waterConsumptionData

    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            [componentName] : e.target.value,
        })
    }
    
    // generate dynamic array
    const max = Array.from({length: maxOptions+1}, (_, i) => `${i} / ${i * 26} oz`)

    return (
        <>
            <label htmlFor={componentName}>{question}</label>
            <select required onChange={handleChange} name={componentName} id={componentName} value={props.eventDetails[componentName]} >
                <option value="select" defaultValue >Please Select...</option>
                {max.map(num => {
                    return <option key={num} value={num}>{num}</option> 
                })}
            </select><br/>
        </>
    )
}

export default WaterConsumption;