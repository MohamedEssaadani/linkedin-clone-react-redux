// Redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
// Firebase
import { auth } from "./Firebase";
// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
// Pages
import Feed from "./pages/Feed";
import Login from "./pages/Login";
// Styles
import "./App.css";
import { useEffect } from "react";

function App() {
  // get user
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // listen to auth
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // user is logged in
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
      //user logged out
      else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
