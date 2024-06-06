"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkri887xYKnGSqWns8D9WhXpSFVT4za6c",
  authDomain: "vue-retail-d4596.firebaseapp.com",
  projectId: "vue-retail-d4596",
  storageBucket: "vue-retail-d4596.appspot.com",
  messagingSenderId: "1021402413119",
  appId: "1:1021402413119:web:c3e6c7da859871d913a08a"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
//# sourceMappingURL=firebaseConfig.dev.js.map
