import { useNavigate } from "react-router-dom";

import { Link as MuiLink } from "@mui/material";

const CustomLink = ({ to, children, sx = {}, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (to) {
      navigate(to);
    }
  };

  const defaultStyles = {
    color: "#00796b",
    fontWeight: "bold",
    textDecoration: "underline",
    mb: "5px",
    ml: "3px",
    "&:hover": {
      cursor: "pointer",
    },
  };

  return (
    <MuiLink
      variant="body2"
      component="button"
      onClick={handleClick}
      sx={{ ...defaultStyles, ...sx }}
    >
      {children}
    </MuiLink>
  );
};

export default CustomLink;
