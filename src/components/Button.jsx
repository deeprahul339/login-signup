import { Button as MuiButton } from "@mui/material";

const Button = ({ children, onClick, type, sx = {}, ...rest }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "#00796b",
        color: "#fff",
        textTransform: "none",
        fontWeight: 500,
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#00695c",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

// Function to choose a similar light hover color based on the given bgColor
function lightenHoverColor(color) {
  const hoverColors = {
    "#00796b": "#00695c",
    "#0288d1": "#0277bd",
    "#c62828": "#b71c1c",
    "#2e7d32": "#1b5e20",
    "#1976d2": "#1565c0",
  };

  return hoverColors[color] || "#00695c";
}

export default Button;
