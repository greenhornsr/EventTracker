import React, {useState} from 'react'
import "./form.css"

const EventList = () => {
    const [eventOccurrence, setEventOccurrence] = useState({
                                                    occurrence : '', 
                                                    count: 0
                                                })

    // Change handler function
    const handleChange = (event) => {
        event.preventDefault()
        setEventOccurrence({
            occurrence : event.target.value, 
            count: event.target.value === 'true' ? 
            eventOccurrence.count += 1 : 
            eventOccurrence.count = 0
        })
    }
    // ****** CHECK STATE - REMOVE BEFORE DEPLOYMENT(#CLEANUP) ******
    // console.log("State.Occurrence: ", eventOccurrence.occurrence)
    // console.log("current Count: ", eventOccurrence.count)

    // Update APP State
    // const setState = () => {
    //     setCurrState = 
    // }
    
    return (
        <div>
            <p>DAMN TEST!</p>
            <section>
                <param name="ddd" value="ddd"/><br/>
                <label htmlFor="file">Downloading progress: </label>
                {/* 
                    - is a progress bar the right display tool for this project?
                    - could use the progress bar to track daily events, leveraging state to track the DAY; resetting progress on date change; store daily progress in Database/app state.
                    - need to change the value to be app state value - from redux; not local state value. 
                */}
                <progress id="file" value={eventOccurrence.count} max="100" /><br/>

                <form action="">
                    <label htmlFor="occurrence">Did you have an EVENT? {"\u00a0 \u00a0"} </label>
                    <select required onChange={handleChange} name="occurrence" id="occurrence" value={eventOccurrence.occurrence} >
                        <option value="select" defaultValue >Please Select...</option>
                        <option value="true">YES</option>
                        {/* <option value="false">NO</option> */}
                    </select><br/>
                    {/* <button>Submit</button> */}
                </form>
                
            </section><br/>
        </div>
    )
};

export default EventList;