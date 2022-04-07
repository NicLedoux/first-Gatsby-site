// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm Nic, the proud creator of this site, which I built with
        Gatsby. I'm using this site to teach myself how to use Gatsby and am
        also learning React along the way.
      </p>
      <StaticImage
        alt="The hatchery at Bisti Badlands"
        src="../images/Bisti_milkyway.jpg"
      />
    </Layout>
  );
};
export default AboutPage;
