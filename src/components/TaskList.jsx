// src/components/TaskList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, editTask } from "../features/tasks/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list-container ">
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center mb-2"
            >
              <span className="task-text flex-grow-1 me-2">{task}</span>
              <div className="d-flex">
                <button
                  onClick={() => dispatch(editTask(index))}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTask(index))}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
