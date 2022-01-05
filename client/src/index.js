import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userState'
import { CampaignsProvider } from './context/campaignsState'
import { SelectedCampaignProvider } from './context/selectedCampaignState'
import { EditCampaignProvider } from './context/editCampaignState';
import { EncountersProvider } from './context/encountersState'

ReactDOM.render(
  <BrowserRouter>
    <EncountersProvider>
    <SelectedCampaignProvider>
    <CampaignsProvider>
    <UserProvider>
    <EditCampaignProvider>
      <App />
    </EditCampaignProvider>
    </UserProvider>
    </CampaignsProvider>
    </SelectedCampaignProvider>
    </EncountersProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


