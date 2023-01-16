import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth, firebaseFirestore } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    setDoc(doc(firebaseFirestore, "users", email), {
      favorites: [],
      watchLater: [],
    });
  };

  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(firebaseAuth);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
