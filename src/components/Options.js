import { Option } from './Option';

const letters = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
}

export const Options = ({ question, setQuestion, optionsRef, cardFooterRef }) => {
    const { options, orderRandom } = question;

    return (
        <ul className="card__options" ref={optionsRef}>
            {options.map((option, i) => {
                return (
                    <Option key={options[orderRandom[i]].name} answerLetter={letters[i]} answerText={options[orderRandom[i]].name} question={question} setQuestion={setQuestion} optionsRef={optionsRef} cardFooterRef={cardFooterRef} />
                )
            })}
        </ul>
    );
}


