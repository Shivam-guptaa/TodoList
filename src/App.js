import React ,{useEffect, useState} from 'react'
import Tform from "./Tform.js"
import Tlist from './Tlist.js';


function App() {
  const [task,settask] = useState([]);
  const fetchtask= async() => {
      const resp = await fetch("http://localhost:5000/task/",{
        method : "GET",
        headers : {"Content-Type" : "application/json"}
      })
      const x = await resp.json();
      settask(x);
  }
  useEffect(()=>{
      fetchtask();
  },[]);

  return (
    <div className="App">
      <h1>To-do Application</h1>
      <Tform fetchtask={fetchtask}/>
      <Tlist fetchtask={fetchtask} tasks={task}/>
    </div>
  );
}

export default App;
