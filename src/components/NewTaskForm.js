import React from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {

  function submitForm(e){
    e.preventDefault();
    const newTask = {
      text:e.target.text.value,
      category:e.target.category.value      
    }
    onTaskFormSubmit(newTask)
  }


  return (
    <form onSubmit={submitForm} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category,index)=>{
            if(category==='All'){
              return null
            }else{
              return <option key={index}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
