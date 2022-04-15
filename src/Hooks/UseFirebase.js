import {
    createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";

initializeFirebase();



const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('')
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);


  const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        saveUser(email, name, 'POST');
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
        
        setAuthError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };


  const loginUser = (email, password, navigate, location) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        setAuthError("");
      })
      .catch((error) => {
        
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };


  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // observe user state


  

     useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

   useEffect(() => {
        fetch(`https://fierce-dusk-81451.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
            .catch(error => (console.log(error)));
    }, [user.email])

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


  const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      const url = 'https://fierce-dusk-81451.herokuapp.com/user';
      fetch(url, { 
        method: method,
      headers:  {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
      })
      .then()
  }


  return {
    user,
    admin,
    token,
    loading,
    authError,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOutUser,
  };
};

export default UseFirebase;
