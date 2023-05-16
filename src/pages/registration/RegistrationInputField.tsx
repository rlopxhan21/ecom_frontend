import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const RegistrationInputField = [
  {
    id: "full_name",
    name: "full_name",
    label: "Full Name",
    type: "text",
    endIcon: <></>,
    endIconSwap: <></>,
    autoFocus: true,
  },
  {
    id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    endIcon: <></>,
    endIconSwap: <></>,
    autoFocus: false,
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
  {
    id: "password2",
    name: "password2",
    label: "Confirm Password",
    type: "password",
    endIcon: <VisibilityIcon />,
    endIconSwap: <VisibilityOffIcon />,
    autoFocus: false,
  },
];
