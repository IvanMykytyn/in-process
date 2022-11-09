import { AxiosRes } from 'models';
import { Id, toast, TypeOptions } from 'react-toastify';

const NotifyService = {
  success: (notifyText: string) => toast.success(notifyText),
  info: (notifyText: string) => toast.info(notifyText),
  warn: (notifyText: string) => toast.warn(notifyText),
  error: (notifyText: string) => toast.error(notifyText),
  default: (notifyText: string) => toast(notifyText),
  promise: (promise: AxiosRes<any>) =>
    toast.promise(promise, promiseStatuses),
  loading: (notifyText?: string): Id =>
    toast.loading(notifyText ?? 'Please wait...'),
  update: (id: Id, message: string, type: TypeOptions) =>
    toast.update(id, { render: message, type, isLoading: false }),
};

// TODO find out where store all messages
// toast.promise(promise, {
//   pending: `${promise.then((res) => res.data.firstName)}`,
// }),

const promiseStatuses = {
  pending: 'Promise is pending',
  success: 'Promise resolved 👌',
  error: 'Promise rejected 🤯',
};

export { NotifyService };
