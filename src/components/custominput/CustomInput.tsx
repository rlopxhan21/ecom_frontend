import React from "react";
import { useController, useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { InputAdornment, TextFieldProps } from "@mui/material";

interface Props extends Omit<TextFieldProps, "name" | "label" | "type"> {
  id: string;
  name: string;
  label: string;
  type: string;
  endIcon: JSX.Element;
  endIconSwap: JSX.Element;
  autoFocus: boolean;
}

export const CustomInput: React.FC<Props> = ({
  name,
  type,
  endIcon,
  endIconSwap,
  ...rest
}) => {
  const { control, formState } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  if (type === "password") {
    if (showPassword) {
      type = "text";
    } else {
      type = "password";
    }
  }

  return (
    <FormControl>
      <TextField
        type={type}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => setShowPassword((prevState) => !prevState)}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {showPassword ? endIconSwap : endIcon}
            </InputAdornment>
          ),
        }}
        {...field}
        {...rest}
        error={!!formState.errors[name]}
        helperText={fieldState.error?.message}
      />
    </FormControl>
  );
};
