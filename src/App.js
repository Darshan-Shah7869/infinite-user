import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/Users";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authHandler = (type) => {
    setIsAuthenticated(type);
  };

  return (
    <div className="App">
      {/* Routing */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* Login / Signup */}
            <Homepage
              auth={() => {
                setIsAuthenticated(true);
              }}
            />
          </Route>

          {/* Only allow users to go to the users router if he is authenticated */}

          {isAuthenticated && (
            <Route exact path="/users">
              {/* Users */}
              <Users />
            </Route>
          )}
          <Route>
            {/* Display page not found page */}
            <h1 style={{ textAlign: "center", marginTop: "8rem" }}>
              Page not found
            </h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
