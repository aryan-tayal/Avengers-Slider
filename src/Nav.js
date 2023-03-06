import characters from "./helper";
import NavButton from "./NavButton";

const Nav = ({ changePage, currentPage }) => {
  return (
    <div className="Nav">
      {characters.map((c, i) => (
        <NavButton
          key={i}
          index={i}
          active={currentPage === i}
          handleClick={() => changePage(i)}
        />
      ))}
    </div>
  );
};

export default Nav;
