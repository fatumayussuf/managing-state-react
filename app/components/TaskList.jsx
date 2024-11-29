import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, setEditingTask }) => {
  return (
    <div className="task-list mt-6">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
