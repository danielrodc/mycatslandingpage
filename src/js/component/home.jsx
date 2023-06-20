import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Bottom from "./Bottom.jsx";
import { cards } from "./Card.jsx";

//create your first component
const Home = () => {
  document.title = "React Landing Page";
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="cards d-flex justify-content-center">
        <Card chosenCard={cards.cat1} />
        <Card chosenCard={cards.cat2} />
        <Card chosenCard={cards.cat3} />
        <Card chosenCard={cards.cat4} />
      </div>
      <Bottom />
    </>
  );
};

export default Home;
