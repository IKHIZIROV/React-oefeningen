import { useState } from 'react'
import styles from "../App.module.css"

interface Penguin {
  id: number;
  nickname: string;
  species_id: number;
  island: string;
  gender: string;
  weight: number;
  height: number;
  year: number;
  image: string;
  assigned_to: string | null;
}

const PenguinCard = ({ penguin }: { penguin: Penguin }) => {
  const [selected, setSelected] = useState<boolean>(false)

  const select = () => {
    selected ? setSelected(false) : setSelected(true)
  }

  return (
    <div 
      style={{ border: "1px solid black", borderRadius: "10px", padding: "8px", textAlign: "center" }}
      onClick={select}
      className={selected ? styles.select : ''}>
        <img src={penguin.image} alt={penguin.nickname} width={120} />
        <h3>{penguin.nickname}</h3>
        <p>Gender: {penguin.gender}</p>
        <p>Island: {penguin.island}</p>
        <p>
          {penguin.weight}kg - {penguin.height}cm
        </p>
    </div>
  );
};

export default PenguinCard