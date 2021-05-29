import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ModalContextProvider from "./context/Modal";
import TransactionContextProvider from "./context/Transactions";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Extract from "./pages/Extract";
import GenericNotFoundPage from "./pages/GenericNotFoundPage";
import "./App.css";

function App() {
  return (
    <TransactionContextProvider>
      <ModalContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/extract" exact component={Extract} />
            <Route path="/404" component={GenericNotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </ModalContextProvider>
    </TransactionContextProvider>
  );
}

export default App;
