import logo from "./logo.svg";
import "./App.css";
import ChildA from "./components/childA";
import ChildC from "./components/childC";
import { ContexProvider } from "./components/contex";
function App() {
  return (
    <ContexProvider>
      <div className="App">
        <p>Child A data:</p>
        <ChildA />
        <p>From context to child C: </p>

        <ChildC />
      </div>
    </ContexProvider>
  );
}

export default App;
