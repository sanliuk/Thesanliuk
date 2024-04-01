import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hello! I'm <span className="purple">Manuel Hosseini</span>, the founder of <span className="purple">San Liuk Animation and Multimedia Studio</span>, located in the heart of <span className="purple">Bologna, Italy</span>. Established in 2017 during my chemical engineering studies, <span className="purple">San Liuk</span> draws its inspiration from the iconic sanctuary of <span className="purple">Saint Luke</span> in Bologna’s hills - a place that has been a personal emblem of reflection, challenge, and ascent.
              <br /><br />
              <span className="purple">The name</span> San Liuk itself is not just a playful homage to this sanctuary but also the name of a cherished duck character, a mascot I've always carried with me. This symbol serves as a vivid reminder of my origins and the journey that has shaped my creative endeavors.
              <br /><br />
              At San Liuk, my passion lies in bringing stories to life through engaging <span className="purple">animations</span>, crafting melodies in <span className="purple">music</span>, and developing immersive <span className="purple">video games</span>. Each project is an exploration, an invitation to journey with me through the vast landscapes of human emotion and adventure.
              <br /><br />
              San Liuk stands for continuous movement, innovation, and the storytelling spirit. My mission is encapsulated in the journey itself - to explore, to innovate, and to share the vast tapestry of <span className="purple">human experience</span> through the <span className="purple">universal language</span> of animation.
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive not only to ascend in life but to lift the spirit of innovation in each stride!"{" "}
          </p>
          <footer className="blockquote-footer">Manuel Hosseini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
