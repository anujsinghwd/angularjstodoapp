(function(){

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnrtI-mkCWhENEpsOdOONd8PYpw7EEWAA",
    authDomain: "startup-253ab.firebaseapp.com",
    databaseURL: "https://startup-253ab.firebaseio.com",
    storageBucket: "startup-253ab.appspot.com",
    messagingSenderId: "14402503172"
  };
  firebase.initializeApp(config);

  //Get Elements
  const txtemail = document.getElementById("usr");
  const txtpass = document.getElementById("pwd");
  const btn = document.getElementById("loginbtn");
  const loginbtn = document.getElementById("signin");
  const signupbtn = document.getElementById("signup");
  const signoutbtn = document.getElementById("SignOutbtn");
  const modal = document.getElementById("login");

  // Add Login Event
  loginbtn.addEventListener('click',e=>{
  	//Get Email and password fields
  	const email = txtemail.value;
  	const pass = txtpass.value;
  	const auth = firebase.auth();

  	//Sign In
  	const promise = auth.signInWithEmailAndPassword(email,pass);
  	promise.catch(e=>alert(e.message));

  });

  //Add SignUp Event

  signupbtn.addEventListener('click',e=>{
  	  	//Get Email and password fields
  	const email = txtemail.value;
  	const pass = txtpass.value;
  	const auth = firebase.auth();

  	//Sign Up
  	const promise = auth.createUserWithEmailAndPassword(email,pass);
  	promise.catch(e=>alert(e.message))
  });

  //Add a real time listener
  firebase.auth().onAuthStateChanged(firebaseuser=>{
  	if (firebaseuser) {
  		alert(firebase);
  		signoutbtn.classList.remove('hide');
  		btn.classList.add('hide')
  		modal.modal('hide');
  	;
  	}
  	else{
  		//alert('not logged in');
  		signoutbtn.classList.add('hide');
  	}
  });

  //SignOut Event
  signoutbtn.addEventListener('click',e=>{
  	firebase.auth().signOut();
  	btn.classList.remove('hide');
  })


}());
 
