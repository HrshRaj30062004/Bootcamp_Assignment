import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Q1Counter from './components/Q1';
import Q2ControlCounter from './components/Q2';
import Q3Message from './components/Q3_Parent';
import Q4Todo from "./components/Q4";
import Q5Pages from './components/Q5';
function App() {
  return (
    <div>
      <div className="header">
        <h1 className="title">React Assignment</h1>
        <nav class="navbar">
          <Link to="/components/Q1">Q1Counter</Link>
          <Link to="/components/Q2">Q2Counter</Link>
          <Link to="/components/Q3_Parent">Q3Message</Link>
          <Link to="./components/Q4">Q4Todo</Link>
          <Link to="/components/Q5">Q5Pages</Link>
        </nav>
      </div>

      <div className="pages">
        <Routes>
          <Route path="/components/Q1" element={<Q1Counter />} />
          <Route path="/components/Q2" element={<Q2ControlCounter />} />
          <Route path="/components/Q3_Parent" element={<Q3Message />} />
          <Route path="/components/Q4" element={<Q4Todo />} />
          <Route path="/components/Q5" element={<Q5Pages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
