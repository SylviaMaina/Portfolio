import React, { useState } from "react";
import "./Experiences.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  const [church, setChurch] = useState(false);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="infos" id="Experience">
      <h3>Experience</h3>
      <div className="stats">
        <div className="Companies">
          <button onClick={() => setChurch(!church)}>
            Redeemed Gospel Church
          </button>
          <button onClick={() => setChurch(true)}>
            Microfundit Application
          </button>
        </div>
        <div className="Experiences">
          {church ? (
            <div data-aos="fade-out">
              <ul>
                <li>
                  Integrated the website to match the figma design agreed upon
                  by the owner.
                </li>
                <li>
                  Was able to create te website which brought about growth of
                  members joining the church.
                </li>
                <li>
                  Provided the church with a platform to post of upcoming events
                  which are to be hosted by the church thus introducing more
                  people to the church
                </li>
                <li>
                  Enhanced views of church videos which are posted on the
                  website.
                </li>
              </ul>
            </div>
          ) : (
            <div data-aos="fade-out">
              <ul>
                <li>
                  Created a progressive web application which gave users an
                  alternative to downoading the application.
                </li>
                <li>
                  Integrated the application to the backend using rest apis
                </li>
                <li>
                  Moved forward the launch date of the application by 1 month
                  whie still keeping up with the required standard of quality of
                  the owners.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
