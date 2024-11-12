import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { redirect } from "react-router-dom";
import { auth, db } from "../firebase/config";

export const loadUser = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      },
      reject,
    );
  });
};

export const loadFoods = async () => {
  const foodsCollection = collection(db, "foods");
  const foodsSnapshot = await getDocs(foodsCollection);
  const foods = foodsSnapshot.docs.map((doc) => doc.data());

  return foods;
};

export const loadLogout = async () => {
  await signOut(auth);
  return redirect("/");
};
