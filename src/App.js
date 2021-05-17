import { Route, Switch } from "react-router";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
