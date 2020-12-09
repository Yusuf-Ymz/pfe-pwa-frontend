importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBTuPxWP530fsNAhScPZvnLsELdCYO2rog",
    authDomain: "pfe-pwa-app.firebaseapp.com",
    projectId: "pfe-pwa-app",
    storageBucket: "pfe-pwa-app.appspot.com",
    messagingSenderId: "898186041708",
    appId: "1:898186041708:web:e2c2f2b782a3a51e673b49",
    measurementId: "G-PEFNQZ70KE"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
