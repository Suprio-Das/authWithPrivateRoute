import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log("Curretly Logged in User: ", currentUser)
            }
            else {
                setUser(null);
            }

            return () => {
                unSubscribe();
            }
        })
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * Step -1 : Create context. e.g. export const AuthContext = createContext(null); Set null as default value
 * Step -2 : Then Create AuthContext Provider in the return of the component. E.g. <AuthContext.Provider value={set any values}></AuthContext.Provider>
 * Wrap the components wants to share the context. E.g. 
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

* Access the component inside the context component as children.
* Now, use the context by useContext hook. E.g. const authInfo = useContext(AuthContext);
*/