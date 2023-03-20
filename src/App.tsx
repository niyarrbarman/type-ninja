import RestartButton from './components/RestartButton'; 
import Results from './components/Results';
import Typed from './components/Typed';
import useEngine from './hooks/useEngine';
import { calcAccuracy } from './utils/helpers';



const GeneratedWords = ({words} : {words: string,}) => {
  return <div className="text-slate-500">{words}</div>
};

const App = () => {

  const {state, words, timeLeft, typed, errors, totalTyped, restart } = useEngine();

  return (
    <>
    <Logo/>
    <div className='md:mt-20'>
    <CountdownTimer timeleft={timeLeft}/>
    <WordContainer>
      <GeneratedWords words={words}/>
      <Typed words = {words} userInput={typed}/>
    </WordContainer>
    <RestartButton className={'mx-auto mt-10 text-slate-500'} onRestart={restart} />
    <Results state={state} errors={errors} accuracy={calcAccuracy(errors,totalTyped)} total={totalTyped}/>
    </div>
    
    
    </>
  ) 
};

const WordContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative max-w-4xl mt-3 lg:text-2xl md:text-2xl sm:text-lg leading-relaxed break-all">
      {children}
    </div>
  );
};

const CountdownTimer = ({timeleft} : {timeleft:number}) => {
  return <h2 className="text-lg text-zinc-200 text-center my-12">{timeleft}</h2>
};

const Logo = () => {
  const logo = require('./utils/image.png');
  return <div className='grid place-items-center mt-20'>
   <img className = "object-scale-down h-10 w-5" alt='logo' style={{ width: 100 }} src={String(logo)}/> <h1 className='sm:text-lg text-xl text-zinc-300 mt-3'>Type Ninja</h1>
  </div>
};

export default App;
