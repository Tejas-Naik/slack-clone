import React, { useState } from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import "../App.css";
import Chat from "./Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
function App() {
  const [user, setUser] = useState(null);

  return (
    // BEM Naming convention
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
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
          </>
        )}

      </Router>
    </div>
  );
}

export default App;
