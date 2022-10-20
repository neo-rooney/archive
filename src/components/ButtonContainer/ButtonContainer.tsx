import { Button, ButtonBaseProps } from "@mui/material";

interface CustomButtonProps {}
interface Props extends ButtonBaseProps, CustomButtonProps {}

const ButtonContainer = (props: Props) => {
  return <Button variant="contained">Hello world</Button>;
};

export default ButtonContainer;
