import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const ResetPasswordConfirmationInputField = [
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
