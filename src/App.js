import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './config/router'



 
class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <ul>
          <li><Link to="/about">Home页面</Link></li>
          <li><Link to="/next">News页面</Link></li>
          {/* <li><Link to="/product">Product页面</Link></li> */}
        </ul>

        {/* 路由配置 */}

        {
          routes.map((item,idx)=>{
            if(item.exact){
              return <Route key={idx} exact path={item.path} component={item.component}></Route>
            }else{ 
              return <Route key={idx} path={item.path} component={item.component}></Route>
            }
          })
        }
        </div>
      </Router>
    );
  }
}
 


export default App;