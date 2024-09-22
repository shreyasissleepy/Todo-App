import React, { useState, useEffect, useSyncExternalStore } from 'react';
import axios from 'axios';

const View = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/getTasks')  
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
      });
  }, []);  

  // Function to handle task deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/deleteTask/${id}`)
      .then(() => {
        // Remove the deleted task from the state to update the UI
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(err => {
        console.error('Error deleting task:', err);
      });
  };

  return (
    <div className='View'>
      <table border={'2px solid #000'} cellSpacing={0} cellPadding={'15px'}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.Task}</td> 
                <td>{task.Status}</td>
                <td>{new Date(task.Date).toLocaleString()}</td>
                <td>
                  <button className='edit'>Edit</button>
                  <button className='delete' onClick={() => handleDelete(task._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='4'>No tasks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default View;
