import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../../services/hooks";
import { theme } from "../../styles/theme";
import Burger from "../Burger";
import MenuItem from "../MenuItem";

const Menu = ({ menuLink, isNew }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuItem open={open} setOpen={setOpen} menuLink={menuLink} isNew={isNew} />
      </div>
    </ThemeProvider>
  );
};

export default Menu;
