import React from "react";
import resume from "./resume.pdf";
const styles = {
  container: {
    margin: 15,
    display: "flex",
    flexWrap: "wrap",
    width: 300,
    background: "rgba(0,0,0,0.6)",
    borderRadius: 10,
    //backgroundColor: "tan",
  },
  text: {
    margin: 10,
    color: "white",
    fontSize: 15,
    fontFamily: "GT Walshein",
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    margin: 5,
    color: "white",
  },
};
export default function Blog() {
  return (
    <div>
      <h4 style={styles.h1}>Fornt End Proficiencies</h4>
      <a href={resume}>Download</a>
      <div style={styles.container}>
        <h4 style={styles.h1}>Front-End Proficiencies</h4>
        <ul style={styles.text}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Handlebars.js</li>
        </ul>
        <h4 style={styles.h1}>Back-End Proficiencies</h4>
        <ul style={styles.text}>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
