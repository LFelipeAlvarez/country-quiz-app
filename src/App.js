import './App.css';
import { Footer } from './components/Footer';
import { useQuestion } from './components/hooks/useQuestion';
import { Loader } from './components/Loader';
import { Question } from './components/Question';
import { ResultsCard } from './components/ResultsCard';

const App = () => {

  const { question, setQuestion, loader } = useQuestion();
  const { questionNumber, isCorrect } = question;

  return (
    loader
      ? <Loader />
      : <>
        <main className="main">
          <h1 className="main__title">COUNTRY QUIZ</h1>
          {!isCorrect || questionNumber > 248
            ? <ResultsCard questionNumber={questionNumber} question={question} setQuestion={setQuestion} />
            : <Question question={question} setQuestion={setQuestion} />}
        </main>
        <Footer />
      </>
  );
}

export default App;
