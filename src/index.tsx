import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import ViewerPage from './components/viewer-page';
import LoginPage from './components/login-page';



const configuration: Configuration = {
  auth: {
      clientId: "ae9c2a27-619b-464c-a266-4c00aa5bb211",
      authority: "https://login.microsoftonline.com/consumers"
  }
};
const pca = new PublicClientApplication(configuration);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>

      <UnauthenticatedTemplate>
        <LoginPage/>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <ViewerPage/>
      </AuthenticatedTemplate>

    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
