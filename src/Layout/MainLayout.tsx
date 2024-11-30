import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollToTop from "../scrollToTop";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function MainLayout() {

  const [currentUser, setCurrentUser] = useState(null); // Default to null instead of empty string

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);  // Set the user if logged in
      } else {
        setCurrentUser(null);  // Set to null if not logged in
      }
    });

    return () => unsubscribe(); // Clean up listener on component unmount
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <ScrollToTop />
      <NavBar user={currentUser} />
      <Outlet />
      <Footer />
    </>
  );
}
