import react from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    //backgroundColor: "#A6D9F7",

    marginBottom: 5,
    position: "absolute",
  },
  links: {
    margin: "10px",
    padding: "10px",
    color: "white",
    fontSize: "20px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    //border: "solid white 1px",
  },
};

export default function Footer() {
  return (
    <div style={styles.container}>
      <a style={styles.links} href="https://www.github.com/CBshmear">
        <AiFillGithub />
      </a>

      <a style={styles.links} href="https://www.instagram.com/b.shmear/">
        <AiFillInstagram />
      </a>
    </div>
  );
}
