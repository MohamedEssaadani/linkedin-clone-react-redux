// Material ui
import Avatar from "@mui/material/Avatar";

// Components

// Styles
import "../styles/HeaderOption.css";

function HeaderOption({ Icon, avatar, title, onClick }) {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" title={title} src={avatar} />
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
