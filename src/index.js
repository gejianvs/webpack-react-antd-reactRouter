import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
// import routes from './config/router'
import App from './App.js'

ReactDom.render(<App />, document.getElementById('root'));







// import React, { PureComponent } from 'react'
// import { Router, Route, Link, browserHistory } from 'react-router'
// import ReactDom from 'react-dom';

// class App extends PureComponent {
//   constructor(){
//     super(...arguments)
//   }
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// class About extends PureComponent {
//   constructor(){
//     super(...arguments)
//   }
//   render() {
//     return <h3>About</h3>
//   }
// }

// class Inbox extends PureComponent {
//   constructor(){
//     super(...arguments)
//   }
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// }

// class Message extends PureComponent {
//   constructor(){
//     super(...arguments)
//   }
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// }

// ReactDom.render(
//   <Router history={browserHistory} >
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>, document.getElementById('root'))
