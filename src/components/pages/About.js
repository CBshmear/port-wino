import React from "react";
const styles = {
  container: {
    border: "solid 1px white",
    borderRadius: 10,
    margin: 15,
    display: "flex",
  },
  text: {
    margin: 5,
  },
};

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div style={styles.container}>
        <p style={styles.text}>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>
      </div>
    </div>
  );
}
