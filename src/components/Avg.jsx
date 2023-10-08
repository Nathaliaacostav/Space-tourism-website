import PropTypes from "prop-types";

export default function Avg({ title, body }) {
  return (
    <div>
      <h4>{title}</h4>
      <h3>{body}</h3>
    </div>
  );
}
Avg.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
