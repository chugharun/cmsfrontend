import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from './Auths/Signup';
import Signin from "./Auths/Signin"
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import ActiveCase from './ActiveCase';
class App extends React.Component {

  render() {
    return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Homepage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/activeCases" element={<ActiveCase />} />

        </Routes>
      </BrowserRouter>
      </div>

    )
  }
}

export default App;
