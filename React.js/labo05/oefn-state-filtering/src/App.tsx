import { useState } from 'react'
import './App.css'

interface Student {
  name: string,
  age: number,
  year: number;
}

function App() {
  const [search, setSearch] = useState("")

  const studentList : Student[] = [
    { name: "Emma Janssens", age: 20, year: 2 },
    { name: "Lars Peeters", age: 21, year: 3 },
    { name: "Sofie Vermeulen", age: 19, year: 1 },
    { name: "Noah De Smet", age: 22, year: 4 },
    { name: "Mila Van Damme", age: 20, year: 2 }
  ]

  return (
    <>
      <div>
        <label>
          Search student by name:
          <br />
          <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {studentList.filter((student) => student.name.includes(search)).map((student, i) =>
          <tr key={i}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.year}</td>
          </tr>
          )}
        </tbody>
      </table>

    </>
  )
}

export default App
