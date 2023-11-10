/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/web.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Landing Page ",
    description:
      " Discover the elegance of my HTML and CSS crafted landing page – a seamless blend of design and functionality, inviting you to explore a captivating online experience. Engage with simplicity, style, and user-friendly navigation. ",
    url: " https://github.com/waseem1302-x/HTML-CSS/blob/main/Landing%20Page.zip ",
  },
  {
    title: " Food Website ",
    description:
      " Indulge your senses with my delectable creations on my newly crafted food website, where every dish tells a flavorful story. Explore a culinary journey that tantalizes taste buds and celebrates the artistry of delicious dining. ",
    url: " https://github.com/waseem1302-x/HTML-CSS/blob/main/Food.zip ",
  },
  {
    title: "My Linkedin Profile",
    description:
      " Explore my professional journey in web development and discover how I bring creativity and expertise to enhance user experiences. Let's connect on LinkedIn for insights into my passion for innovative solutions and continuous learning in the ever-evolving tech landscape. ",
    url: "  https://www.linkedin.com/in/waseem-mushtaq-1302-x/ ",
  },
  {
    title: "GitHub Projects",
    description:
      " Discover the heart of my projects on GitHub – a showcase of passion, innovation, and continuous learning. Explore the code journey with me; your curiosity is the compass, and collaboration is the destination. ",
    url: " https://github.com/waseem1302-x ",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
