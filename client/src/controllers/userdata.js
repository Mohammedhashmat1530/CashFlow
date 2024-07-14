import { useUser } from "@clerk/clerk-react";

export const userData = () => {
    const {user} = useUser();
    return user
}