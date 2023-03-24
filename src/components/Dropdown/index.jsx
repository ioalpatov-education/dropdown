import PropTypes from "prop-types";
import DropdownList from "./DropdownList";

const Dropdown = ({ text, items }) => {
  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button data-id="toggle" className="btn">
          <span>{text}</span>
          <i className="material-icons">public</i>
        </button>

        <DropdownList items={items} />
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Dropdown;
