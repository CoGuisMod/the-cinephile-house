import { createContext, useContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const DataContext = createContext<any>({});

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState<any>(null);
  const [favorites, setFavorites] = useState<any>([]);
  const [watchLater, setWatchLater] = useState<any>([]);

  const [updateData, setUpdateData] = useState(false);
  const [message, setMessage] = useState("");

  const getUserData = async (email: string) => {
    const docuRef = doc(firebaseFirestore, "users", email);
    const initialData = await getDoc(docuRef);
    const finalData = initialData.data();

    setUserData(finalData);
  };

  const addToFavorites = async (email: string, favoritesList: any) => {
    const docuRef = doc(firebaseFirestore, "users", email);
    await updateDoc(docuRef, {
      favorites: favoritesList,
    });
  };

  const addToWatchLater = async (email: string, watchLaterList: any) => {
    const docuRef = doc(firebaseFirestore, "users", email);
    await updateDoc(docuRef, {
      watchLater: watchLaterList,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2500);
  }, [message]);

  return (
    <DataContext.Provider
      value={{
        /* Data */
        userData,
        setUserData,
        favorites,
        setFavorites,
        watchLater,
        setWatchLater,

        /* Functions */
        getUserData,
        addToFavorites,
        addToWatchLater,

        /* Utils */
        updateData,
        setUpdateData,
        message,
        setMessage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
