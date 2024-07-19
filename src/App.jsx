import { useState } from "react";
import "./App.css";
import TasksWindow from "./components/TasksWindow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TasksWindow />
    </>
  );
}

export default App;
