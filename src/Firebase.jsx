  
  import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyBHFvdcmd0LUDktG4En6gZohtDxUiMhT1g",
    authDomain: "netflix-clone-aman.firebaseapp.com",
    projectId: "netflix-clone-aman",
    storageBucket: "netflix-clone-aman.appspot.com",
    messagingSenderId: "1024303521022",
    appId: "1:1024303521022:web:257e4d963b5775bd43d9af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const storage= firebaseApp.storage()
  const auth = firebaseApp.auth()
  const db  = firebaseApp.firestore()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider, storage }
  export default db