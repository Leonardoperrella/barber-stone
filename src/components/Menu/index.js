import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../../hooks";
import { theme } from "../../theme";
import Burger from "../Burger";
import MenuItem from "../MenuItem";

const Menu = ({ menuLink }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuItem open={open} setOpen={setOpen} menuLink={menuLink} />
      </div>
    </ThemeProvider>
  );
};

export default Menu;
