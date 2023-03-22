import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
const styles = {
  nav: {
    justifyContent: "center",
  },
  headerText: {
    textAlign: "left",
    fontSize: 50,
    color: "dark-tan",
  },
  header: {
    backgroundImage:
      "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2lfiJdkGha3TxHf_LTuZiAHaB0%26pid%3DApi&f=1&ipt=bda70ef7036de158a1e74c927a44eafd48ddba03e720396fbf40bc42f1c6b1e9&ipo=images)",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.header}>
      <h1 style={styles.headerText}>CBshmear</h1>
      <ul className="nav nav-tabs" style={styles.nav}>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            //  TODO: Add a comment explaining what this logic is doing

            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing

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
