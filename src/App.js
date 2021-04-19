import Header from './components/Header'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState} from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "Feb 5th at 2:30 P.M",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30 P.M",
        reminder: true
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30 P.M",
        reminder: true
    },
])

//Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id!==id))
}

//Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=> task.id===id?{...task, reminder:!task.reminder}:task))
}


const addTask = (task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

return (
    <div className="container">
        <Header title={'Task Tracker'} onAddClick={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}></Header>
        {showAddTask && <AddTask onAdd={addTask}/> }
        {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No Tasks To Show'}
        
    </div>
    
  );
}




Header.defaultProps ={
  title: 'Task Tracker'
}


export default App;
