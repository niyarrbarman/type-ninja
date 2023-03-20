export const countErrors = (actual: string, expected: string) => {
    const expectedCharacters = expected.split("");

    return expectedCharacters.reduce((errors, expectedChar, i) => {
        const actualChar = actual[i];
        if (actualChar !== expectedChar){
            errors++;
        }
        return errors;
    }, 0);
};

export const calcAccuracy = (errors: number, total: number) => {
    if (total > 0){
        const correct = total - errors;

        return Math.round((correct/total) * 100);
    }
    return 0;
};

