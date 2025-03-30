const inputStyle =
  "mt-2 px-4 py-2 w-full rounded-xl border border-white/30 bg-white/30 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-md";

export const formInputs = [
  {
    type: "text",
    name: "username",
    placeholder: "Enter username",
    label: "Username",
    inputStyle,
  },
  {
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    label: "Email",
    inputStyle,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    label: "Password",
    inputStyle,
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter your confirm password",
    label: "Confirm password",
    inputStyle,
  },
  {
    type: "text",
    name: "bio",
    placeholder: "Write your bio...",
    label: "Bio",
    inputStyle,
  },
];
