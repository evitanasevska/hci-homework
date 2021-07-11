import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CampaignDetailsA from "./pages/CampaignDetailsA";
import CampaignDetailsB from "./pages/CampaignDetailsB";
import CampaignDetailsC from "./pages/CampaignDetailsC";
import ApplySuccess from "./pages/ApplySuccess";
import Create from "./pages/Create";
import CampaignForm from "./pages/CampaignForm";
import Explore from "./pages/Explore";
import CampaignsAtLocation from "./pages/CampaignsAtLocation";
import Profile from "./pages/Profile"

function App() {
  return (
    <div id="app">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/explore">
          <Explore />
        </Route>

        <Route path="/create">
          <Create />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/campaign-details" exact>
          <CampaignDetailsA />
        </Route>

        <Route path="/campaign-detailz" exact>
          <CampaignDetailsB />
        </Route>

        <Route path="/campaign-detaily" exact>
          <CampaignDetailsC />
        </Route>

        <Route path="/apply-success">
          <ApplySuccess />
        </Route>

        <Route path="/campaign-form">
          <CampaignForm />
        </Route>

        <Route path="/campaigns-at-location">
          <CampaignsAtLocation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
