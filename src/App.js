import Header from './components/Header'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState, useEffect } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    
    const getTasks = async () =>{
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }

    getTasks();
    
  },[])

  //fetch all tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data= await res.json()
    return data;
  }

  //fetch a task
  const fetchTask= async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data= await res.json()
    return data;
  }

  //Delete Task
  const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id!==id))
  }

  //Toggle Reminder
  const toggleReminder= async(id)=>{
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder :!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updatedTask)
   })
   const data= await res.json()
    
   setTasks(tasks.map((task)=> task.id===id?{...task, reminder:data.reminder}:task))
  }


  const addTask = async (task)=>{
    //const id = Math.floor(Math.random()*1000)+1
    //const newTask = {id, ...task}
    //setTasks([...tasks, newTask])

    const res = await fetch('http://localhost:5000/tasks',{
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(task)
       })

    const data= await res.json()
    
    setTasks([...tasks, data])
  }

  return (
      <div className="container">
          <Header title={'Task Tracker'} onAddClick={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
          {showAddTask && <AddTask onAdd={addTask}/> }
          {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No Tasks To Show'}
          
      </div>
    
  );
}




Header.defaultProps ={
  title: 'Task Tracker'
}


export default App;
