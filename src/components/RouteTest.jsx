import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './Routes/About';
import Home from './Routes/Home';
import Users from './Routes/Users';
import './../Styles/Style.scss';


export class RouteTest extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul className="no-bullet-points">
                            <li>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouteTest
