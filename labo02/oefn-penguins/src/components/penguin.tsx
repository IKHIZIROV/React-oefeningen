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
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
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