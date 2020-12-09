importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyB3OOZFXGVDXDP7kMhFcMMaX2cX9Jh2wkk",
  authDomain: "pfe-pwa-frontend.firebaseapp.com",
  projectId: "pfe-pwa-frontend",
  storageBucket: "pfe-pwa-frontend.appspot.com",
  messagingSenderId: "432995216958",
  appId: "1:432995216958:web:c3538611f696ad5f4a2b6f",
  measurementId: "G-N64K1DDZ38",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler((payload) => {
  console.log("background", payload);
  return self.ServiceWorkerRegistration.showNotification(payload);
});
