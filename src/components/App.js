import Chat from "./Chat";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM Naming convention
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
          </Switch>

          {/* React Router -> chat screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
