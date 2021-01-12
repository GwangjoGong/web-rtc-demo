import { Route, HashRouter as Router, Redirect } from "react-router-dom";
import Lobby from "../routes/Lobby";
import Login from "../routes/Login";
import Room from "../routes/Room";

function App() {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/lobby">
        <Lobby />
      </Route>
      <Route path="/room/:id">
        <Room />
      </Route>
      <Redirect from="*" to="/login"></Redirect>
    </Router>
  );
}

export default App;
