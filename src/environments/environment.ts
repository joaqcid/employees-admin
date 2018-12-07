// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA7_xAgojzFclDGZI09mG0wnPPW3jT8viw",
    authDomain: "employees-admin.firebaseapp.com",
    databaseURL: "https://employees-admin.firebaseio.com",
    projectId: "employees-admin",
    storageBucket: "employees-admin.appspot.com",
    messagingSenderId: "591835464901"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
