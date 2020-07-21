import React from 'react';
import { connect } from 'react-redux';
import './App.css';

// Component Import
import DailyLog from './forms/dailylog/DailyLog';
import EventList from './forms/EventOccurrence/EventList';
import ErrorDisplay from './errors/ErrorDisplay';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Tracker</h1>
      </header>
      <div className="app-container">
        <br/><DailyLog />
        {!props.error ? <><br/><EventList /></> : <><br/><ErrorDisplay /></>}
      </div>
    </div>
  );
}

const mapStateToProps = ({error}) => ({
    error: error
})

export default connect(mapStateToProps)(App);
