import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addOccurrence } from '../../../redux/actions';
import "./../form.css"

const EventList = () => {
    const [eventOccurrence, setEventOccurrence] = useState({
                                                    occurrence : 'select', 
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
        addOccurrence(eventOccurrence.count)
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
            <section className="event-form-activatesec">
                <param name="ddd" value="ddd"/><br/>
                {/* 
                    - is a progress bar the right display tool for this project?
                    - could use the progress bar to track daily events, leveraging state to track the DAY; resetting progress on date change; store daily progress in Database/app state.
                    - need to change the value to be app state value - from redux; not local state value. 
                */}
                {/* <label htmlFor="file">Daily Log: {"\u00a0 \u00a0"}</label>
                <progress id="file" value={eventOccurrence.count} max="100" /><br/> */}
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

const mapStateToProps = state => ({
    ...state
})

export default connect(
    mapStateToProps, 
    { addOccurrence }
)(EventList);