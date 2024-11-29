const TaskItem = ({ task, toggleTaskCompletion, deleteTask, setEditingTask }) => {
    return (
      <div className={`task-item flex items-center justify-between p-4 mb-2 rounded-lg shadow-md ${task.completed ? 'bg-green-100' : 'bg-black'}`}>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)} 
            className="mr-4"
          />
          <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => setEditingTask(task)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    );
  };
  
  export default TaskItem;
  