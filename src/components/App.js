import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import Landing from "../routes/Landing";
import VideoChat from "../routes/VideoChat";

const isLoggedIn = window.localStorage.getItem("uid");

function App() {
  return <Router>{isLoggedIn ? <LoggedInRoute /> : <LoggedOutRoute />}</Router>;
}

const LoggedOutRoute = () => (
  <Switch>
    <Route path="/" exact>
      <Landing></Landing>
    </Route>
    <Redirect to="/" />
  </Switch>
);

const LoggedInRoute = () => (
  <Switch>
    <Route path="/" exact>
      <VideoChat />
    </Route>
  </Switch>
);

export default App;
