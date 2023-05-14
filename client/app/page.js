import AddTask from "./addTask";
import styles from "./page.module.css";
import ToDoList from "./todoList";
import Image from "next/image";
import Svg from "./../public/back.svg";

// export const url = "https://todo-backend-u5sb.onrender.com"
export const url = "http://localhost:8000";
export default function Home() {
  return (
    <div className={styles.pageBack}>
      <AddTask />
      <ToDoList />
      <Image src={Svg} alt="back" />
    </div>
  );
}
