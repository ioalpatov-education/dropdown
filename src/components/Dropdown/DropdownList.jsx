import PropTypes from "prop-types";

const DropdownList = ({ items }) => {
  return <ul data-id="dropdown" className="dropdown"></ul>;
};

DropdownList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default DropdownList;
