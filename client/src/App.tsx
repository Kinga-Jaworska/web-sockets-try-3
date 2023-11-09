import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { AnotherUser } from "./assets/user/AnotherUser";
import { User } from "./assets/user/User";
import "./index.css"; //
import { Manager } from "./manager/Manager";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/manager">Manager</Link>
        <Link to="/user">User</Link>
        <Link to="/another">Another</Link>

        <Routes>
          <Route path="/manager" element={<Manager />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/another" element={<AnotherUser />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
