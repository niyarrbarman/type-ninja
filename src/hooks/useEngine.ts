import { useCallback, useDeferredValue, useEffect, useState } from "react";
import { start } from "repl";
import { countErrors } from "../utils/helpers";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";
import useWords from "./useWords";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 50;
const COUNTDOWN_SECONDS = 30;
const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const {words, updateWords} = useWords(NUMBER_OF_WORDS);
    const {timeLeft, startCountdown, resetCountdown} = useCountdownTimer(COUNTDOWN_SECONDS);
    const {typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useTypings(state != "finish");
    const [errors, setErrors] = useState(0);

    const isStarting = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;
    const typedWords = 0;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    useEffect(() => {
        if (isStarting){
            setState("run");
            startCountdown();
        }
    },[isStarting, startCountdown, cursor]);

    useEffect(() => {
        if (!timeLeft){
            console.log("Time up...");
            setState("finish");
            sumErrors();
        }
    },[timeLeft, sumErrors]);

    useEffect(() => {
        if (areWordsFinished){
            sumErrors();
            updateWords();
            clearTyped();
        }
    }, [areWordsFinished, cursor, sumErrors, updateWords, clearTyped, typed, words])

    const restart = useCallback(() => {
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped();
    },[clearTyped, updateWords, resetCountdown, resetTotalTyped]);


    return {state, words, timeLeft, typed, errors, totalTyped, restart};
};

export default useEngine;