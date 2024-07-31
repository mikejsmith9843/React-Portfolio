import React from "react";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/portfolio";

export default function portfolioContainer({ currentPage, setCurrentPage }) {
    if (currentPage === "About"){
        return <About />;
    }
    if (currentPage === "Contact"){
        return <Contact />;
    }
    return <Portfolio />;
}