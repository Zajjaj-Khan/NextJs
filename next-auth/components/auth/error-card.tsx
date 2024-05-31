import { Header } from "./header";
import { BackButton } from "./back-button";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from "@/components/ui/card"

export const ErrorCard = () =>{
    return (
        <Card>
            <CardHeader>
            <Header label="Oops! Something went wrong!"/>
            </CardHeader>
            <CardFooter>
                <BackButton
                label="Back to Login"
                href="/auth/login"
                />
            </CardFooter>
        </Card>
    )
}