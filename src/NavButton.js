const NavButton = ({ index, handleClick, active }) => (
  <button className="NavButton" onClick={handleClick}>
    {index}{active && "Current"}
  </button>
);

export default NavButton;
