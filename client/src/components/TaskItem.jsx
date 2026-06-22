import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  editId,
  editTitle,
  setEditTitle,
  startEdit,
  saveEdit,
}) {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task)}
            className="form-check-input me-3"
          />

          {editId === task._id ? (
            <input
              className="form-control"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          ) : (
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
          )}

        </div>

        <div>

          {editId === task._id ? (
            <button
              className="btn btn-success btn-sm me-2"
              onClick={saveEdit}
            >
              <FaSave />
            </button>
          ) : (
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => startEdit(task)}
            >
              <FaEdit />
            </button>
          )}

          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteTask(task._id)}
          >
            <FaTrash />
          </button>

        </div>

      </div>
    </div>
  );
}

export default TaskItem;