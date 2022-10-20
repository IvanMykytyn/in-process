import { ToastContainer } from 'react-toastify';
import './toastify-container.styles.scss';

export const ToastifyContainer = () => (
  <ToastContainer position="bottom-right" autoClose={3000} />
);
