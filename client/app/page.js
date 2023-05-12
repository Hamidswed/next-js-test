import AddTask from "./addTask";
import styles from "./page.module.css";
import ToDoList from "./todoList";

export default function Home() {
  return (
    <div>
      <AddTask />
      <ToDoList />
    </div>
  );
}
