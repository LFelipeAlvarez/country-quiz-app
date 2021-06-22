export const getCountries = async () => {
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();
        return data.sort(() => Math.random() - 0.5);
    } catch (error) {
        console.warn(error);
        alert('error: ' + error);
    }
}
