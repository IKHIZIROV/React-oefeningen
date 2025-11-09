import './App.css'

interface Student {
  id: number;
  naam: string;
  leeftijd: number;
}
function App() {
  const numbers : number[] = [3, 5, 8, 9, 1, 2, 4, 1, 5, 7]

  let students : Student[] = [
    {id: 0, naam: "jarne", leeftijd: 18},
    {id: 1, naam: "joris", leeftijd: 21},
    {id: 2, naam: "ahmed", leeftijd: 19},
    {id: 3, naam: "marie", leeftijd: 20}
  ]

  return (
    <>
      <ul>
        {
          numbers.map((number) => <li key = {number}>{number}</li>)
        }
      </ul>
      <ol>
        {
          students.map((student) => <li key = {student.id}>{student.naam}</li>)
        }
      </ol>
      <ol>
        {
          students.filter((student) => student.naam.startsWith("j"))
          .map((student) => <li key = {student.id}>{student.naam}</li>)
        }
      </ol>
      <select name="" id="">
        {
          students.map((student) => <option key={student.id}>{student.naam}</option>)
        }
      </select>
      <table>
        <th>
          <td>Naam</td>
          <td>Leeftijd</td>
        </th>
        <tbody>
          {
            students.map((student) => 
              <tr>
                <td key={student.id}>{student.naam}</td>
                <td key={student.id}>{student.leeftijd}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
