import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userState'
import { CampaignsProvider } from './context/campaignsState'

ReactDOM.render(
  <BrowserRouter>
    <CampaignsProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </CampaignsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


