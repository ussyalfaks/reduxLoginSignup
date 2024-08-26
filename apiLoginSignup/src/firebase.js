// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace with your Firebase project's configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD6p17WxZXrU3BbQD9gapRpJCA1qN85v-s',
    authDomain: 'worklogin-93f85.firebaseapp.com',
    projectId: 'worklogin-93f85',
    storageBucket: 'worklogin-93f85.appspot.com',
    messagingSenderId: '123456789012',
    appId: '1:123456789012:web:abcdef123456',
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
