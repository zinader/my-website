import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { FaCodeBranch } from "react-icons/fa";

function BodyComponent() {
  return (
    <div>
      <div className="body">
        <div className="main-heading">
          <h1>Experience</h1>
        </div>
        <div className="positions">
          <ul>
            <li>
              Software Engineer - <span className="work">Fiskil</span>
              <span className="time">July 2021 - Present</span>
            </li>
            <li>
              Research Intern -{" "}
              <span className="work">
                Centre for Spatial Data Infrastructures and Land Administration
              </span>
              <span className="time">Feb 2021 - June 2021</span>
            </li>
            <li>
              Co-Lead -{" "}
              <span className="work">Google Developers Student Club</span>
              <span className="time">June 2020 - June 2021</span>
            </li>
          </ul>
        </div>
        <div className="projects">
          <h1>Projects</h1>

          <div className="cards">
            <Card className="card" variant="outlined">
              <CardContent>
                <h2>
                  CoronaResources{" "}
                  <span className="project-github">
                    <a
                      href="https://github.com/zinader/CoronaResources"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCodeBranch />
                    </a>
                  </span>
                </h2>

                <h3>
                  Developed a web application using React.js and Node.js to
                  connect people in India suffering from COVID-19 to the right
                  resources such as oxygen cylinders. Reached 700+ users in the
                  first week.
                </h3>
                <span className="tech-stack">React.js Node.js</span>
              </CardContent>
              <CardActions className="card-button">
                <a
                  href="https://coronaresources.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">View Project</Button>
                </a>
              </CardActions>
            </Card>
            <Card className="card" variant="outlined">
              <CardContent>
                <h2>
                  Grabbr{" "}
                  <span className="project-github">
                    <a
                      href="https://github.com/zinader/Grabbr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCodeBranch />
                    </a>
                  </span>
                </h2>

                <h3>
                  Developed a chrome extension using the MERN Stack to keep
                  track of job applications and get timely reminders and won
                  first place at TechnoHack 2021 out of 120+ teams.
                </h3>
                <span className="tech-stack">React.js Flask Chrome</span>
              </CardContent>
              <CardActions className="card-button">
                <a
                  href="https://chrome.google.com/webstore/search/grabbr?pli=1&authuser=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">View Project</Button>
                </a>
              </CardActions>
            </Card>
            <Card className="card" variant="outlined">
              <CardContent>
                <h2>
                  Leetcode Prep{" "}
                  <span className="project-github">
                    <a
                      href="https://github.com/zinader/leetcode_company_wise"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCodeBranch />
                    </a>
                  </span>
                </h2>

                <h3>
                  A web application which has leetcode questions listed on the
                  basis of different companies. This project was made using
                  React.js and Flask to help many students get ahead in the
                  technical interview journey.
                </h3>
                <span className="tech-stack">React.js Flask</span>
              </CardContent>
              <CardActions className="card-button">
                <a
                  href="https://leetcodecompanywise.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">View Project</Button>
                </a>
              </CardActions>
            </Card>
            <Card className="card" variant="outlined">
              <CardContent>
                <h2>
                  Average Grades{" "}
                  <span className="project-github">
                    <a
                      href="https://github.com/zinader/Unimelb-Grades"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCodeBranch />
                    </a>
                  </span>
                </h2>

                <h3>
                  A web application that helps students view grades that other
                  students have attained in the past.Here you can find an idea
                  of the subject scores people have attained in the past
                  semesters.
                </h3>
                <span className="tech-stack">React.js Node.js</span>
              </CardContent>
              <CardActions className="card-button">
                <a href="https://grades.tech/" target="_blank" rel="noreferrer">
                  <Button size="small">View Project</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="footer">
          <h3>
            If you ever want to have a chat. You can send me a text{" "}
            <a href="mailto:pulkit@student.unimelb.edu.au">here</a> or hit me up
            on Facebook :)
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
