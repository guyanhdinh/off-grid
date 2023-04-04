import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBgDT4ucaugGdVvaFRbk5THPB-dMuOnzdA",
  authDomain: "vanlife-8a3b3.firebaseapp.com",
  projectId: "vanlife-8a3b3",
  storageBucket: "vanlife-8a3b3.appspot.com",
  messagingSenderId: "417280834471",
  appId: "1:417280834471:web:817405410d438a09b79482",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const homesCollectionRef = collection(db, "stays");

// Homes Functions //

export async function getAllHomes() {
  const querySnapshot = await getDocs(homesCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getHome(id) {
  const docRef = doc(db, "stays", id);
  const staySnapshot = await getDoc(docRef);
  return {
    ...staySnapshot.data(),
    id: staySnapshot.id,
  };
}

export async function getHostHomes() {
  const q = query(homesCollectionRef, where("stayID", "==", "111"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
