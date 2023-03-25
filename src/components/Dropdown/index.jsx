import PropTypes from "prop-types";
import { useState } from "react";
import DropdownList from "./DropdownList";

const Dropdown = ({ text, items }) => {
  const [isShowList, setIsShowList] = useState(false);

  const toggleDropdown = () => {
    setIsShowList(!isShowList);
  };

  const list = isShowList ? <DropdownList items={items} /> : null;

  const wrapperClasses = isShowList
    ? "dropdown-wrapper open"
    : "dropdown-wrapper";

  return (
    <div className="container">
      <div data-id="wrapper" className={wrapperClasses}>
        <button data-id="toggle" className="btn" onClick={toggleDropdown}>
          <span>{text}</span>
          <i className="material-icons">public</i>
        </button>

        {list}
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
