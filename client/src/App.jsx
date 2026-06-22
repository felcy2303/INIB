import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await API.post("/tasks", { title });
      setTitle("");
      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTask = async (id) => {
  try {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  } catch (error) {
    console.error(error);
  }
};
const toggleComplete = async (task) => {
  try {
    await API.put(`/tasks/${task._id}`, {
      completed: !task.completed,
      title: task.title,
    });

    loadTasks();
  } catch (error) {
    console.error(error);
  }
};
  const startEdit = (task) => {
  setEditId(task._id);
  setEditTitle(task.title);
};

const saveEdit = async () => {
  try {
    await API.put(`/tasks/${editId}`, {
      title: editTitle,
      completed: tasks.find((t) => t._id === editId).completed,
    });

    setEditId(null);
    setEditTitle("");
    loadTasks();
  } catch (error) {
    console.error(error);
  }
};

  return (
  <div className="container py-5">

    <div className="row justify-content-center">

      <div className="col-md-8">

        <div className="card shadow">

          <div className="card-body">

            <h2 className="text-center mb-4">
              📝 MERN To-Do List
            </h2>
            <div className="row text-center mb-4">

  <div className="col">
    <div className="alert alert-primary">
      <h5>Total</h5>
      <h3>{tasks.length}</h3>
    </div>
  </div>

  <div className="col">
    <div className="alert alert-success">
      <h5>Completed</h5>
      <h3>
        {tasks.filter(task => task.completed).length}
      </h3>
    </div>
  </div>

  <div className="col">
    <div className="alert alert-warning">
      <h5>Pending</h5>
      <h3>
        {tasks.filter(task => !task.completed).length}
      </h3>
    </div>
  </div>

</div>

            <TaskForm
              title={title}
              setTitle={setTitle}
              addTask={addTask}
            />

            <hr />

            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              editId={editId}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              startEdit={startEdit}
              saveEdit={saveEdit}
            />

          </div>

        </div>

      </div>

    </div>

  </div>
);
}


export default App;