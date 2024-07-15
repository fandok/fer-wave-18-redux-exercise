import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addText,
  increment,
  incrementByAmount,
  updateText,
} from "./redux/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const text = useSelector((state) => state.counter.text);
  const textList = useSelector((state) => state.counter.textList);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <input
          onChange={(event) => {
            dispatch(updateText(event.target.value));
          }}
          value={text}
          placeholder="input here"
        />
        <button
          onClick={() => {
            dispatch(addText(text));
            dispatch(updateText(""));
          }}
        >
          add
        </button>
      </div>
      {textList.map((text) => (
        <h2 key={text}>{text}</h2>
      ))}
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          count is {count}
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
