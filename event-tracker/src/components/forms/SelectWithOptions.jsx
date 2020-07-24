import React from 'react';

const SelectWithOptions = (props) => {
    // componentData is Dynamic Component Data; created/stored in componentdata.js
    // componentData property should be passed to the SelectWithOptions component
    const {componentName, question, arrOptions} = props.componentData

    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            [componentName] : e.target.value,
        })
    }

    return (
        <>
            <label htmlFor={componentName}>{question} </label>
            <select required onChange={handleChange} name={componentName} id={componentName} value={props.eventDetails[componentName]} >
                <option value="select" defaultValue >Please Select...</option>
                {arrOptions.map(el => {
                    return <option key={el} value={el}>{el}</option> 
                })}
            </select><br/>
        </>
    )
}

export default SelectWithOptions;