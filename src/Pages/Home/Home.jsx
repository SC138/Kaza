import s from "./style.module.css";
import { Header } from "../../components/Header/Header";
import banner from "../../assets/images/Image-source-1.png";
import { PreviewRental } from "../../components/PreviewRental/PreviewRental";
import data from "../../data/logements.json";
import { Banner } from "../../components/Banner/Banner";
import { Footer } from "../../components/Footer/Footer";

// Crée un composant Home qui rend le composant Header, le composant Banner et le composant PreviewRental.
export function Home() {
  const dataRental = data.filter((rental) => rental);
  return (
    <>
      <Header />
      <main>
        <Banner image={banner} title={"Chez vous, partout et ailleurs"} />
        <div className={s.container_rental}>
          {dataRental.map((rental) => {
            return (
              <PreviewRental
                key={rental.id}
                id={rental.id}
                image={rental.cover}
                title={rental.title}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
