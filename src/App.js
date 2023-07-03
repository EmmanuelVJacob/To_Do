import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo] = useState('')
  const deleteTask = (index)=>{
    const deleteTodos = [...toDos]
    deleteTodos.splice(index,1)
    setToDos(deleteTodos)
  }
  useEffect(()=>{
    document.title = `You have ${toDos.length} pending tasks`
  })
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setToDos([...toDos,{id:Date.now() ,text:toDo,status:false}]); setToDo("")}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       
       {
        toDos.map((obj,index)=>{

      return(
       <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
             
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status = e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
        {obj.status ? <p style={{color: "red", textDecoration: "line-through"}}>&nbsp;&nbsp;{obj.text}&nbsp;&nbsp;</p> : <p>{obj.text} </p>}

          </div>
          <div className="right">
            <i onClick={()=>{
              
              deleteTask(index)
            }} className="fas fa-times"></i>
          </div>
        </div>)
        })  
      }


      </div>
    </div>
  );
}

export default App;