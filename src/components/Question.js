import { useEffect, useRef } from 'react';
import img from '../assets/img/undraw_adventure_4hum 1.svg';
import { createOptions } from '../helpers/createOptions';
import { Options } from "./Options";

export const Question = ({ question, setQuestion }) => {
    const cardFooterRef = useRef();
    const optionsRef = useRef();

    const { countries, options, correctAnswer, selectedOption, questionNumber } = question;

    useEffect(() => {
        cardFooterRef.current?.classList.add('card__footer--hide');
    });

    const nextQuestion = () => {
        const newOptions = createOptions(questionNumber, countries);
        [...optionsRef.current.children].forEach(e => e.className = 'card__option');
        setQuestion({
            ...question,
            options: newOptions,
            questionNumber: questionNumber + 1,
            correctAnswer: newOptions[0].name,
            orderRandom: [0, 1, 2, 3].sort(() => Math.random() - 0.5),
            selectedOption: undefined,
            isCorrect: correctAnswer === selectedOption
        });
    }

    return (
        Object.keys(question).length !== 0 &&
        <article className="card">
            <div className="card__header">
                <img src={img} alt="question" className="card__img" />
                {questionNumber % 2 !== 0 || options[0].capital === ''//Antartida no tiene capital
                    ? <h2 className="card__title card__title--flag"><img src={options[0].flag} alt="flag" className="card__flag" /> <span className="card__question">Which country does this flag belong to?</span></h2>
                    : <h2 className="card__title"><span className="card__question">{options[0].capital} is the capital of</span></h2>}
            </div>
            <div className="card__body">
                <Options question={question} setQuestion={setQuestion} optionsRef={optionsRef} cardFooterRef={cardFooterRef} />
            </div>
            <div className="card__footer" ref={cardFooterRef}>
                <button className="card__button" onClick={nextQuestion}>Next</button>
            </div>
        </article>
    )
}
