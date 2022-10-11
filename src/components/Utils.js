export const getYearsOfExperience = () => {
    let firstDayAsDeveloper = new Date(2018, 11, 10);
    let diff = Date.now() - firstDayAsDeveloper;
    let msInAYear = 1000 * 60 * 60 * 24 * 7 * 52;
    let yearsSinceFirstDay = (new Date(diff).getTime() / msInAYear).toFixed(1);
    return yearsSinceFirstDay;
}