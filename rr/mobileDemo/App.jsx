import React from 'react';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import "./js/mobile.js";
import './css/h5reset.css';//导入
import {appContent} from './css/mobile.css';//导入

const ACTIVE = { color: 'red' }

class App extends React.Component {
   render() {
      return (
         <div>
                <p>我的 mobile demo</p>
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