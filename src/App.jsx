import React from 'react'
import StudentList from './components/StudentList'
import CreateStudent from './components/CreateStudent'
function App() {
  return (
    <div>
      <h1>Fetching Data in React</h1>
      <StudentList/>
      <CreateStudent/>
    </div>
  )
}

export default App
