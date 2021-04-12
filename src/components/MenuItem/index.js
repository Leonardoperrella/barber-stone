import { bool } from "prop-types";
import { StyledMenu } from "./styles";
const MenuItem = ({ open, menuLink }) => {
  return (
    <StyledMenu open={open}>
      {!!menuLink &&
        menuLink.map(({ href, content }, index) => (
          <a href={href} key={index}>
            {content}
          </a>
        ))}
    </StyledMenu>
  );
};
MenuItem.propTypes = {
  open: bool.isRequired,
};
export default MenuItem;
