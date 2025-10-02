import './App.css'
import cherry from './assets/cherry.png';
import watermelon from './assets/watermelon.png';
import seven from './assets/seven.png';
import prune from './assets/prune.png';
import lemon from './assets/lemon.png';

const slotImages: string[] = [cherry, watermelon, seven, prune, lemon];

function App() {
  // aantal slots bepalen
  const aantalSlots: number = 3;

  // array met random getallen tussen 0 en 4
  const slots: number[] = Array.from({ length: aantalSlots }, () =>
    Math.floor(Math.random() * slotImages.length)
  );

  // check of alle waarden gelijk zijn (winst-conditie)
  const gewonnen = slots.every((value) => value === slots[0]);

  return (
    <>
      {slots.map((slot, index) => (
        <img key={index} src={slotImages[slot]} alt={`slot ${index + 1}`} />
      ))}

      {gewonnen ? (
        <h1>Je hebt gewonnen</h1>
      ) : (
        <h1>Je hebt verloren</h1>
      )}
    </>
  );
}

export default App;
