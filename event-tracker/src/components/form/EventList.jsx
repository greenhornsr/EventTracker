import React, {useState} from 'react'
import "./form.css"

const EventList = () => {
    const [currState, setCurrState] = useState({value : ''})

    // const setStateHelper = () => {
        
    // }

    // change handler
    const handleChange = (event) => {
        event.preventDefault()
        {console.log("TEST: ", event)}
        setCurrState({value : event.target.value})
        console.log("currState: ", event.target.value)
    }
    
    return (
        <div>
            <p>DAMN TEST!</p>
            <section>
                <param name="ddd" value="ddd"/><br/>
                <label htmlFor="file">Downloading progress: </label>
                <progress id="file" value="52" max="100" /><br/>

                <form action="">
                    <label htmlFor="occurrance">Did you have an EVENT? {"\u00a0 \u00a0"} </label>
                    <select required onChange={handleChange} name="occurrance" id="occurrance" value={currState.value} >
                        <option value="select" defaultValue >Please Select...</option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select><br/>
                    <button>Submit</button>
                </form>
                
            </section><br/>
        </div>
    )
};

export default EventList;