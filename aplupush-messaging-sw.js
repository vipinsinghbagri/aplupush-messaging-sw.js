importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

// Initialize Aplu
const apluPushConfig = {
    apiKey: "AIzaSyDAOufIPPQHEFQC3EmF0qPyxmCwLIXzqjw",
	authDomain: "aplu-3.firebaseapp.com",
	projectId: "aplu-3",
	storageBucket: "aplu-3.firebasestorage.app",
	messagingSenderId: "548792538262",
	appId: "1:548792538262:web:9a7422a64e193118bfdeb7"
};

try {
    importScripts('https://push.aplu.io/import-aplu-messaging.js');
} catch (err) {
    console.warn("Couldn't load aplu-script, falling back: ", err);
}