import axios from 'axios'
import { useState, useEffect } from 'react'
function StudentList() {
    const [students, setStudents] = useState([])
    async function getAllStudents() {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/students")
        console.log(response.data)
        setStudents(response.data)
    }

    // use effect take 2 arrg 1st function 2nd depandecies array
    useEffect(()=>{
        getAllStudents()
    },[]) 

    async function deleteStudent(studentId){
        const response = await axios.delete(`https://omar-ga-class.onrender.com/students/${studentId}`)
        getAllStudents()
    }
  return (
      <div>
          <h2>Students List</h2>
          {students.map((oneStudent) => {
              return (
                  <div key={oneStudent._id}>
                      <p>Name: {oneStudent.name}</p>
                      <button onClick={()=>{deleteStudent(oneStudent._id)}}>Delete Student</button>
                      
                  </div>
              )
          })}
      </div>
  )
}

export default StudentList
