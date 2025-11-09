import './App.css'

function App() {
  const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    alert(event.target.value);
  }

  const handleChangeString = (event : string) => {

  }

  const handleCarChange : React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log(e.target.value)
  }

   const handleSubmit : React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form)

    const name = formData.get("name");
    const year = formData.get("year");

    console.log("Name:", name);
    console.log("Year:", year);
  };

  return (
    <>
      <input type="text" onChange={(e) => handleChangeString(e.target.value)}/>

      <label htmlFor="check">Check</label>
      <input id="check" type="checkbox" onChange={(e) => console.log(e.target.checked)}/>

      <select name="cars" id="cars" onChange={handleCarChange}>
        <option value="volvo">volvo</option>
        <option value="saab">saab</option>
        <option value="fiat">fiat</option>
        <option value="audi">audi</option>
      </select>

      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name"/>

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        min="1900"
        max="2021"
      />

      <button type="submit">
        Submit
      </button>
    </form>

    </>
  )
}

export default App
