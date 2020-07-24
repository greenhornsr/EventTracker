import React from 'react';

const SelectWithOptions = (props) => {

    const {componentName, question, maxOptions} = props.componentData

    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            [componentName] : e.target.value,
        })
    }

    return (
        <>
            <label htmlFor={componentName}>{question}</label>
            <select required onChange={handleChange} name={componentName} id={componentName} value={props.eventDetails[componentName]} >
                <option value="select" defaultValue >Please Select...</option>
                {maxOptions.map(el => {
                    return <option key={el} value={el}>{el}</option> 
                })}
            </select><br/>
        </>
    )
}

export default SelectWithOptions;