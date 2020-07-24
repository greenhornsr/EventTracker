import React from 'react';

const WaterConsumption = (props) => {

    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            waterconsumption : e.target.value,
        })
    }

    const max = [1,2,3,4,5,6];

    return (
        <>
            <label htmlFor="waterconsumption">How many 26(oz) WATER bottles did you drink? </label>
            <select required onChange={handleChange} name="waterconsumption" id="waterconsumption" value={props.eventDetails.waterconsumption} >
                <option value="select" defaultValue >Please Select...</option>
                {max.map(num => {
                    return <option key={num} value={num}>{num}</option> 
                })}
            </select><br/>
        </>
    )
}

export default WaterConsumption;