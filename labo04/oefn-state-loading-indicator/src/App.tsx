import { useState } from 'react'
import './App.css'
import { FidgetSpinner } from 'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState<boolean>(false)

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      {loading ? 
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
          />
        :
        <button onClick={startLoading}>Start loading</button>
      }
     
    </>
  )
}

export default App
