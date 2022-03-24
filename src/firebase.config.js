import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAz0l2xE9oSrsn6RGtKj2Cp7po6uVBcCxo',
	authDomain: 'house-marketplace-app-b3f40.firebaseapp.com',
	projectId: 'house-marketplace-app-b3f40',
	storageBucket: 'house-marketplace-app-b3f40.appspot.com',
	messagingSenderId: '170218426997',
	appId: '1:170218426997:web:6e131c8a9f33c05a109e3c',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
