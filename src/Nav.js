import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import addEmp from './addEmp'; 

export default class Nav extends React.Component {


render(){
    return(
    
        <Router>
        <div className="n">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/addemp'} className="nav-link">Add Employee</Link>
                </li>
              </ul>
              <hr />
            </div>
          </nav> <br />
          <Switch>
              <Route exact path='/addemp' component={ addEmp } />
          </Switch>
        </div>
      </Router>
    );
    }

}
