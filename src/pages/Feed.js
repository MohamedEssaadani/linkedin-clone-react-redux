// Styles
import "../styles/Feed.css";
import InputOption from "../components/InputOption";
// Material ui
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import firebase from "firebase/compat/app";
// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import FlipMove from "react-flip-move";

function Feed() {
  // get user infos
  const user = useSelector(selectUser);

  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]);

  // get posts from firebase
  useEffect(() => {
    // onSnapShot => realtime connection to firebase db, realtime listener will give us the posts in realtime in each command to posts
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        )
      );
  }, []);

  // send new post
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      body: postBody,
      photoUrl: user.photoUrl | "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // clear
    setPostBody("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        {/* <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH2YTrMOKOfpw/profile-displayphoto-shrink_800_800/0/1615727011938?e=1652918400&v=beta&t=mtp8-Neh6gC84eU9C9xyA5CZ6paH1pimw-v5T0PihE4" /> */}

        <div className="feed__input">
          <form>
            <input
              type="text"
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              placeholder="Start a post"
            />

            <button
              className="feed__inputButton"
              type="submit"
              onClick={sendPost}
            >
              send
            </button>
          </form>
        </div>

        {/*  */}
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#71B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#80C15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>
      {/*  */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, body, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            body={body}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
