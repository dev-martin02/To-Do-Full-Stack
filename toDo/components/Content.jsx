import { useState } from "react";

export default function Content({ name }) {
  const [task, setTask] = useState([]);
  const [userTask, setUserTask] = useState("");

  const inputValue = (e) => {
    setUserTask(e.target.value);
  };

  const setValue = () => {
    setTask((prevTask) => [...prevTask, userTask]);
    setUserTask("");
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <input
        type="text"
        placeholder="Write your To-Do"
        value={userTask}
        onChange={inputValue}
      />
      <button onClick={setValue}>Add</button>
      {task.map((newTask, index) => (
        <div key={index}>
          <ul>
            <li>{newTask}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
