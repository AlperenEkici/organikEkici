import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";
import { Auth0Provider } from '@auth0/auth0-react';
import Deneme from "./layouts/Deneme";
import Deneme2 from "./layouts/Deneme2";
import Crud from "./demo/Crud";




function App() {
  return (
    <>
    <Crud/>
    <Deneme2/>
      {/* <Auth0Provider
        domain="dev-2m54tsoc1mledihz.us.auth0.com"
        clientId="TUNlkWte2RCE8wpGEmmDJabswo64uiW8"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Navi />
        <Dashboard />
      </Auth0Provider> */}
      
    </>
  );
}

export default App;
