import './App.css'

const add = (a : number, b : number) => {
    return a + b
}

const multiply = (a : number, b : number) => {
    return a * b
}

const App = () => {
    const random : number = Math.random();
    const getal1 : number = Math.floor(Math.random() * 10);
    const getal2 : number = Math.floor(Math.random() * 10);

    return (
      <>  

        <h2>random: {random}</h2>
        <h2>getal1: {getal1}</h2>
        <h2>getal2: {getal2}</h2>

        {random < 0.5 ?
        <h1>resultaat: {add(getal1, getal2)}</h1> :
        <h1>resultaat: {multiply(getal1, getal2)}</h1>}
        
      </>
    );
}

export default App;