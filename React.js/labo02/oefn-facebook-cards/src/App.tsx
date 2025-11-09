import styles from "./App.module.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Reference from "./components/reference";

import car from "./assets/car.jpg"

const App = () => {
  return (
    <>
      <div className={styles.f_card}>
        <Header 
          name={"Furry Black Car"}
          time={"Yesterday night"}
          pfp={car}
        />
        <Content/>
        <Reference/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
  