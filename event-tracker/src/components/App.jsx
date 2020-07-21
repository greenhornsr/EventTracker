import React from 'react';
import './App.css';

// Component Import
import DailyLog from './forms/dailylog/DailyLog';
import EventList from './forms/EventOccurrence/EventList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Tracker</h1>
      </header>
      <div className="app-container">
        <br/><DailyLog />
        <br/><EventList />
      </div>
    </div>
  );
}

export default App;
