
function TaskForm({ title, setTitle, addTask }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
}

export default TaskForm;