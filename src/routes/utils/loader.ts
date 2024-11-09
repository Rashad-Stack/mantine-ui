import { onAuthStateChanged } from "firebase/auth";
import { User } from "../../../types";
import auth from "../../firebase/config";

export const loadUser = async () => {
  return await new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      resolve(currentUser);
      unsubscribe();
    });
  });
};
