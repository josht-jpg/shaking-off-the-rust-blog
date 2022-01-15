import Button from "./Button";

interface DeleteButtonProps {
  type: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ type, action }) => (
  <Button
    type={type}
    action={action}
    style={{
      width: "235px",
      color: "rgb(235, 87, 87)",
      boxShadow: "rgb(235, 87, 87) 0 0 4px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  />
);

export default DeleteButton;
