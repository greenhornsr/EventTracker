import React, {useState} from 'react'
import "./form.css"

const EventList = () => {
    const [currState, setCurrState] = useState(false)

    // const setStateHelper = () => {
        
    // }

    {console.log(currState)}
    return (
        <div>
            <p>DAMN TEST!</p>
            <section>
                <param name="ddd" value="ddd"/><br/>
                <label htmlFor="file">Downloading progress: </label>
                <progress id="file" value="52" max="100" /><br/>

                <form action="">
                    <label htmlFor="occurrance">Did you have an EVENT? {"\u00a0 \u00a0"} </label>
                    <select onChange={setCurrState(event.target.value)} required name="occurrance" id="occurrance" value={currState} >
                        <option value="select" defaultValue >Please Select...</option>
                        <option on value="true">YES</option>
                        <option value="false">NO</option>
                    </select><br/>
                    <button>Submit</button>
                </form>
                
            </section><br/>
        </div>
    )
};

export default EventList;