import './App.css'

function App() {
  const numbers: number[] = [1,2,3,4,5,6,7,8,9,10] 

  return (
    <>
      <table>
        <tbody>
          {numbers.map((row) => 
            <tr key={row}>
              {numbers.map((col) => 
                <td key={col}>
                  {row*col}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
