// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rooturl: 'http://localhost:3000',
  apiUrl: '/casedetails/getall',
  apiUrlpostcase: '/casedetails',
  apigetcasebylogged:'/casedetails/usercase',
  apicasegetbyid: '/casedetails/case',
  // apigetid:'http://localhost:3000/auth/:id',
  apiauth: '/auth',
  apiauthsignup: '/auth/signup',
  apiauthlogin: '/auth/admin',
  apiagentlogin:'/auth/agent',
  getname: '/auth/roleid/RoleID:2',
  apiauthpassword: '/auth/password',
  apicaasefileupload: 'http://localhost:3000',
  apiassign: '/casedetails/caseassign',
  apigetquestion: '/casedetails/group/questions',
  apigetquestionoptions: '/casedetails/group/questionoptions',
  numberofcases: '/casedetails/assignments/numberofassignments/users'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
