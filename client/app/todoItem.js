const ToDoItem=({task})=>{
  return (
    <li>Name: {task.name} -- Date: {task.date}</li>
  )
}
export default ToDoItem