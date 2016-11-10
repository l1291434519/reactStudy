import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './App.jsx';
import Index from './pages/Index.jsx';
import Users from './pages/Users.jsx';

//import { App, Index, Users} from './App.jsx'









ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="users" component={Users}></Route>
        </Route>
    </Router>
), document.getElementById('app'))