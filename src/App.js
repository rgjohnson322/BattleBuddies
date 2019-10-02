
import React from 'react';
import './App.css';
//routing
import routes from "./routes";
//components
import Nav from "./component/Nav/Nav"
import LogNav from './component/LogNav/LogNav';
//redux
// import {connect} from "react-redux";
// import {updateUser} from "./redux/reducers/userReducer";
//axios
// import axios from "axios";

class App extends React.Component {



render () {
  return (
    <>
    <LogNav />
      {routes}
    </>
  )
}
}

export default App;
