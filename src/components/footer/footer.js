//Imports
import React from "react";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";

//Function that renders the footer
const footer = () => {
    return (
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        sx={{ color: "text.primary" }}
      >
        <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
          <GitHubIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://github.com/mikejsmith9843")
            }
          />
          <EmailIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "mailto:mikejsmith9843@gmail.com")
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

//Export
export default footer;