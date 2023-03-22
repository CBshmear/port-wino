import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const styles = {
    footer: {
      display: "flex",
      justifyContent: "center",
    },
    body: {
      backgroundColor: "rgb(24, 57, 123)",
      color: "rgb(213, 214, 216)",
    },
  };

  return (
    <div>
      <div style={styles.body}>
        {/* // TODO: Add a comment describing what we are passing as props */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* // TODO: Add a comment explaining what is happening on the following line */}
        {renderPage()}
      </div>
      <footer style={styles.footer}>CBshmear</footer>
    </div>
  );
}
