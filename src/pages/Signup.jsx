import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Typography, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import InputField from "../components/InputField";
import Button from "../components/Button";

import useBreakpoints from "../hooks/useBreakpoints";

import signupSchema from "../validations/signupSchema";
import CustomLink from "../components/CustomLink";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { isMobile, isTablet } = useBreakpoints();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    navigate("/");
  };

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const inputBoxWrapperStyles = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: isMobile ? 2 : 3,
    mt: 2,
    flexDirection: isMobile ? "column" : "row",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e0f2f1",
      }}
    >
      <Box
        width="100%"
        maxWidth={isMobile ? "350px" : isTablet ? "600px" : "700px"}
        borderRadius={3}
        mt={6}
        boxShadow={5}
        sx={{
          maxHeight: "80vh",
          overflowY: "auto",
          backgroundColor: "#ffffff",

          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              backgroundColor: "#00796b",
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" textAlign="center" color="#ffffff">
              Create new Account
            </Typography>
          </Box>
          <Box sx={{ paddingInline: 4 }}>
            <Box sx={inputBoxWrapperStyles}>
              <InputField
                placeholder="Name"
                label="Name"
                name="name"
                type="text"
                register={register}
                error={errors.name}
              />

              <InputField
                placeholder="Username"
                label="Username"
                name="username"
                type="text"
                register={register}
                error={errors.username}
              />
            </Box>
            <Box sx={inputBoxWrapperStyles}>
              <InputField
                placeholder="Email"
                label="Email"
                name="email"
                type="email"
                register={register}
                error={errors.email}
              />

              <InputField
                placeholder="Phone No."
                label="Phone No."
                name="phone"
                type="text"
                register={register}
                error={errors.phone}
              />
            </Box>
            <Box sx={inputBoxWrapperStyles}>
              <InputField
                placeholder="New Password"
                label="New Password"
                name="password"
                type={showPassword ? "text" : "password"}
                register={register}
                error={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <InputField
                placeholder="Confirm Password"
                label="Confirm Password"
                name="confirm"
                type={showConfirm ? "text" : "password"}
                register={register}
                error={errors.confirm}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleConfirm}>
                        {showConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: isMobile || isTablet ? "center" : "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                sx={{ width: "250px", borderRadius: "10px" }}
              >
                SIGN UP
              </Button>
            </Box>
          </Box>
          <Typography textAlign="center" mt={2} mb={1}>
            Already have an account?
            <CustomLink onClick={handleNavigate}>Login</CustomLink>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
