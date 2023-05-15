"use client";
import { useEffect, useState } from "react";
import ToDoItem from "./todoItem";
import styles from "./page.module.css";

const ToDoList = ({tasks,fetchTasks}) => {

  return (
    <div>
      {tasks?.length === 0 && <p className={styles.ptag}>Please add a task!</p>}
      <div className={styles.todoList}>
        {tasks?.map((item, index) => {
          return <ToDoItem key={index + 1} task={item} fetchTasks={fetchTasks}/>;
        })}
      </div>
    </div>
  );
};
export default ToDoList;
