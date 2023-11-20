import { Header } from "../../components/Header/Header";
import s from "./style.module.css";
import data from "../../data/logements.json";
import { Footer } from "../../components/Footer/Footer";
import { Collapse } from "../../components/Collapse/Collapse";
import { useParams, useNavigate } from "react-router-dom";
import { Error404 } from "../Error404/Error404";
import { Gallery } from "../../components/Gallery/Gallery";
import { Rating } from "../../components/Rating/Rating";

export function ApartmentRental() {
  const { id } = useParams();
  const navigate = useNavigate();

  const rental = data.find((rental) => rental.id === id);
  if (!rental) {
    navigate("/*");
    return <Error404 />;
  }

  const pictures = rental.pictures;
  const equipments = rental.equipments;

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

  const styleCollapse = {
    width: "95%",
  };

  return (
    <>
      <Header />
      <Gallery images={pictures} />
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
            <Rating rating={Number(rental.rating)} />
          </div>
        </div>
      </div>
      <div className={s.containerCollapse}>
        <div className={s.collapse}>
          <Collapse style={styleCollapse} title="Description">{rental.description}</Collapse>
        </div>
        <div className={s.collapse}>
          <Collapse style={styleCollapse} title="Équipements">{viewEquipments()}</Collapse>
        </div>
      </div>

      <Footer />
    </>
  );
}
