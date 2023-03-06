const NavButton = ({ index, handleClick, active }) => (
  <button
    className={`NavButton ${active && "active"}`}
    onClick={handleClick}
  ></button>
);

export default NavButton;
