import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { ChangeEventHandler } from "react";
function MyInput({
  inputLabel,
  forId,
  helperText,
  onChangeHandler,
  type,
  req,
}: {
  inputLabel: string;
  forId: string;
  type: string;
  helperText: string;
  req: boolean;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <FormControl>
      <InputLabel htmlFor={forId}>{inputLabel}</InputLabel>
      <Input
        id={forId}
        aria-describedby="my-helper-text"
        type={type}
        onChange={onChangeHandler}
        required={req}
      />
      <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
    </FormControl>
  );
}

export default MyInput;
