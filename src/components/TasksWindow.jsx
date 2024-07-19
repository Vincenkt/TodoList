import React, { useState } from "react";
import "./TasksWindow.css";

const TasksWindow = () => {
  const [notes, setNotes] = useState([
    {
      title: "task 1",
    },
    {
      title: "task 2",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleCreate = () => {
    if (inputValue.length === 0) {
      return;
    }

    const newNote = {
      title: inputValue,
    };
    setNotes([...notes, newNote]);
    setInputValue("");
  };

  const handleRemove = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <main className="wrap">
      <div className="container">
        <section className="box">
          <div className="inputSection">
            <input
              type="text"
              className="input boxSizing"
              placeholder="enter task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="button boxSizing" onClick={handleCreate}>
              add
            </button>
          </div>

          <ul className="list boxSizing">
            {notes.map((note, index) => (
              <li key={index} className="list-item boxSizing">
                <span>{note.title}</span>
                <span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(index)}
                  >
                    ✘
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default TasksWindow;
