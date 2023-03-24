import PropTypes from "prop-types";

const DropdownItem = ({ item }) => {
  const { text, link } = item;
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default DropdownItem;
