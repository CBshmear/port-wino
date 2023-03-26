import React from "react";
import { SideBar } from "@coreui/react";
const styles = {
  container: {
    bottom: "-400px",

    position: "relative",
    marginRight: 50,
    padding: 15,
    display: "flex",
    //width: 300,
    //backgroundColor: "#A9757F",
    flexWrap: "wrap",
    //border: "solid white 1px",
    background: "rgba(0,0,0,0.6)",
    borderRadius: 10,
    //flexDirection: "row-reverse",
    justifyContent: "center",
    //border: "solid white 1px",
  },
  container2: {
    marginTop: "100px",
    height: "100px",
    padding: 15,
    display: "flex",
    //width: 300,
    //backgroundColor: "#A9757F",
    flexWrap: "wrap",
    //border: "solid white 1px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    //flexDirection: "row-reverse",
    justifyContent: "center",
  },
  text: {
    margin: 5,
    color: "white",
    fontSize: "25px",
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
  },
};

export default function About() {
  return (
    <div style={styles.elementStyle}>
      <div style={styles.container}>
        <h4 style={styles.h4}></h4>
        <p style={styles.text}> Purpose Driven Web Design.</p>
      </div>
    </div>
  );
}
