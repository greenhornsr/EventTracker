import React from 'react';
import './App.css';

// Component
import DailyLog from './forms/dailylog/DailyLog';
import FormContainer from './forms/FormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Tracker</h1>
      </header>
      <div className="app-container">
        <br/><DailyLog /><br/>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
