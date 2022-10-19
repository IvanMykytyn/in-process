import { toast } from 'react-toastify';

const NotifyService = {
  success: (notifyText: string) => toast.success(notifyText),
  info: (notifyText: string) => toast.info(notifyText),
  warn: (notifyText: string) => toast.warn(notifyText),
  error: (notifyText: string) => toast.error(notifyText),
  default: (notifyText: string) => toast(notifyText),
};

export { NotifyService };
