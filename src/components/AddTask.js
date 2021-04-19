import {useState} from 'react'

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitAdd = (e) =>{
        //Prevent page submit
        e.preventDefault()

        //check for empty text
        if(!text){
            alert('Please add a text')
            return;
        }

        //Cll Add Task, passed as a reference
        onAdd({text, day, reminder})

        //reset the form
        setText('')
        setDay('')
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmitAdd}>
            <div classNamme='form-control'>
                <label>Task</label>
                <input type ='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div classNamme='form-control'>
                <label>Day And Time</label>
                <input type ='text' placeholder='Add Day and Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div classNamme='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type ='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save task" className='btn btn-block' />
        </form>
    )
}


export default AddTask
