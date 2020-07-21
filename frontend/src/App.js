import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Route exact path={"/"} component={MainPage} />
            <Route path={"/product/:id"} component={ProductDetail} />
            <Route exact path={"/login"} component={Login} />
        </Router>
    </div>
  );
}

export default App;
