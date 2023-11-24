import { Header } from "../../components/Header/Header";
import s from "./style.module.css";
import data from "../../data/logements.json";
import { Footer } from "../../components/Footer/Footer";
import { Collapse } from "../../components/Collapse/Collapse";
import { useParams, useNavigate } from "react-router-dom";
import { Error404 } from "../Error404/Error404";
import { Gallery } from "../../components/Gallery/Gallery";
import { Rating } from "../../components/Rating/Rating";

// Crée un composant ApartmentRental qui rend les composants Header, Gallery, Collapse, Footer, Error404.
export function ApartmentRental() {
  // Utilise useParams pour extraire le paramètre "id" de l'URL actuelle.
  const { id } = useParams();
  // Utilise useNavigate pour naviguer vers une autre URL.
  const navigate = useNavigate();

  // Utilise la méthode find() pour trouver le logement correspondant à l'ID.
  const rental = data.find((rental) => rental.id === id);
  // Si le logement n'existe pas, navigue vers la page d'erreur 404.
  if (!rental) {
    navigate("/*");
    return <Error404 />;
  }

  // Extrait les images et les équipements du logement.
  const pictures = rental.pictures;
  const equipments = rental.equipments;

  // Crée une fonction viewEquipments qui rend une liste des équipements.
  const viewEquipments = () => {
    return (
      <ul key="equipments" className={s.ulEquipments}>
        {equipments.map((equipment, index) => (
          <li className={s.liEquipments} key={index}>
            {equipment}
          </li>
        ))}
      </ul>
    );
  };

  // Style pour les composants Collapse.
  const styleCollapse = {
    width: "90%",
  };

  // Rendu du composant ApartmentRental.
  return (
    <>
      <Header />
      <main>
      <Gallery images={pictures} />
      {/* Affiche les informations du logement. */}
      <div className={s.container}>
        <div className={s.titleBlock}>
          <h1 className={s.title}>{rental.title}</h1>
          <p className={s.location}>{rental.location}</p>
          <div className={s.tags}>
            {rental.tags.map((tag) => (
              <span className={s.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Affiche les informations de l'hôte. */}      
        <div className={s.hostBlock}>
          <div className={s.hostInfo}>
            <p className={s.name}>{rental.host.name}</p>
            <img
              className={s.profilePic}
              src={rental.host.picture}
              alt={rental.host.name}
            />
          </div>
          <div className={s.rating}>
            {/* Affiche la note de l'hôte. */}
            <Rating rating={Number(rental.rating)} />
          </div>
        </div>
      </div>
      <div className={s.containerCollapse}>
        <div className={s.collapse}>
          {/* Utilise le composant Collapse pour afficher la description et l'équipement du logement. */}
          <Collapse style={styleCollapse} title="Description">
            {rental.description}
          </Collapse>
        </div>
        <div className={s.collapse}>
          <Collapse style={styleCollapse} title="Équipements">
            {viewEquipments()}
          </Collapse>
        </div>
      </div>

      </main>
      

      <Footer />
    </>
  );
}
