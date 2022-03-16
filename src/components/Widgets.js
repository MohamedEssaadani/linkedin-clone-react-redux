// Material ui
import InfoIcon from "@mui/icons-material/Info";
import { Avatar } from "@mui/material";
// Styles
import "../styles/Widgets.css";

function Widgets() {
  const feedItem = (avatar, name, description) => (
    <div className="widgets__feedItem">
      {avatar && <Avatar className="widgets__feedItemAvatar" src={avatar} />}
      <div className="widgets__feedItemContent">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>

      {feedItem(
        "https://avatars.githubusercontent.com/u/66553496?v=4",
        "Reda Sakout",
        "contact@redasakout.com"
      )}
      {feedItem(
        "https://avatars.githubusercontent.com/u/66553496?v=4",
        "Reda Sakout",
        "contact@redasakout.com"
      )}
      {feedItem(
        "https://avatars.githubusercontent.com/u/66553496?v=4",
        "Reda Sakout",
        "contact@redasakout.com"
      )}
      {feedItem(
        "https://avatars.githubusercontent.com/u/66553496?v=4",
        "Reda Sakout",
        "contact@redasakout.com"
      )}
    </div>
  );
}

export default Widgets;
