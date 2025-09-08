import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Link } from "@mui/material";

import InputField from "../components/InputField";
import Button from "../components/Button";

import useBreakpoints from "../hooks/useBreakpoints";

import loginSchema from "../validations/loginSchema";
import CustomLink from "../components/CustomLink";

const Login = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoints();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/signup");
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
        maxWidth={isMobile ? "350px" : isTablet ? "400px" : "700px"}
        borderRadius={3}
        mt={6}
        boxShadow={5}
        sx={{
          maxHeight: "90vh",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" textAlign="center" color="#ffffff">
                Login
              </Typography>
              <Typography
                variant="title"
                textAlign="center"
                mb={2}
                color="#ffffff"
              >
                Sign in to continue
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingInline: 4 }}>
            <InputField
              label="Username"
              name="username"
              type="text"
              register={register}
              error={errors.username}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                type="submit"
                sx={{ width: "100px", borderRadius: "10px" }}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Typography textAlign="center" mt={2} mb={1}>
            Don't have an account?
            <CustomLink onClick={handleNavigate}>Signup</CustomLink>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
