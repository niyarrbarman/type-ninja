import {motion} from "framer-motion";
import {State} from "../hooks/useEngine"

const Results = ({
    state,
    errors,
    accuracy,
    total,
    className,
}:{
    state: State,
    errors: number,
    accuracy: number,
    total: number,
    className?: string,
}) => {

    const initial = {opacity: 0};
    const animate = {opacity: 1};
    const duration = {duration: 0.3};

    if (state != "finish"){
        return null;
    }

    return (
        <motion.ul className={"flex flex-col items-center ${className}"}>
            <motion.li className="text-xl font-semibold my-3 text-zinc-300 underline underline-offset-4" initial={initial}
            animate={animate}
            transition={{...duration, delay:0}}>
                Results
            </motion.li>
            <motion.li className="text-rose-500"
            initial={initial}
            animate={animate}
            transition={{...duration, delay:0.5}}>
                Errors: {errors}
            </motion.li>
            <motion.li className="text-primary-500"
            initial={initial}
            animate={animate}
            transition={{...duration, delay:1}}>
                Accuracy: {accuracy}%
            </motion.li>
            <motion.li className="text-teal-500"
            initial={initial}
            animate={animate}
            transition={{...duration, delay:1.5}}>
                Characters: {total}
            </motion.li>
            <motion.li className="text-teal-500"
            initial={initial}
            animate={animate}
            transition={{...duration, delay:2}}>
                <div className='mt-12 mb-3'>
      <h1 className='text-zinc-300 text-center'><a className='font-bold italic' href="https://github.com/niyarrbarman/type-ninja">github.com/@niyarrbarman</a></h1>
    </div>
            </motion.li>
            
        </motion.ul>
    )

};

export default Results;