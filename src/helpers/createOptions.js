export const createOptions = (index, countries) => {
    const options = [];
    options[0] = countries[index];//Correct answer.

    if (index < 4) {
        options[1] = countries[index + 1];
        options[2] = countries[index + 2];
        options[3] = countries[index + 3];
    } else {
        options[1] = countries[index - 1];
        options[2] = countries[index - 2];
        options[3] = countries[index - 3];
    }

    return options;
}
