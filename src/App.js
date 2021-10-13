import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/About" component={About}/>
          {/* <Link to={{ pathname: "https://drive.google.com/file/d/1lGpeR3O0KbVszHVpT06QODUfQ_2U3lMn/view?usp=sharing" }} 
target="_blank">Resume</Link> */}
          {/* <Route  path="/Resume" component={Resume}/> */}
          <Route exact path="/Contact" component={Contact}/>

        </Switch>
        
      </Router>

    </>
  );
}

export default App;
