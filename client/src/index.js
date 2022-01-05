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

ReactDOM.render(
  <BrowserRouter>
    <SelectedCampaignProvider>
    <CampaignsProvider>
    <UserProvider>
    <EditCampaignProvider>
      <App />
    </EditCampaignProvider>
    </UserProvider>
    </CampaignsProvider>
    </SelectedCampaignProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


