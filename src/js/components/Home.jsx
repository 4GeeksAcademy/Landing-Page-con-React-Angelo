import React from "react";

import { Navbar } from "./Navbar"; 
import { Jumbotron } from "./Jumbotron"; 
import { Footer } from "./Footer";
import { Card } from "./Card"; 

export const Home = () => {

    const cardsData = [
    {
      title: "Entrenamiento Élite",
      description: "Mejora tu control de balón y visión de juego con rutinas diseñadas para mediocampistas modernos.",
      // Enlace directo a la imagen de Nike
      image: "https://static.nike.com/a/images/w_1920,c_limit/8f414399-42c4-4e52-aa6c-e60cfb67b6ad/las-mejores-botas-de-fútbol-de-nike.jpg",
      buttonLabel: "Ver Rutinas",
      buttonUrl: "#"
    },
    {
      title: "Análisis Táctico",
      description: "Domina el sistema 4-3-3 y aprende a romper líneas con pases filtrados de alta precisión.",
      // Enlace directo de Catapult
      image: "https://www.catapult.com/wp-content/uploads/2024/05/Poss-SEAvNY3.19-0190-1800x1200.jpg",
      buttonLabel: "Estudiar Táctica",
      buttonUrl: "#"
    },
    {
      title: "Botas de Control",
      description: "Analizamos el mejor calzado para mantener la tracción y el toque fino en cualquier tipo de terreno.",
      // Enlace directo de Amazon
      image: "https://m.media-amazon.com/images/I/719JmfA1wIL._AC_SL1200_.jpg",
      buttonLabel: "Ver Equipos",
      buttonUrl: "#"
    },
    {
      title: "Lugares de Juego",
      description: "Encuentra los mejores lugares para jugar en los Valles del Tuy y organiza partidos.",
      // Enlace directo de Cultura Sinaloa
      image: "https://culturasinaloa.com/wp-content/uploads/cuales_son_las_mejores_botas_de_futbol_para_cesped_artificial__top_seleccion_y_analisis_40ab.webp",
      buttonLabel: "Ver Lugares",
      buttonUrl: "#"
    }
];

  
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container px-lg-5">
        <div className="row g-4">
          {cardsData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;