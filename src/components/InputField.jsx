import { TextField } from "@mui/material";

const InputField = ({
  label,
  name,
  type,
  register,
  error,
  InputProps,
  placeholder,
}) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder ? placeholder.toUpperCase() : ""}
      label={label ? label.toUpperCase() : ""}
      type={type}
      {...register(name)}
      error={!!error}
      helperText={error ? error.message : ""}
      margin="normal"
      slotProps={{
        input: {
          ...InputProps,
        },
      }}
      variant="standard"
      sx={{
        "& .MuiInput-underline:before": {
          borderBottom: "1px solid #ccc",
        },
        "& .MuiInput-underline:hover:before": {
          borderBottom: "2px solid #00796b",
        },
        "& .MuiInput-underline:after": {
          borderBottom: "2px solid #00796b",
        },

        "& .MuiInputBase-root.Mui-focused": {
          backgroundColor: "#f5f5f5",
        },
        "& .MuiInputBase-input": {
          padding: 1,
        },
        "& .MuiFormLabel-root": {
          color: "#888888",
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: "#888888",
        },
        "& .MuiFormLabel-root.Mui-error": {
          color: "#888888",
        },
      }}
    />
  );
};

export default InputField;
