import PropTypes from "prop-types";

const DropdownItem = ({ item, updateActiveItem }) => {
  const { text, link, isActive, itemIdx } = item;

  const liStyles = {
    color: isActive ? "#5380f7" : "#666",
  };

  const handleClick = () => {
    updateActiveItem(itemIdx);
  };

  return (
    <li style={liStyles} onClick={handleClick}>
      <a href={link}>{text}</a>
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    itemIdx: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  updateActiveItem: PropTypes.func.isRequired,
};

export default DropdownItem;
