import { auth } from "../Firebase";
// Styles
import { useState } from "react";
import "../styles/Login.css";
// redux
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  // form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, SetPassword] = useState("");

  const dispatch = useDispatch();

  // functions
  const register = (e) => {
    e.preventDefault();

    if (!fullName) return alert("Please enter your name!");

    // register the user to firebase with email & pass
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fullName,
            photoURL: photoUrl,
          })
          // dispatch user to redux stpre
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    });
  };

  return (
    <div className="login">
      <img
        src="https://www.rfgenealogie.com/sites/rfg/files/medias/dossiers/linkedin.png"
        alt=""
      />

      <form>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full Name (required if registering)"
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          type="text"
          placeholder="Profile Photo Url"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
