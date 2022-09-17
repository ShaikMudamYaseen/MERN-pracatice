import "./styles.css";
import { useReducer } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <h3>Counter</h3>
      <h3>{state.count}</h3>

      <div>
        <button onClick={() => dispatch({ type: "inc" })}>Increase</button>

        <button onClick={() => dispatch({ type: "dec" })}>Decrease </button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
