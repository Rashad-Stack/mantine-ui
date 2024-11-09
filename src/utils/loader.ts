import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { User } from "../../types";
import { auth, db } from "../firebase/config";

export const loadUser = async () => {
  return await new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      resolve(currentUser);
      unsubscribe();
    });
  });
};

export const loadBooks = async () => {
  const booksCollection = collection(db, "books");
  const booksSnapshot = await getDocs(booksCollection);
  const books = booksSnapshot.docs.map((doc) => doc.data());

  return books;
};
