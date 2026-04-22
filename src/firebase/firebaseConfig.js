import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "digital-document-manager-e479c.firebaseapp.com",
    databaseURL: "https://digital-document-manager-e479c-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "digital-document-manager-e479c",
    storageBucket: "digital-document-manager-e479c.appspot.com",
    messagingSenderId: "490354549566",
    appId: "1:490354549566:web:380fc94ad5286b2772026f"
};

// Initialize Firebase ONLY ONCE
const app = initializeApp(firebaseConfig);

// Export services
export const storage = getStorage(app);
export const database = getDatabase(app);