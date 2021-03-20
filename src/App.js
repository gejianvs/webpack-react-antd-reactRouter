import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'


 function App(){
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
      {this.props.children}
    </div>
  )
}

export default App;