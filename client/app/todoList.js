"use client";
import { useEffect, useState } from "react";
import ToDoItem from "./todoItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8000/tasks");
    const data = await response.json();
    setTasks(data.tasks)
  };
  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <div>
      <ul>
        {tasks?.map((item,index)=>{
          return <ToDoItem key={index+1} task={item}/>
        })}
      </ul>
    </div>
  );
};
export default ToDoList;
