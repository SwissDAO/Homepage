import React from "react"
import { Box } from "@chakra-ui/react"
import MenuIcon from "./menuIcon";
import CloseIcon from "./closeIcon";

const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  };

export default MenuToggle;