import react from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import "./style.css";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    //backgroundColor: "#A6D9F7",

    marginBottom: 5,
    position: "absolute",
  },
  links: {
    "&:hover": {
      background: "rgba(0,0,0,0.9)",
    },
    margin: "10px",
    padding: "10px",
    color: "white",
    fontSize: "30px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    height: "fit-content",
    //border: "solid white 1px",
  },
};

export default function Footer() {
  return (
    <div style={styles.container}>
      <a
        className="Button"
        style={styles.links}
        href="https://www.github.com/CBshmear"
      >
        <AiFillGithub />
      </a>

      <a
        className="Button"
        style={styles.links}
        href="https://www.instagram.com/b.shmear/"
      >
        <AiFillInstagram />
      </a>
    </div>
  );
}
