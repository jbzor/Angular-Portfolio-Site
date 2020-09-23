import { SnotifyPosition } from 'ng-snotify';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  firebase :{
		    apiKey: "AIzaSyDbMXrWvcfP6EsQY2fUYEjZT5QOOr9H8DQ",
		    authDomain: "portfolio-21ab9.firebaseapp.com",
		    databaseURL: "https://portfolio-21ab9.firebaseio.com",
		    projectId: "portfolio-21ab9",
		    storageBucket: "portfolio-21ab9.appspot.com",
		    messagingSenderId: "621108138480",
		    appId: "1:621108138480:web:aafea57226589f6d32cd35"
  },
  snotifyConfig : {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
