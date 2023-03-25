import React, { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Page from "./components/Page"; /* Includes Components: About, Portfolio, Contact, & Resume */

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [pageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <DrawerAppBar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <section className="hero">
        <div className="hero-name">
          <p>Hoon Kim</p>
          <div className="hero-text">
            <p>My Dev Page</p>
          </div>
        </div>
      </section>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;