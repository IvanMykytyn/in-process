import { AxiosRes } from 'models';
import { Id, toast, TypeOptions } from 'react-toastify';
interface PromiseStatuses {
  pending: string;
  success: string;
  error: string;
}

const defaultLoadingText = 'Please wait...';

const NotifyService = {
  success: (notifyText: string) => toast.success(notifyText),
  info: (notifyText: string) => toast.info(notifyText),
  warn: (notifyText: string) => toast.warn(notifyText),
  error: (notifyText: string) => toast.error(notifyText),
  default: (notifyText: string) => toast(notifyText),
  loading: (notifyText: string = defaultLoadingText): Id =>
    toast.loading(notifyText),
  update: (id: Id, message: string, type: TypeOptions) =>
    toast.update(id, { render: message, type, isLoading: false, autoClose: 3000 }),

  promise: (
    promise: AxiosRes<any>,
    promiseStatuses: PromiseStatuses = defaultStatuses
  ) => toast.promise(promise, promiseStatuses),
};

const defaultStatuses = {
  pending: 'Wait...',
  success: 'All Done',
  error: 'Error! Try Again Later',
};

export { NotifyService };
