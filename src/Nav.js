import characters from "./helper";

const Nav = () => {
  return (
    <div className="Nav">
      {characters.map((c, i) => (
        <button key={i}>Nav Button</button>
      ))}
    </div>
  );
};

export default Nav;
