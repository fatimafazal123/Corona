import{getAuth , auth , createUserWithEmailAndPassword } from "./firebase.js"

var sign = document.getElementById("signup")
const reg = ()=>{
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
   console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });




     
}



sign.addEventListener("click",reg)