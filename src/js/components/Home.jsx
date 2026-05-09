import React from "react";

import { Navbar } from "./Navbar"; 
import { Jumbotron } from "./Jumbotron"; 
import { Footer } from "./Footer";
import { Card } from "./Card"; 

export const Home = () => {
  
  const cardsData = [
    {
      title: "Card 1",
      description: "Descripción de la primera carta.",
      image: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonUrl: "#"
    },
    {
      title: "Card 2",
      description: "Descripción de la segunda carta.",
      image: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonUrl: "#"
    },
    {
      title: "Card 3",
      description: "Descripción de la tercera carta.",
      image: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonUrl: "#"
    },
    {
      title: "Card 4",
      description: "Descripción de la cuarta carta.",
      image: "https://via.placeholder.com/500x325",
      buttonLabel: "Find Out More!",
      buttonUrl: "#"
    }
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container px-lg-5">
        <div className="row">
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