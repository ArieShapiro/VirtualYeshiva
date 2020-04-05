import React from 'react';
import ShiurimContextProvider from './contexts/ShiurimContext';
import DateContextProvider from './contexts/DateContext'
import Navbar from './components/Navbar';
import ShiurimList from './components/ShiurimList';
import Logo from './components/Logo';
import Box from '@material-ui/core/Box'


function App() {
  return (
    <div className="App" >
      <DateContextProvider>
        <Navbar />
        <Logo />
        <ShiurimContextProvider>
          <Box align="center">
            <ShiurimList/>
          </Box>
        </ShiurimContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;
