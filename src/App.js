import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Form from "./Todoapp/Form";
import Todolist from "./Todoapp/Todolist";


function App() {

  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState('All');
  const [filterredTodo, setFilterredTodo] = useState([]);

  
 const innerTodos = localStorage.getItem('todos')
 ? JSON.parse(localStorage.getItem('todos')) : [];

 
  const [todos, setTodos] = useState(innerTodos);


  useEffect(() => {
   

    const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterredTodo(todos.filter(todo => todo.completed === true))
        break;

        case 'uncompleted':
        setFilterredTodo(todos.filter(todo => todo.completed === false))
         break;
    
      default:
        setFilterredTodo(todos);
        break;
    }
  };

   filterHandler();



    localStorage.setItem("todos", JSON.stringify(todos));
  
   
  }, [todos, status]);


  
     
  

  return (
    <div className="App">
      <Grid container>
        <Container>
          <header>
            <h1>My Todo List</h1>
          </header>
          <Form setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
          <Todolist filterredTodo={filterredTodo} setTodos={setTodos}  todos={todos} />
        </Container>
      </Grid>
    </div>
  );
}

export default App;
