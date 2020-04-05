import React from 'react';
import ShiurimContextProvider from './contexts/ShiurimContext';
import DateContextProvider from './contexts/DateContext'
import Navbar from './components/Navbar';
import ShiurimList from './components/ShiurimList';
import Logo from './components/Logo';
import Box from '@material-ui/core/Box'
import Footer from './components/Footer'
import HaoresList from './components/HaoresList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import './index.css'

function App() {
//  console.log(window.location.pathname)
  return (
    <div className="App" style={{ position: 'relative', height: '100vh' }}>
      <DateContextProvider>
        <ShiurimContextProvider>
          <Router>
            <Navbar />
            <Logo />
            <Box align="center">
              <Switch>
                <Route exact path="/" component={ShiurimList} />
                <Route path="/haores" component={HaoresList} />
                <Route path="/daily-shiurim" component={HaoresList} />
                <Route path="/whatsapp-group" component={HaoresList} />
                <Route path="/end-of-shema" component={HaoresList} />
                <Route path="/contact" component={HaoresList} />
                <Route path="/chat" component={HaoresList} />
                <Route path="/donate" component={HaoresList} />
                <Route path="/language" component={HaoresList} />
              </Switch>
            </Box>
            <Footer />
          </Router>
        </ShiurimContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;

