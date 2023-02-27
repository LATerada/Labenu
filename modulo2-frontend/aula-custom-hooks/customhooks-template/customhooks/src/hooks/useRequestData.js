import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function useRequestData (path, initialState){
    const [data,setData] = useState(initialState);
    const [isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(path)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error.response)
                setError(true)
            })
    }, [path])
    return [ data ,isLoading, error ]
}