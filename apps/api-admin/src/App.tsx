import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdopterList } from "./adopter/AdopterList";
import { AdopterCreate } from "./adopter/AdopterCreate";
import { AdopterEdit } from "./adopter/AdopterEdit";
import { AdopterShow } from "./adopter/AdopterShow";
import { RescueList } from "./rescue/RescueList";
import { RescueCreate } from "./rescue/RescueCreate";
import { RescueEdit } from "./rescue/RescueEdit";
import { RescueShow } from "./rescue/RescueShow";
import { AdoptionList } from "./adoption/AdoptionList";
import { AdoptionCreate } from "./adoption/AdoptionCreate";
import { AdoptionEdit } from "./adoption/AdoptionEdit";
import { AdoptionShow } from "./adoption/AdoptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"api"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Adopter"
          list={AdopterList}
          edit={AdopterEdit}
          create={AdopterCreate}
          show={AdopterShow}
        />
        <Resource
          name="Rescue"
          list={RescueList}
          edit={RescueEdit}
          create={RescueCreate}
          show={RescueShow}
        />
        <Resource
          name="Adoption"
          list={AdoptionList}
          edit={AdoptionEdit}
          create={AdoptionCreate}
          show={AdoptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
