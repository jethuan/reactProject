import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarBoostrap from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Newss from "./components/Page/News";
import Contact from "./components/Page/Contact";
import Details from "./components/Page/details";
import NotFoundPage from "./components/Page/NotFoundPage";
import CardDetails from "./components/Home/CardDetails";
import DetailUser from "./components/Home/CardViewDetails";

function App() {
  return (
    <div className="App">
      <NavBarBoostrap />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/products/:id" component={DetailUser} />
        <Route path="/products" component={Home} />
        <Route path="/news" componentid={Newss} />
        <Route path="/contact" component={Contact} />

        <Route path="/details" component={Details}>
          <Details />
        </Route>
        <Route path="/cardDetails" component={Details}>
          <CardDetails />
        </Route>
        <Route path="/about">
          <Details />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
