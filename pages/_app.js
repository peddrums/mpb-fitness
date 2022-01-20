import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

  const redirectUri = useEffect(() => {
    return window.location.origin;
  }, []);

  console.log(
    process.env.REACT_APP_AUTH0_DOMAIN,
    process.env.REACT_APP_AUTH0_CLIENTID,
    redirectUri
  );

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={useEffect(() => {
        return window.location.origin;
      }, [])}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
