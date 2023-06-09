import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/snehaa.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Solapur's Hamburgers</h4>
          <p>
            We belong to the whole Solapur's Hamburgers community. The place for most tasty burgers on the
            in the town.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Sneha Araseed</h3>
            </div>

            <p>
              I am Sneha Araseed, the founder of Solapur's Hamburgers mill.Make sure 
              you add happiness of best taste to make it worth remembering!
             
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;