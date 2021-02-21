import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Amplify.configure(awsconfig);

const auth = {
  // Domain name
  domain: 'https://ebuy-ecomm-demo.auth.us-east-1.amazoncognito.com',

  // Authorized scopes
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],

  // Callback URL
  redirectSignIn: 'http://localhost:4200', // or 'exp://127.0.0.1:19000/--/', 'myapp://main/'

  // Sign out URL
  redirectSignOut: 'http://localhost:4200', // or 'exp://127.0.0.1:19000/--/', 'myapp://main/'

  // 'code' for Authorization code grant, 
  // 'token' for Implicit grant
  // Note that REFRESH token will only be generated when the responseType is code
  responseType: 'token',
  cookieStorage: {
    // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        domain: 'http://localhost:4200',
    // OPTIONAL - Cookie path
        path: '/',
    // OPTIONAL - Cookie expiration in days
        expires: 365,
    // OPTIONAL - Cookie secure flag
    // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        secure: true
    },
  // optional, for Cognito hosted ui specified options
  options: {
    // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
    AdvancedSecurityDataCollectionFlag: true
  },

  // urlOpener: urlOpener
}




Amplify.configure({
  Auth: {
    // other configurations...
    // ....region: 'us-east-1',
    oauth: auth,
    
  },
  API: {
    endpoints: [
      {
        name: "apid8e90cfc",
        endpoint: "https://zimdo052e0.execute-api.us-east-1.amazonaws.com/ebuyenv",
        custom_header: async () => {
         // return { Authorization: 'token' }
          // Alternatively, with Cognito User Pools use this:
          return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
        }
      }
    ]
  }
});

if (environment.production) {
  enableProdMode();
}

Auth.currentSession()
.then(data => console.log('data', data))
.catch(err => console.log('err', err));



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


