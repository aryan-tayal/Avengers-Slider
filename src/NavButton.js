const NavButton = ({ index, handleClick, active }) => (
  <button
    className={`NavButton ${active && "active"}`}
    onClick={handleClick}
    aria-label="Slide Toggle Button"
    aria-pressed={active}
  ></button>
);

export default NavButton;
