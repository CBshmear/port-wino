import React from "react";

const styles = {
  nav: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "GT Walsheim",
    //border: "none",
    color: "inherit",
  },
  headerText: {
    justifyContent: "start",
    fontSize: 50,
    color: "white",
    fontFamily: " Abril Fatface",
    marginBottom: "5px",
    marginRight: "50px",

    //borderBottom: "solid white 1px",
  },
  container: {
    display: "flex",
    justifyContent: "start",
    //backgroundColor: "#A6D9F7",
    //backgroundImage:
    // "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XfEBcLHxzv6ZZNsT3v0ZxwHaDe%26pid%3DApi&f=1&ipt=e7167465181121fdaef6129cb8b4d6fdbbd9c6b731fcf6e8cd31214086906a27&ipo=images)",
    margin: 0,
    padding: "10px",
  },
  link: {
    color: "white",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.headerText}>CBshmear</h1>
      <ul className="nav nav-tabs" style={styles.nav}>
        <li className="nav-item" style={styles.nav}>
          <a
            style={styles.link}
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            style={styles.link}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            style={styles.link}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            style={styles.link}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
