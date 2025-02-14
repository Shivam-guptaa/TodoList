import React, {useState} from 'react'



export default function Tform({fetchtask}) {
    const [title,settitle] = useState("");
    const [Description,setDescription] = useState("");
    const [priority,setpriority] = useState("Mid");
    const[DueDate,setDueDate] = useState("");
    const [message,setMessage] = useState("");
    
async  function todo(e){
        e.preventDefault();
        try{const res = await fetch("http://localhost:5000/task/add",{
            method : "POST",
            headers : { "Content-Type" : "application/json" } ,
            body : JSON.stringify({
                "Title" : title,
                "Description" : Description,
                "Priority" :priority,
                "DueDate" : DueDate         })
        })
        
        const data = await res.json();
        setMessage(data.message);
        fetchtask();
        settitle("");
    setDescription("");
    setpriority("Mid");
    setDueDate("");
    setMessage("");
    }
    catch(error){
      setMessage("Failed to add task")
      console.error(error);
    }
  }
  return (
    <div>

      <form onSubmit={todo}>
      <div>
            <label>Title : </label>
            <input type='text' value={title} onChange={(e)=>settitle(e.target.value)} required/>
        </div><div>
            <label>Description : </label>
            <input type='text'value = {Description} onChange={(e)=>setDescription(e.target.value)}/>
        </div><div>
            <label>Due-Date : </label>
            <input type="date" value ={DueDate} onChange={(e)=>setDueDate(e.target.value)}/>
            </div>
        <div>
            <label>Priority : </label>
            <input type='radio' name='prior' value="Low" onChange={(e)=>setpriority(e.target.value)}/>Low
            <input type='radio' name='prior' value="Mid" onChange={(e)=>setpriority(e.target.value)}/>Mid
            <input type='radio' name='prior' value="High" onChange={(e)=>setpriority(e.target.value)}/>High
        </div>
        <button type="submit">Add Task</button>
      </form>
      <h1 style={{fontSize:"30px",color:"blue"}}>{message}</h1>
    </div>
  )
}
