import { bool } from "prop-types";
import { StyledMenu } from "./styles";
import { Link } from "react-scroll";
const MenuItem = ({ open, menuLink }) => {
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
              <a href={to} key={index}>
                {content}
              </a>
            );
          }
        })}
    </StyledMenu>
  );
};
MenuItem.propTypes = {
  open: bool.isRequired,
};
export default MenuItem;
