import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const LoginInputField = [
  {
    id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    endIcon: <></>,
    endIconSwap: <></>,
    autoFocus: true,
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    endIcon: <VisibilityIcon />,
    endIconSwap: <VisibilityOffIcon />,
    autoFocus: false,
  },
];
