import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Notify = async (text,isError) =>{
    if(isError)
    {
        toast.error(text,{
            position:"top-right",
            autoClose:3000,
            hideProgressBar:true,
            newestOnTop:false,
            closeOnClick:true,
            rtl:false,
            pauseOnFocusLoss:true,
            draggable : false,
            pauseOnHover:true,
        });
    }
    else
    {
        toast.success(text,
        {
            position:"top-right",
            autoClose:3000,
            hideProgressBar:true,
            newestOnTop:false,
            closeOnClick:true,
            rtl:false,
            pauseOnFocusLoss:true,
            draggable : false,
            pauseOnHover:true,
        });
    }

}