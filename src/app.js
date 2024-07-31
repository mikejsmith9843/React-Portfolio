import React from "react";
import "./app.css";
import portfolioContainer from "./components/portfolioContainer";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useState } from "react";

const App = () => {
    const [currentPage, setCurrentPage] = useState("About");
    return (
        <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PortfolioContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
    );
};

export default App;