import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8aex6OPIMJlJP1MEaxtALRpgIPi1idwA',
  authDomain: 'house-marketplace-app-633fd.firebaseapp.com',
  projectId: 'house-marketplace-app-633fd',
  storageBucket: 'house-marketplace-app-633fd.appspot.com',
  messagingSenderId: '209457836510',
  appId: '1:209457836510:web:130e045c8152b80484ad4f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
