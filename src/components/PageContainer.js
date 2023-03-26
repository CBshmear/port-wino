import React, { useState } from "react";
import Header from "./Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

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

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const styles = {
    footer: {
      margintop: "600px",
      display: "flex",

      alignItems: "end",
      position: "absolute",
      bottom: 0,
      width: "100%",
      left: "45%",

      // backgroundColor: "#A6D9F7",
    },
    body: {
      backgroundImage: "url(https://wallpapercave.com/wp/wp4546295.jpg)",
      //backgroundColor: "#A6D9F7",
      //color: "rgb(213, 214, 216)",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: 0,
      padding: "0px",
    },
    header: {
      left: " 0 !important",
    },
  };
  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
