import React  from 'react'
import Taskk from "./Taskk"

export default function Tlist({fetchtask,tasks}) {
  
    
    return (
    <div>
      <h1>List of Task : </h1>
      {
        tasks.length ? tasks.map((task)=>(
            <Taskk task={task} fetchtask={fetchtask} />
        )): "Add this task to view it here"
      }
    </div>
  )
}
