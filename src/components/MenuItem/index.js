import { bool } from "prop-types";
import { StyledMenu } from "./styles";
import { Link } from "react-scroll";

const MenuItem = ({ open, menuLink, isNew }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const outherKey = menuLink.length;

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <StyledMenu open={open}>
      {!!menuLink &&
        menuLink.map(({ content, to, anchor }, index) => {
          if (anchor) {
            return (
              <Link key={index} activeClass="active" to={to} smooth={true}>
                {content}
              </Link>
            );
          } else {
            return (
              <>
                {!(isNew && to === "/barbearias") && (
                  <a key={index} href={to}>
                    {content}
                  </a>
                )}
              </>
            );
          }
        })}
      {token && (
        <a key={outherKey} onClick={handleLogOut} href="/entrar">
          LogOut
        </a>
      )}
    </StyledMenu>
  );
};
MenuItem.propTypes = {
  open: bool.isRequired,
};
export default MenuItem;
