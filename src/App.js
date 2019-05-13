import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import May from './component/may/May.jsx';
import Fuwen from './component/drafts/Fuwen';
import Fuill from './component/quill/Fuill.jsx'
import { Link, BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="your-choice">
              <Link to='/'>上传文件</Link>
              <Link to='/draft'>draft·js</Link>
              <Link to='/quill'>quill·js</Link>
            </div>
            <Switch>
              <Route exact path="/" component={May} ></Route>
              <Route  path="/draft" component={Fuwen} ></Route>
              <Route  path="/quill" component={Fuill} ></Route>
            </Switch>
          </div>
           
        </Router>
      </div>
    );
  }
}

export default App;
