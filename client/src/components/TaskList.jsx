import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editId,
  editTitle,
  setEditTitle,
  startEdit,
  saveEdit,
}) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editId={editId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          startEdit={startEdit}
          saveEdit={saveEdit}
        />
      ))}
    </>
  );
}

export default TaskList;