import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

export const RoomPage = () => {
    const searchParams = useSearchParams()[0];
    const name = searchParams.get("name");

    useEffect(() => {
       
    
    }, [name])
    return (
        <div>room page </div>
    )
}