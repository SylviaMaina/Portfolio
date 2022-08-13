import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";

function Contacts() {
  return (
    <div className="About">
      <h3>Contacts</h3>
      <div className="contacts">
        <div>
          <h4>
            E-mail <EmailIcon />
          </h4>
          <h5>Sylviamaina16gmail.com</h5>
        </div>

        <div>
          <h4>
            Social Media
            <ShareIcon />
          </h4>
          <div className="sCards">
            <a href="https://www.linkedin.com/in/sylvia-maina-a2b956159/">
              <LinkedInIcon />
            </a>

            <a href="https://github.com/SylviaMaina">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
