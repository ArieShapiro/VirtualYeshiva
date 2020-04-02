import React from 'react';
import ShiurimContextProvider from './contexts/ShiurimContext';
import DateContextProvider from './contexts/DateContext'
import Navbar from './components/Navbar';
import ShiurimList from './components/ShiurimList';
import Logo from './components/Logo';
import MaterialUiList from './components/MaterialUiList'

function App() {
  return (
    <div className="App" >
      <DateContextProvider>
        <Navbar />
        <Logo />
        <ShiurimContextProvider>
          <ShiurimList />
        </ShiurimContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;
