import styles from "./page.module.css";
import { url } from "./page";

const ToDoItem = ({ task }) => {
  const deleteTask = async () => {
    await fetch(`${url}/tasks/${task.name}`, {
      method: "DELETE",
    });
  };

  const checkboxHandler = async (e) => {
    const updatedTask = { ...task, isDone: e.target.checked };
    await fetch(`${url}/tasks/${task.name}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
  };

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        onChange={checkboxHandler}
        checked={task.isDone ? true : false}
      />
      <p className={task.isDone ? styles.todoItemDone : null}>{task.name}</p>
      <p>{task.date}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};
export default ToDoItem;
