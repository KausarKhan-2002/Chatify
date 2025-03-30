import toast from "react-hot-toast";
import validator from "validator";

export const useValidator = () => {
  return (userInfo, check) => {
    const { username, email, password, confirmPassword, bio } = userInfo;

    if (check === "login") {
      if (!validator.isEmail(email)) {
        toast.error("Please enter a valid email address.");
        return true;
      }

      if (!validator.isStrongPassword(password)) {
        toast.error(
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return true;
      }
    }

    if (check === "all") {
      if (username.length < 4) {
        toast.error("Username must be at least 4 characters long.");
        return true;
      }

      if (!validator.isEmail(email)) {
        toast.error("Please enter a valid email address.");
        return true;
      }

      if (!validator.isStrongPassword(password)) {
        toast.error(
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return true;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match. Please try again.");
        return true;
      }

      if (bio.length < 10) {
        toast.error("Bio must be at least 10 characters long.");
        return true;
      }
    }

    if (check === "next") {
      if (username.length < 4) {
        toast.error("Username must be at least 4 characters long.");
        return true;
      }

      if (!validator.isEmail(email)) {
        toast.error("Please enter a valid email address.");
        return true;
      }
    }
  };
};
