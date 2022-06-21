import "../styles/index.scss";
import initHoneyBadger from "../utils/honeybadger";

initHoneyBadger();
function MyApp({ Component, pageProps, err }) {

  // Workaround for https://github.com/zeit/next.js/issues/8592
  const modifiedPageProps = { ...pageProps, err };

  return <Component {...modifiedPageProps} />;
}

export default MyApp;
