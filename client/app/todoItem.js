import styles from './page.module.css'

const ToDoItem=({task})=>{
  return (
    <div className={styles.todoItem}>
      <p>{task.name}</p>
      <p>{task.date}</p>
      <button type='button'>Delete</button>
    </div>
  )
}
export default ToDoItem