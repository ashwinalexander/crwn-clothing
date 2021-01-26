import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCy1gm5o1EiRS_TdFtVvUJywqfxiwKAgXo",
	authDomain: "crwn-db-4fbd9.firebaseapp.com",
	projectId: "crwn-db-4fbd9",
	storageBucket: "crwn-db-4fbd9.appspot.com",
	messagingSenderId: "884192299689",
	appId: "1:884192299689:web:39e5bda32411499435f7b8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
