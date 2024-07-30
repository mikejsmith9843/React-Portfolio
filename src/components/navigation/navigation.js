import React from "react";
import "./navigation.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useTavb from "@mui/base/useTab";

const pages = ["About", "Portfolio", "Contact"];

function navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
    return (
        <ul
          className="nav nav-tabs"
          style={{ paddingRight: "35px", paddingTop: "22px" }}
        >
          <li className="nav-item">
            <a
              id="nav-link"
              href="#about"
              onClick={() => setCurrentPage("About")}
              className={currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              id="nav-link"
              href="#portfolio"
              onClick={() => setCurrentPage("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              id="nav-link"
              href="#Contact"
              onClick={() => setCurrentPage("Contact")}
              className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
        </ul>
    );
}