// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3r3a2IAWg_L2SSRFealyr_UkDV8Oaexw",
  authDomain: "quiz-app-d4490.firebaseapp.com",
  projectId: "quiz-app-d4490",
  storageBucket: "quiz-app-d4490.appspot.com",
  messagingSenderId: "638873788947",
  appId: "1:638873788947:web:b1fd777542a217a6c415e6",
  measurementId: "G-WDYCM27P8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);