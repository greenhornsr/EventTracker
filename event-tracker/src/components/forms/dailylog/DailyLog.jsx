import React from 'react';
import "./../form.css"


const DailyLog = () => {
    return (
        <section className="event-form-dailylogsec">
            {/* 
                - is a progress bar the right display tool for this project?
                - could use the progress bar to track daily events, leveraging state to track the DAY; resetting progress on date change; store daily progress in Database/app state.
                - need to change the value to be app state value - from redux; not local state value. 
            */}
            <label htmlFor="file">Daily Log: {"\u00a0 \u00a0"}</label>
            <progress id="file" value="52" max="100" /><br/>
        </section>
    )
};

export default DailyLog;