import { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editingTask, editTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert('Both task name and description are required!');
      return;
    }
    const newTask = {
      id: editingTask ? editingTask.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    if (editingTask) {
      editTask(newTask);
    } else {
      addTask(newTask);
    }
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Task</button>
    </form>
  );
};

export default TaskForm;
