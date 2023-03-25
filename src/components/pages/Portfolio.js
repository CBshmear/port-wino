import React from "react";
import Project from "../Project";
import Carousel from "react-material-ui-carousel";

const styles = {
  container: {
    border: "solid 1px white",
    borderRadius: 10,
    margin: 40,
    display: "flex",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    boxShadow: "5px 10px",
    color: "white",
    width: "200px",
  },
  text: {
    margin: 5,
  },
  h1: {
    display: "flex",
    justifyContent: "center",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    color: "white",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "center",
    border: "solid white 1px",
    padding: "30px",
  },
  carousel: {
    display: "flex",
    justifyContent: "center",

    height: 200,
  },
  cardText: {
    margin: 30,
    padding: "20px",
  },
};

export default function PortfolioList(props) {
  const projects = [
    {
      title: "My Animal List",
      description: "Animal Review Website",
      link: "https://my-animal-list.herokuapp.com/",
    },
    {
      title: "Destination Finder",
      description: "Enter a city and get travel data!",
      link: "https://bkorbsquare.github.io/Project-1/",
    },
    { title: "anothr title", description: "MERN", link: "url" },
    { title: "anothr title", description: "MERN", link: "url" },
    { title: "anothr title", description: "MERN", link: "url" },
    { title: "anothr title", description: "MERN", link: "url" },
  ];
  return (
    <Carousel>
      {projects.map((project, i) => (
        <Project key={i} project={project} styles={styles} />
      ))}
    </Carousel>
  );
}
