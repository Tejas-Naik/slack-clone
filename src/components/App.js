import "../App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    // BEM Naming convention
    <div className="App">
      <h1>Lets build Slack clone</h1>
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React Router -> chat screen */}
      </div>
    </div>
  );
}

export default App;
