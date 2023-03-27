import React from "react";
import { SideBar } from "@coreui/react";
const styles = {
  container: {
    top: "100px",
    margin: 30,
    position: "relative",
    marginRight: 50,
    padding: 15,
    display: "flex",
    width: "300px",
    //backgroundColor: "#A9757F",
    flexWrap: "wrap",
    //border: "solid white 1px",
    background: "rgba(0,0,0,0.6)",
    borderRadius: 10,
    //flexDirection: "row-reverse",
    justifyContent: "center",
    //border: "solid white 1px",
  },

  text: {
    margin: 5,
    color: "white",
    fontSize: "20px",
    fontFamily: "Roboto Slab",
    //fontWeight: "bold",
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontFamily: "GT Walsheim",
  },
  h4: {
    color: "white",
    fontFamily: "League Spartan",
    display: "block",
  },

  elementStyle: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrao: "wrap",
  },
};

export default function About() {
  return (
    <div style={styles.elementStyle}>
      <div style={styles.container}>
        <p style={styles.text}>
          Websites should be clean, clear and concise. This is what I strive for
          in my work. Nothing superflous and nothing out of place. I have been
          practicing web-design for the past year and I put together this simple
          react portfolio to demonstrate a few of the projects i've worked on.
        </p>
      </div>
    </div>
  );
}
