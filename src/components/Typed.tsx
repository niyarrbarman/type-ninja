import Caret from "./Caret";
import cn from "classnames";

const Typed = ({
    userInput,
    words,
} : {
    userInput : string;
    words: string;
}) => {
    const typedCharacters = userInput.split("");
    return(
        <div className="absolute inset-0">
            {typedCharacters.map((char,index) => {
                return (
                <Character 
                key={'${char}_${index}'} 
                actual={char} 
                expected = {words[index]}
                />);
            })}
            <Caret/>
        </div>
    )
};

const Character = ({actual, expected}:{actual:string, expected: string,}) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";
    return <span 
    className={cn({
        "text-rose-500": !isCorrect && !isWhiteSpace,
        "text-primary-500": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,       
    })}>
        {expected}
    </span>
};

export default Typed;