import axios from "axios"
import { useState } from "react"

function CreateStudent() {
    const [formData, setFormData] = useState({
        name:"", course:"", city:""
    })
    function handleChange(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }
    async function handleSubmit(event){
        event.preventDefault()

        const response = await axios.post("https://omar-ga-class.onrender.com/students", formData)
    }
  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" />

        <label htmlFor="course">Course:</label>
        <input onChange={handleChange} value={formData.course} type="text" name="course" id="course" />

        <label htmlFor="city">City</label>
        <input onChange={handleChange} value={formData.city} type="text" name="city" id="city" />

        <button>Create Student</button>
      </form>
    </div>
  )
}

export default CreateStudent
