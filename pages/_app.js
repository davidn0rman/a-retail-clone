import { apiPlugin, storyblokInit } from "@storyblok/react";
// import Header from "../components/Header";
import "../styles/globals.css";
// import Grid from "../components/Grid";
import Page from "../components/Page";
import Topbar from "../components/Topbar";
import Topbariconbutton from "../components/Topbariconbutton";
import Topbarlink from "../components/Topbarlink";
// import Teaser from "../components/Teaser";

const components = {
  // header: Header,
  topbar: Topbar,
  topbariconbutton: Topbariconbutton,
  topbarlinks: Topbarlink,
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
