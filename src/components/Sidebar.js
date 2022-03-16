// Redux
import { selectUser } from "../features/userSlice";

// Material ui
import { Avatar } from "@mui/material";
// Components

// Styles
import "../styles/Sidebar.css";
import { useSelector } from "react-redux";

function Sidebar() {
  // get authenticated user infos
  const user = useSelector(selectUser);

  // recent item
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">76</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">666</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React Js")}
        {recentItem("React Native")}
        {recentItem("Vue Js")}
        {recentItem("Angular")}
        {recentItem("Spring")}
      </div>
    </div>
  );
}

export default Sidebar;
