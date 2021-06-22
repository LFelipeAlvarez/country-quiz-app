import { useRef } from "react";

export const Option = ({ answerLetter, answerText, question, setQuestion, optionsRef, cardFooterRef }) => {

    const selectedOptionRef = useRef();
    const correctOptionRef = useRef();
    const { selectedOption, correctAnswer } = question;
    const chooseOption = () => {
        if (![...optionsRef.current.children].find(e => e.classList.contains('card__option--selected'))) {
            setQuestion({//Evitar que seleccione mas de un option.
                ...question,
                selectedOption: answerText,

            });

            setTimeout(() => {
                correctOptionRef.current = [...optionsRef.current.children].find(e => e.textContent.slice(1, e.textContent.length) === correctAnswer);//Asigna en el dom la respuesta correcta.
                selectedOptionRef.current.classList.add('card__option--incorrect');
                correctOptionRef.current.classList.add('card__option--correct');
                cardFooterRef.current.classList.remove('card__footer--hide');
            }, 1000);
        }
    }
    return (
        selectedOption === answerText//Activar el option seleccionado.
            ? <li className="card__option card__option--selected" onClick={chooseOption} ref={selectedOptionRef}>
                <span className="card__span">{answerLetter}</span>
                {answerText}
            </li >
            : <li className="card__option" onClick={chooseOption}>
                <span className="card__span">{answerLetter}</span>
                {answerText}
            </li >
    )
}
