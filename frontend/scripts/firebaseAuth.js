const firebaseConfig = {
    apiKey: "AIzaSyAD9W_mAVCGQGJU-If9Lu5EgwUHV52rXwg",
    authDomain: "tripwise-a0e77.firebaseapp.com",
    projectId: "tripwise-a0e77",
    storageBucket: "tripwise-a0e77.firebasestorage.app",
    messagingSenderId: "241100806967",
    appId: "1:241100806967:web:b87aa8b89e5532c90fd8b2"
};

firebase.initializeApp(firebaseConfig);

const form = {
    emailRegister: document.getElementById('registerEmail'),
    passwordRegister: document.getElementById('registerPassword'),
    emailLogin: document.getElementById('loginEmail'),
    passwordLogin: document.getElementById('loginPassword'),
    btnAuthentication: document.getElementById('authentication'),
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        form.btnAuthentication.textContent = "Sair";
        form.btnAuthentication.onclick = logout;
    } else {
        form.btnAuthentication.textContent = "Entrar";
        form.btnAuthentication.onclick = () => {
            window.location.href = "../pages/login.html";
        };
    }
});

function register() {
    const email = form.emailRegister.value;
    const password = form.passwordRegister.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "../pages/index.html"
        })
        .catch((error) => {
            alert(`Erro no registro: ${error.message}`);
        });
}

function login() {
    const email = form.emailLogin.value;
    const password = form.passwordLogin.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login bem-sucedido:", userCredential.user);
            window.location.href = "../pages/index.html"
        })
        .catch((error) => {
            alert(`Erro ao fazer login: ${error.message}`);
        });
}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "../pages/login.html"
        })
        .catch(() => {
            alert("Erro ao fazer logout.");
        });
}