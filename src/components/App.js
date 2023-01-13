import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const[category, setCategory]= useState('All')

  const[tasks, setTasks]=useState(TASKS)

  function addTask(newTask){
    
      setTasks([newTask,...tasks])
    
  }
  const filteredNames = tasks.filter((task)=>{
    if(category === 'All'){
      return true
    }else{
      return category === task.category
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter updateCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES} />
      <TaskList tasks ={filteredNames}/>
    </div>
  );
}

export default App;



