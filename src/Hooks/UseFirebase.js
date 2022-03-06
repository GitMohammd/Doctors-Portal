import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const registerUser = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {
          })
          .catch((error) => {
            setAuthError(error.message);
          });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };
  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        const user = result.user;
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // observe user state

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user) {
          setUser(user);
        }
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unSubscribed;
  }, []);

  const loginUser = (email, password, navigate, location) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        setAuthError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logOutUser = (email, password) => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  return {
    user,
    loading,
    authError,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOutUser,
  };
};

export default UseFirebase;
