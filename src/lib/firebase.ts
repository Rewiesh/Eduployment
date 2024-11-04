// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';
import { getAuth, Auth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCppQVWfJPU23NuiBbRnn1QHfZwogBOT-o',
	authDomain: 'eduployment-ad249.firebaseapp.com',
	databaseURL: 'https://eduployment-ad249-default-rtdb.firebaseio.com',
	projectId: 'eduployment-ad249',
	storageBucket: 'eduployment-ad249.firebasestorage.app',
	messagingSenderId: '940867101479',
	appId: '1:940867101479:web:2fde0a3e11c2cd846aff02',
	measurementId: 'G-S5K53SQKF0'
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services with TypeScript typing
export const database: Database = getDatabase(app);
export const auth: Auth = getAuth(app);
