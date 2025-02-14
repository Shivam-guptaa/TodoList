import React from 'react'

export default function Taskk({fetchtask,task}) {
    async function Deletetask(){
        const res = await fetch(`http://localhost:5000/task/delete/${task._id}`,{
            method : "DELETE",
        })
        const data = await res.json();
        console.log(data.message);
        fetchtask();
    }

    async function statecom(){
        const res = await fetch(`http://localhost:5000/task/update/${task._id}`,{
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body :JSON.stringify({
                ...task,"Completed" : !task.Completed
            })
        })
        const data = await res.json();
        console.log(data.message);
        fetchtask();
    }

    return (
    <div>
        <h1>Created By Arshdev Singh</h1>
      <h1>Title : {task.Title}</h1>
      <p>Description : {task.Description}</p>
      <p>Priority : {task.Priority}</p>
      <p>Due - Date : {new Date(task.DueDate).toLocaleDateString()}</p>
      <p>Completed : {task.Completed ? "True" : "False"}</p>
      <button onClick={statecom}>{!task.Completed ? "Task-is-Completed" : "Task-is-not-Completed"}</button>
      <button onClick={Deletetask}>Delete this task</button>
    </div>
  )
}
