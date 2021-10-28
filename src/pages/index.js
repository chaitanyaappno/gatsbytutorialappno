import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="This is Home Page">
      <main>
        <title>Home Page</title>
        <h1>Welcome to my Gatsby site!</h1>
        <Link to="/about">About</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/nature.jpeg"
      />
      </main>
    </Layout>
  );
};

export default IndexPage;
