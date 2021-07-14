import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import Header from "./components/nav/Header";
import App from "./home";
import ProfilePage from "./profile-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <main>
            <Route exact path="/" component={App} />
            <Route exact path="/profile-page" component={ProfilePage} />
          </main>
        </div>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
