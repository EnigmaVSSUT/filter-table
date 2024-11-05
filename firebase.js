import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCl_2cEAoqNl71zrVcGpzg2od892e9ldOs",
  authDomain: "form-1ad71.firebaseapp.com",
  databaseURL: "https://form-1ad71-default-rtdb.firebaseio.com",
  projectId: "form-1ad71",
  storageBucket: "form-1ad71.appspot.com",
  messagingSenderId: "170808414710",
  appId: "1:170808414710:web:3143c0835792d8b51537d7",
  measurementId: "G-WVFWFXBHXV"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);