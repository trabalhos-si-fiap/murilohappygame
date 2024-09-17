import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export enum ToastPosition {
    TOP_LEFT = "top-left",
    TOP_CENTER = "top-center",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_CENTER = "bottom-center",
    BOTTOM_RIGHT = "bottom-right"
  }

export default function toastAlert(mensagem: string, tipo: string, toastPosition: ToastPosition=ToastPosition.TOP_CENTER, timer=5000) {
    switch (tipo) {
            
        case 'sucess':
            toast.success(mensagem, {
                position: toastPosition,
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        case 'info':
            toast.info(mensagem, {
                position: toastPosition,
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        case 'error':
            toast.error(mensagem, {
                position: toastPosition,
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        default:
            toast.info(mensagem, {
                position: toastPosition,
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;
    }
}