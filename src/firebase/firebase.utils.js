import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBdSUz4A1Uy4Zwx-sov3lWVZTFpUXjYNZM',
	authDomain: 'crwn-db-5f1c0.firebaseapp.com',
	databaseURL: 'https://crwn-db-5f1c0.firebaseio.com',
	projectId: 'crwn-db-5f1c0',
	storageBucket: 'crwn-db-5f1c0.appspot.com',
	messagingSenderId: '922577930957',
	appId: '1:922577930957:web:31997996d77f7f40f63784'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
