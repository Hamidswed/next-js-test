import styles from "./page.module.css";

const ToDoItem = ({ task }) => {
  const deleteTask = async () => {
    await fetch(`http://localhost:8000/tasks/${task.name}`, {
      method: "DELETE",
    });
  };
  return (
    <div className={styles.todoItem}>
      <p>{task.name}</p>
      <p>{task.date}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};
export default ToDoItem;
