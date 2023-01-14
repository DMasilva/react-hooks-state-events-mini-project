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
        <input type="text" required name="text" />
      </label>
      <label>
        Category
        <select name="category">

          {categories.map(category=>Boolean(category==='All')? null : <option key={category}>{category}</option>)}
         
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
