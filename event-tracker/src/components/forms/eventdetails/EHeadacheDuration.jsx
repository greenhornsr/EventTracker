import React from 'react';

const EHeadacheDuration = (props) => {
    // Change handler function
    const handleChange = (e) => {
        e.preventDefault()
        props.setEventDetails({
            ...props.eventDetails,
            duration : e.target.value
        })
    }

    const max = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
            <label htmlFor="intensity">Headache Duration(in minutes)? {"\u00a0 \u00a0"} </label>
            <select required onChange={handleChange} name="intensity" id="intensity" value={props.eventDetails.duration} >
                <option value="select" defaultValue >Please Select...</option>
                {max.map(num => {
                    return <option key={num} value={num}>{num}</option> 
                })}
            </select><br/>
        </>
    )
}

export default EHeadacheDuration;
