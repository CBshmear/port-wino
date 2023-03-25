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
      left: "40%",

      // backgroundColor: "#A6D9F7",
    },
    body: {
      backgroundImage:
        "url(https://www.pixelstalk.net/wp-content/uploads/2016/06/High-Res-Wallpaper-HD.jpg)",
      //backgroundColor: "#A6D9F7",
      //color: "rgb(213, 214, 216)",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: 0,
      padding: "0px",
    },
  };
  return (
    <div style={styles.body}>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
