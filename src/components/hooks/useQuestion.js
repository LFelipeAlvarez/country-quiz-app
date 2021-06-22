import { useEffect, useState } from "react";
import { createOptions } from "../../helpers/createOptions";
import { getCountries } from "../../helpers/getCountries";

export const useQuestion = () => {
    const [question, setQuestion] = useState({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getCountries().then(countries => {
            const initialOptions = createOptions(0, countries);
            setQuestion({
                countries,
                options: initialOptions,
                correctAnswer: initialOptions[0].name,
                questionNumber: 1,
                isCorrect: true,
                orderRandom: [0, 1, 2, 3].sort(() => Math.random() - 0.5)
            });
            setLoader(false);
        });
    }, []);

    return {
        question,
        setQuestion,
        loader
    }

}
