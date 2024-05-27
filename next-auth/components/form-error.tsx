import { ExclamationTriangleIcon} from "@radix-ui/react-icons";


interface FormErrorProps {
    message?: string;

};

export const FormError = ({
    message
}: FormErrorProps) =>{

    if(!message){
        return null;
    }

    return (
        <div className="bg-destructive/15 p-4 flex items-center gap-x-2 text-destructive text-sm rounded-md w-full mt-3">
            <ExclamationTriangleIcon className="w-4 h-4"/>
            {message}
        </div>
    )
}