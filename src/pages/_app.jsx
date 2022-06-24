import initHoneyBadger from "../lib/utils/honeybadger";
import "../styles/index.scss";

initHoneyBadger();
function MyApp({ Component, pageProps, err }) {

  // Workaround for https://github.com/zeit/next.js/issues/8592
  const modifiedPageProps = { ...pageProps, err };

  return <Component {...modifiedPageProps} />;
}

export default MyApp;
