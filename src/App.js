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
  // useHistory
} from "react-router-dom"
import './index.css'
// import { browserHistory } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'




function App() {
  // history.push("/")
  // browserHistory.push('/')
  // const history = useHistory()
  // history.push("/")

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

