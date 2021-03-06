//Steps adding firebase in web application
//1. Create a project in console.firebase.google.com
//2. npm install firebase
//3. create firebase config file in firebase.init.js and import getAuth to export auth to minimize repeated use of getAuth while using react firebase hook
//4. firebase settings => authentication => enable email and password auth
//5. Create login, signup component and setup route
//6. attach input field handler and form submit handler
//7. npm install --save react-firebase-hooks from react-firebase-hooks
//8. 'useCreateUserWithEmaiAndPassword' from react-firebase-hooks
//9. if user is created redirect to the expected page
//10. use 'signInWithEmailAndPassword' for Login
//11.Create RequireAuth component
//12. In Route, wrap protected component with RequireAuth component


//Firebase Hosting steps
//1. npm install -g firebase-tools (one time for your pc)
//2. firebase login (one time for your pc)
//3. firebase init (one time for each project)
//4. npm run build (every time want to deploy)
//5. firebase deploy (every time want to deploy)

//After any change- two steps
//4. npm run build (every time want to deploy)
//5. firebase deploy (every time want to deploy)