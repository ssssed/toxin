export const useNumeralForm = (value: number, wordForms: string[]) => {
    const [initial, singular, few, plural] = wordForms;
    if (value === 1) {
        return `${value} ${initial}`;
    } else if (value % 10 === 1 && value !== 11) {
        return `${value} ${singular}`;
    } else if (value % 10 >= 2 && value % 10 <= 4 && (value < 10 || value > 20)) {
        return `${value} ${few}`;
    } else {
        return `${value} ${plural}`;
    }
};
