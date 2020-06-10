import {useState} from "react";

export function useToggle(dIsOpen)
{
    const [isOpen, setIsOpen] = useState(dIsOpen)

    const handleToggle = () => setIsOpen(!isOpen)

    return(
    
        {isOpen,
            handleToggle}
        
    )
}

