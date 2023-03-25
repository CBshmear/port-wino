import react from "react";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    //backgroundColor: "#A6D9F7",

    marginBottom: 5,
    position: "absolute",
  },
  links: {
    display: "inline",
    margin: 30,
    color: "white",
    fontSize: "20px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    border: "solid white 1px",
  },
};

export default function Footer() {
  return (
    <div style={styles.container}>
      <button style={styles.links} href="https://www.github.com/CBshmear">
        GIT
      </button>

      <button style={styles.links} href="https://www.instagram.com/b.shmear/">
        INSTA
      </button>
    </div>
  );
}
