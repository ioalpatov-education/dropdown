const Dropdown = () => {
  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button data-id="toggle" className="btn">
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <ul data-id="dropdown" className="dropdown">
          <li className="active">
            <a href="#">Profile Information</a>
          </li>
          <li>
            <a href="#">Change Password</a>
          </li>
          <li>
            <a href="#">Become PRO</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
