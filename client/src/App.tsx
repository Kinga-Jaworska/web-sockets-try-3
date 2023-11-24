import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { CouchbaseTeam } from "./assets/teams/couchbase";
import { LearnCodingAcademyTeam } from "./assets/teams/learn-coding-academy";
import { AnotherUser } from "./assets/user/AnotherUser";
import { User } from "./assets/user/User";
import "./index.css"; //
import { Manager } from "./manager/Manager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-bar">
          <Link to="/manager">Manager</Link>
          <Link to="/user">User</Link>
          <Link to="/another">Another</Link>
          <Link to="/couchbase">Couchbase Team</Link>
          <Link to="/learnCodingAcademy">Learn Coding Academy</Link>
        </div>
        <Routes>
          <Route path="/manager" element={<Manager />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/another" element={<AnotherUser />}></Route>
          <Route path="/couchbase" element={<CouchbaseTeam />}></Route>
          <Route
            path="/learnCodingAcademy"
            element={<LearnCodingAcademyTeam />}
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
