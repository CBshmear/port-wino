import React from "react";
import Project from "../Project";
import Carousel from "react-material-ui-carousel";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { ConfigIcon } from "../ConfigIcon";

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
  icon: {
    height: "20px",
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
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    color: "white",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "center",

    padding: "30px",
    width: "fit-content",
  },
  carousel: {
    display: "flex",
    justifyContent: "center",
    top: "100px",
    height: 200,
  },
  cardText: {
    margin: 30,
    padding: "20px",
    fontFamily: " Abril Fatface",
  },
  wholeCar: {
    position: "relative",
    top: 150,
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
    { title: "Unfriended API", description: "MERN", link: "url" },
    { title: "README Generator", description: "MERN", link: "url" },
    { title: "", description: "MERN", link: "url" },
    { title: "anothr title", description: "MERN", link: "url" },
  ];
  return (
    <div style={styles.wholeCar}>
      <Carousel>
        {projects.map((project, i) => (
          <Project key={i} project={project} styles={styles} />
        ))}
      </Carousel>
    </div>
  );
}
