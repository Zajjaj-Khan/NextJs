import {CheckCircledIcon} from "@radix-ui/react-icons";


interface FormSuccessProps {
    message?: string;

};

export const FormSuccess = ({
    message
}: FormSuccessProps) =>{

    if(!message){
        return null;
    }

    return (
        <div className="bg-emerald-500/15 p-4 flex items-center gap-x-2 text-emerald text-sm rounded-md w-full mt-3">
            <CheckCircledIcon className="w-4 h-4"/>
            {message}
        </div>
    )
}