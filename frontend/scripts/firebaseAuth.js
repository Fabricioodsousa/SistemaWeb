const firebaseConfig = {
  apiKey: "AIzaSyAD9W_mAVCGQGJU-If9Lu5EgwUHV52rXwg",
  authDomain: "tripwise-a0e77.firebaseapp.com",
  projectId: "tripwise-a0e77",
  storageBucket: "tripwise-a0e77.firebasestorage.app",
  messagingSenderId: "241100806967",
  appId: "1:241100806967:web:b87aa8b89e5532c90fd8b2"
};

firebase.initializeApp(firebaseConfig);

function register() {
    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        window.location.href = "../pages/index.html";
    }).catch(error => {
        alert(error);
    })
}

const form = {
    email: () => document.getElementById('registerEmail'),
    password: () => document.getElementById('registerPassword'),
    btnAuthentication: () => document.getElementById('authentication')
}