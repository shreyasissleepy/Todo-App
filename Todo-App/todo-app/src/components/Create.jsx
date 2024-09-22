import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [task,setTask] = useState('')
    const [status,setStatus] = useState('')
    const [date,setDate] = useState('')

    const handleSubmit = () => {
        axios.post('http://localhost:3000/addTask',{
            Task:task,
            Status:status,
            Date:date,
        }).then(resp => {
            alert('Request has been sent')
            console.log(resp)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='CreateTodo'>
        <div className='form'>
            <h2>Task</h2>
            <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <h2>Status</h2>
            <input type="text" placeholder='Enter Status' onChange={(e) => setStatus(e.target.value)}/>
            <h2>Deadline</h2>
            <input type="datetime-local" onChange={(e) => setDate(e.target.value)}/><br />
            <button  className='add' onClick={handleSubmit}>Add Task</button>
        </div>
    </div>
  )
}

export default Create