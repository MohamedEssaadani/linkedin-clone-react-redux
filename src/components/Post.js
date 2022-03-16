import { forwardRef } from "react";
// Material ui
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Avatar } from "@mui/material";

// Styles
import "../styles/Post.css";

// Components
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, body, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{body}</p>
      </div>

      <div className="post__reactions">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color={"gray"}
        />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color={"gray"} />
        <InputOption Icon={SendOutlinedIcon} title="Share" color={"gray"} />
        <InputOption Icon={ShareOutlinedIcon} title="Send" color={"gray"} />
      </div>
    </div>
  );
});

export default Post;
