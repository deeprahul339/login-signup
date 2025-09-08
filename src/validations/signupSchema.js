import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z ]+$/, "Only alphabets are allowed"),
  
  username: yup
    .string()
    .required("Username is required")
    .test(
      "username-valid",
      "Username must contain letters, numbers, and special characters",
      function (value) {
        if (!value) return true; 
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])[A-Za-z\d!@#\$%\^\&*\)\(+=._-]+$/;
        return regex.test(value);
      }
    ),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .test(
      "email-valid",
      "Only Google Gmail addresses are allowed",
      function (value) {
        if (!value) return true; 
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(value);
      }
    ),

  phone: yup
    .string()
    .required("Phone number is required")
    .test(
      "phone-valid",
      "Invalid phone number with country code(use +)",
      function (value) {
        if (!value) return true; 
        const regex = /^\+\d{1,3}\d{10,14}$/;
        return regex.test(value);
      }
    ),

  password: yup
    .string()
    .required("Password is required")
    .test(
      "password-valid",
      "Password must contain letters, numbers, and special characters",
      function (value) {
        if (!value) return true; 
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])[A-Za-z\d!@#\$%\^\&*\)\(+=._-]+$/;
        return regex.test(value);
      }
    )
    .test(
      "password-check",
      "Username and password cannot be same",
      function (value) {
        const { username } = this.parent;
        if (!username || !value) return true;
        return username !== value;
      }
    ),

  confirm: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default signupSchema;
