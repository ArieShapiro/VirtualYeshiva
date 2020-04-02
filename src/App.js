import React from 'react';
import DateContextProvider from './contexts/DateContext';
import Navbar from './components/Navbar';
import DatePanel from './components/DatePanel';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <DateContextProvider>
        <DatePanel />
      </DateContextProvider>
    </div>
  );
}

export default App;
