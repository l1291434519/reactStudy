import React from 'react';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

const ACTIVE = { color: 'red' }

class App extends React.Component {
   render() {
      return (
         <div>
                <h1>我的路由demo</h1>
                <ul>
                    <li><Link to="/" activeStyle={ACTIVE}>首页</Link></li>
                    <li><Link to="/users" activeStyle={ACTIVE}>用户页</Link></li>
                </ul>
                {this.props.children}
            </div>
      );
   }
}




export default App;