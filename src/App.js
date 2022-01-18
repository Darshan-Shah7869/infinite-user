import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
