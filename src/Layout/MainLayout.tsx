import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


import ScrollToTop from "../scrollToTop";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function MainLayout() {

  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (currentUser) {
        setCurrentUser(user);  
      } else {
        setCurrentUser(null);  
      }
    });

    return () => unsubscribe();
  }, [currentUser]);


  return (
    <>
      <ScrollToTop />
      <NavBar user={currentUser} />
      <Outlet />
      <Footer />
    </>
  );
}
