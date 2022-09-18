import Todo from "./Todo"


const Todolist = ({todos, filterredTodo, setTodos}) => {



  return (
   
    <div className="todo-container">
      <ul className="todo-list">
      {filterredTodo.map((todo) =>
      <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} /> 
       
       
       
       )}
      </ul>
    </div>
    
  )
}

export default Todolist