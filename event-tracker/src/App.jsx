import React from 'react';
import './App.css';

// Component Import
import EventList from './components/form/EventList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Tracker</h1>
      </header>
      <div className="app-container">
        <EventList />
        <button>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
