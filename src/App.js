import React from 'react';
import ShiurimContextProvider from './contexts/ShiurimContext';
import DateContextProvider from './contexts/DateContext'
import Navbar from './components/Navbar';
import ShiurimList from './components/ShiurimList';
import Logo from './components/Logo';
import Box from '@material-ui/core/Box'
import Footer from './components/Footer'
import HaoresList from './components/HaoresList'
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom"
import './index.css'
import DailyShiurim from './components/DailyShiurim'
import WhatsappGroup from './components/WhatsappGroup'
import EndOfShema from './components/EndOfShema'
import Contact from './components/Contact'
import Chat from './components/Chat'
import Donate from './components/Donate'
import Language from './components/Language'

function App() {
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
                <Route path="/daily-shiurim" component={DailyShiurim} />
                <Route path="/whatsapp-group" component={WhatsappGroup} />
                <Route path="/end-of-shema" component={EndOfShema} />
                <Route path="/contact" component={Contact} />
                <Route path="/chat" component={Chat} />
                <Route path="/donate" component={Donate} />
                <Route path="/language" component={Language} />
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

