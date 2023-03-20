import { useRef } from "react";
import { MdRefresh } from "react-icons/md"

const RestartButton = ({
    onRestart: handleRestart,
    className = "",
} : {
    onRestart: () => void;
    className?: string;
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick = () => {
        buttonRef.current?.blur();
        handleRestart();
    };
    return (
        <center><button 
        ref = {buttonRef} 
        onClick={handleClick} 
        className={'my-12 block rounded px-8 py-2 hover:bg-zinc-700/50 ${className}'}
        >
            <MdRefresh className = "w-6 h-6 text-zinc-300"/>
            
        </button></center>
        
    );

}; 

export default RestartButton;
