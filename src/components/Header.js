// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
// Firebase
import { auth } from "../Firebase";
// Material icons
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

// import custom components
import HeaderOption from "./HeaderOption";

// import styles
import "../styles/Header.css";

function Header() {
  // get user
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1647254557~hmac=53ea276286633b693c8b7bd4c818a8e0"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        {user && (
          <HeaderOption onClick={logoutApp} avatar={user.photoUrl} title="me" />
        )}
      </div>
    </div>
  );
}

export default Header;
