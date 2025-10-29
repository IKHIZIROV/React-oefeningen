import { useState } from 'react'
import './App.css'

interface Student {
  name: string,
  age: number,
  year: number;
}

function App() {
  const students : Student[] = [];

  const SearchStudent = () => {
    return 
  }

  return (
    <>
      <p>Enter the name of the student</p>
      <input onClick={SearchStudent} type="text" />
      
    </>
  )
}

export default App
