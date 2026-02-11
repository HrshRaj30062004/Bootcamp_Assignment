
import './App.css';
import Hello from "./Q1.jsx";
import SimpleComp from './Q2.jsx';
import FunctionalComponent from './Q3_Functional.jsx';
import ClassComponent from './Q3_Class.jsx';
import Fixed from './Q4.jsx';
function App() {
  return (
    <div>
      <h3>Q1</h3>
      <Hello />

      <h3>Q2</h3>
      <SimpleComp />

      <h3>Q3 Functional</h3>
      <FunctionalComponent />

      <h3>Q3 Class</h3>
      <ClassComponent /> 

      <h3>Q4</h3>
      <Fixed />
    </div>
  );
}

export default App;
