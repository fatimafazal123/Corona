
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyB7nFhDEVe0IXSgiQCpxCXU3PuudfRGg1A",
  authDomain: "hack-fd301.firebaseapp.com",
  projectId: "hack-fd301",
  storageBucket: "hack-fd301.firebasestorage.app",
  messagingSenderId: "947065562810",
  appId: "1:947065562810:web:2792a5eaf04568bd6b4483"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{getAuth, auth , createUserWithEmailAndPassword}



