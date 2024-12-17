import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

export const fetchUsers = async () => {
  try {
    console.log(firebaseConfig);
    const usersCollection = collection(firestoreDB, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const users = usersSnapshot.docs.map(doc => doc.data());
    return users;
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
};

export default fetchUsers;