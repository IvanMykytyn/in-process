import { PromiseResponse } from 'models';
import { toast } from 'react-toastify';

const NotifyService = {
  success: (notifyText: string) => toast.success(notifyText),
  info: (notifyText: string) => toast.info(notifyText),
  warn: (notifyText: string) => toast.warn(notifyText),
  error: (notifyText: string) => toast.error(notifyText),
  default: (notifyText: string) => toast(notifyText),
  promise: (promise: PromiseResponse) => toast.promise(promise, promiseStatuses),
};

// TODO find out where store all messages 
const promiseStatuses = {
  pending: 'Promise is pending',
  success: 'Promise resolved 👌',
  error: 'Promise rejected 🤯',
};

export { NotifyService };
