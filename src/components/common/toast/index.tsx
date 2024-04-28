import { Toast, ToastBody } from "reactstrap";

interface ToastProps {
  isOpen: boolean;
  message: string;
  color: string;
}

const ToastComponent = ({ isOpen, message, color }: ToastProps) => {
  return (
    <Toast
      className={`${color} text-white fixed-top ms-auto mt-3`}
      isOpen={isOpen}
    >
      <ToastBody className="text-center">{message}</ToastBody>
    </Toast>
  );
};

export default ToastComponent;
