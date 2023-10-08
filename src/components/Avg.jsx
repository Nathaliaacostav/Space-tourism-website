import "../sass/Avg/Avg.scss";
import PropTypes from "prop-types";

export default function Avg({ title, body }) {
  return (
    <div>
      <h4 className="title">{title}</h4>
      <h3 className="body">{body}</h3>
    </div>
  );
}
Avg.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
