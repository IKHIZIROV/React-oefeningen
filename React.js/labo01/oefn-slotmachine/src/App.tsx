import './App.css'
import cherry from './assets/cherry.png';
import watermelon from './assets/watermelon.png';
import seven from './assets/seven.png';
import prune from './assets/prune.png';
import lemon from './assets/lemon.png';

let slotImages : string[] = [cherry, watermelon, seven, prune, lemon];

function App() {
  const slot1 : number = Math.floor(Math.random() * 5);
  const slot2 : number = Math.floor(Math.random() * 5);
  const slot3 : number = Math.floor(Math.random() * 5);

  return (
    <>

      <img src={slotImages[slot1]} alt="slot 1" />
      <img src={slotImages[slot2]} alt="slot 2" />
      <img src={slotImages[slot3]} alt="slot 3" />

      {
        slot1 === slot2 && slot1 == slot3 ?
        <h1>Je hebt gewonnen</h1> :
        <h1>Je hebt verloren</h1>
      }
    </>
  )
}

export default App
