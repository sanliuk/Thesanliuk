import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import slkspace from "../../Assets/Projects/slkspace.png";
import spotify from "../../Assets/Projects/spotify.png";
import TMDD from "../../Assets/Projects/TMDD.jpeg";
import youtube from "../../Assets/Projects/youtube.png";
import Websites from "../../Assets/Projects/websites.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TMDD}
              isBlog={false}
              title="The Maimed Dumb Duck"
              description="NFT collectibles with perks for videogames. A combination of 3D colored ducks with special skills."
              ghLink="https://www.thedumbduck.store/"
              demoLink="https://opensea.io/collection/the-sanliuk-maimeddumbduck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube"
              description="This is our channel where we shere new animations with public."
              ghLink="https://www.youtube.com/channel/UCgbG6HYcITXhZ0W35lUvFbA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify"
              description="Original songs for video games by San Liuk and instrumentals produced & mixed by the Italian producer Rectone."
              ghLink="https://open.spotify.com/artist/0dGIDGbkhhoYtTziRX5Qxg"
              demoLink="https://open.spotify.com/artist/1gqNhaw9UdQtDl78eiEhpC"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slkspace}
              isBlog={false}
              title="SLK Space"
              description="This is our original videogame. This game is available for for mobiles and tablet."
              ghLink="/app"
              demoLink="/games"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Websites}
              isBlog={false}
              title="Web Development"
              description="Here you can find 2 examples of websites designed by San Liuk Studio."
              ghLink="https://sanliuk.github.io/Felsinaculinaria/index.html"
              demoLink="https://3d-portfolio-pearl-five.vercel.app/"
            />
          </Col>                
                
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
