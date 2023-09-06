import { apiPlugin, storyblokInit } from "@storyblok/react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import "../styles/globals.css";
// import Grid from "../components/Grid";
import Page from "../components/Page";
// import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  header: Header,
  // grid: Grid,
  // teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "m9oSOtuEhrVRxMT81hOWUwtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
