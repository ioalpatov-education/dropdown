import PropTypes from "prop-types";
import { useState } from "react";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ items }) => {
  const [activeItemIdx, setActiveItemIdx] = useState(undefined);

  const updateActiveItem = (itemIdx) => {
    setActiveItemIdx(itemIdx);
  };

  const dropdownItems = items.map((item, itemIdx) => {
    const isActive = itemIdx === activeItemIdx ? true : false;
    item = {
      ...item,
      isActive,
      itemIdx,
    };

    return (
      <DropdownItem
        key={itemIdx}
        item={item}
        updateActiveItem={updateActiveItem}
      />
    );
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
