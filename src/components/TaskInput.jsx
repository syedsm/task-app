import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mb-4">
      <form onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-md-12 d-flex">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task"
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-primary form-control">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
