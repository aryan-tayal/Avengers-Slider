import characters from "./helper";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <div className="Nav">
      {characters.map((c, i) => (
        <NavButton key={i} index={i} />
      ))}
    </div>
  );
};

export default Nav;
