import React from "react";

const styles = {
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
    width: "100px",
  },
  container: {
    border: "solid 1px white",
    borderRadius: 10,
    margin: 15,
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",

    width: "35%",
    border: "solid white 1px",
    background: "rgba(0,0,0,0.8)",
    borderRadius: 10,
  },
  h1: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    margin: 10,
    height: 40,
    display: "flex",
    flexWrap: "wrap",
    border: "black solid 1px",
    borderRadius: 10,
  },
  text: {
    margin: 5,
    color: "white",
  },
  button: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 60,
    margin: 5,
    border: "black solid 1px",
    borderRadius: 10,
  },
  inputMessage: {
    display: "inline-block",
    padding: "15px 10px",
    lineHeight: "180%",
    margin: 10,
    border: "black solid 1px",
    borderRadius: 10,
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    border: "white solid 1px",
    borderRadius: 10,
    width: "fit-content",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    margin: 10,
  },
  formContainer: {
    marginTop: "200px",
    margin: "100px",
    border: "solid white 1px",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 10,
  },
};

export default function Contact() {
  return (
    <div>
      <h1 style={styles.h1}></h1>
      <div style={styles.textBox}>
        <p style={styles.text}>
          If you have any questions or want to get together and throw rocks at
          things, feel free to use the contact form below!
        </p>
      </div>

      <div style={styles.container}>
        <form className="form" style={styles.form}>
          <input
            style={styles.input}
            name="name"
            type="text"
            placeholder="name"
          />

          <input
            style={styles.input}
            name="email"
            type="email"
            placeholder="email"
          />
          <input
            style={styles.inputMessage}
            name="message"
            type="text"
            placeholder="message"
            height="300px"
          />
          <button style={styles.button} type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
