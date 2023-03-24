import PropTypes from "prop-types";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ items }) => {
  const dropdownItems = items.map((item, itemIdx) => {
    return <DropdownItem key={itemIdx} item={item} />;
  });
  return (
    <ul data-id="dropdown" className="dropdown">
      {dropdownItems}
    </ul>
  );
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
