import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addOccurrence } from '../../../redux/actions';
import "./../form.css"

const EventList = (props) => {
    const [eventOccurrence, setEventOccurrence] = useState({
                                                    occurrence : 'select', 
                                                    count: 0
                                                })

    // Change handler function
    const handleChange = (e) => {
        e.preventDefault()
        setEventOccurrence({
            occurrence : e.target.value, 
            count: e.target.value === 'true' ? 
            eventOccurrence.count += 1 : 
            eventOccurrence.count = 0
        })
    }
    // ****** CHECK STATE - REMOVE BEFORE DEPLOYMENT(#CLEANUP) ******
    // console.log("State.Occurrence: ", eventOccurrence.occurrence)
    // console.log("current Count: ", eventOccurrence.count)

    // Handle Redux APP State
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addOccurrence({...eventOccurrence})
        setEventOccurrence({occurrence: 'select',
                            count: 0
                            })
    }
    
    return (
        <div>
            <section className="event-form-activatesec">
                {/* 
                    - is a progress bar the right display tool for this project?
                    - could use the progress bar to track daily events, leveraging state to track the DAY; resetting progress on date change; store daily progress in Database/app state.
                    - need to change the value to be app state value - from redux; not local state value. 
                */}
                {/* <label htmlFor="file">Daily Log: {"\u00a0 \u00a0"}</label>
                <progress id="file" value={eventOccurrence.count} max="100" /><br/> */}
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="occurrence">Did you have an event? {"\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0"} </label>
                    <select required onChange={handleChange} name="occurrence" id="occurrence" value={eventOccurrence.occurrence} >
                        <option value="select" defaultValue >Please Select...</option>
                        <option value="true">YES</option>
                        {/* <option value="false">NO</option> */}
                    </select><br/><br/>
                    <button>Submit</button>
                </form>
            </section><br/>
        </div>
    )
};

export default connect(
    null,
    { addOccurrence }
)(EventList);