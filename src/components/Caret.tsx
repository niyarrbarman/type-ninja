import {easeIn, motion} from "framer-motion";

const Caret = () => {
    return (
        <motion.div
        aria-hidden={true}
        className="inline-block bg-primary-500 w-2 h-4"
        initial = {{opacity: 0.9}}
        animate = {{opacity: 0.3}}
        exit = {{opacity: 1}}
        transition = {{repeat: Infinity, duration:0.7, ease:"easeIn"}}
        
        />
    );
};

export default Caret;