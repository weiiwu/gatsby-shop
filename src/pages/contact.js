import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="contact us"
      styleClass="contact-background"
    />

    <Info
      info="Tel: 1234 5678 <br />
            E-mail: straya@test.com <br />
            Fax: 9876 5432 <br />
            Address: 999 Lorem ipsum dolor sit amet, AU"
    />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ContactPage;
