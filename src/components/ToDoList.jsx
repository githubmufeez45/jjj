import React, { useState } from 'react';
import './ToDoList.css';
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()!== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setIsEditing(true);
    setNewTask(tasks[index].text);
    setCurrentTaskIndex(index);
  };

  const updateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[currentTaskIndex].text = newTask;
    setTasks(updatedTasks);
    setIsEditing(false);
    setNewTask('');
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i!== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {isEditing? (
          <button className="update-button" onClick={updateTask}>
            Update
          </button>
        ) : (
          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        )}
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>
            <button className="edit-button" onClick={() => editTask(index)}>
              Edit
            </button>
            <button className="remove-button" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;