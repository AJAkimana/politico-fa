import { toast } from 'react-toastify';

export const Notifier = {
  error(message) {
    toast.error(message);
  },
  info(message) {
    toast.info(message);
  },
  success(message) {
    toast.success(message);
  }
};
