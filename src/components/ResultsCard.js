import resultsImg from "../assets/img/undraw_winners_ao2o 2.svg";
import { createOptions } from "../helpers/createOptions";
export const ResultsCard = ({ questionNumber, question, setQuestion }) => {

    const { countries } = question;

    const again = () => {
        const initialOptions = createOptions(0, countries);
        setQuestion({
            ...question,
            options: initialOptions,
            correctAnswer: initialOptions[0].name,
            questionNumber: 1,
            isCorrect: true,
            orderRandom: [0, 1, 2, 3].sort(() => Math.random() - 0.5)
        });
    }

    return (
        <article className="card card--results">
            <div className="card__header card__header--results">
                <img src={resultsImg} alt="flag" className="card__results" />
            </div>
            <div className="card__body">
                <h2 className="card__title card__title--results">Results</h2>
                <p className="card__p">You got <span className="card__span card__span--results">{questionNumber - 2}</span>{(questionNumber - 2) === 1 ? ' correct answer' : ' correct answers'} </p>
            </div>
            <div className="card__footer">
                <button className="card__button card__button--results" onClick={again}>Try again</button>
            </div>
        </article>
    )
}
