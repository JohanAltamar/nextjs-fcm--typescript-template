importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js'); importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "****************************",
    authDomain: "****************************",
    projectId: "****************************",
    storageBucket: "****************************",
    messagingSenderId: "****************************",
    appId: "****************************",
  });

  const messaging = firebase.messaging();

  //background notifications will be received here
  messaging.setBackgroundMessageHandler((payload) =>
    console.log('payload', payload));
}
