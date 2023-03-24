import DropdownList from "./DropdownList";

const Dropdown = () => {
  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button data-id="toggle" className="btn">
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>

        <DropdownList />
      </div>
    </div>
  );
};

export default Dropdown;
