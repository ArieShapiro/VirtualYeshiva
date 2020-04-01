import React from 'react';
import Navbar from './components/Navbar';
import HebrewDate from './components/HebrewDate';
import DateContextProvider from './contexts/DateContext';
import DatePicker from './components/DatePicker'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <DateContextProvider>
        <HebrewDate m={10} />
      </DateContextProvider>
      <Grid
        container
        direction="row"

        align="center"
      >
        <DatePicker />
      </Grid>
    </div>
  );
}

export default App;
