import { Route, HashRouter as Router } from "react-router-dom";
import VideoChat from "../routes/VideoChat";

function App() {
  return (
    <>
      <h1>DM-RTC-DEMO</h1>
      <Router>
        {/* <Route path="/login">
        <Login />
      </Route> */}
        <Route path="/" exact>
          <VideoChat />
        </Route>
        {/* <Redirect from="*" to="/login"></Redirect> */}
      </Router>
    </>
  );
}

export default App;
