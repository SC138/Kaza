import { Banner } from "../../components/Banner/Banner.jsx";
import { Header } from "../../components/Header/Header.jsx";
import banner from "../../assets/images/Image-source-2.png";
import { Collapse } from "../../components/Collapse/Collapse.jsx";

export function About() {
  let aboutData = [
    {
      id: 1,
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un suivi sans faille des annonces postées sur notre site. Et nous garantissons que vos données personnelles seront protégées.",
    },
  ];
  return (
    <>
      <Header />
      <Banner image={banner} />
      {aboutData.map((data) => (
        <Collapse key={data.id} title={data.title}>
          {data.content}
        </Collapse>
      ))}
    </>
  );
}
