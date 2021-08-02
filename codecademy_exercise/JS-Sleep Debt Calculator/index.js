let getSleepHours = day => {
    if (day === 'monday') {
        return 8
    } else if (day === 'tuesday') {
        return 8
    } else if (day === 'wednesday') {
        return 8
    } else if (day === 'thursday') {
        return 8
    } else if (day === 'friday') {
        return 8
    } else if (day === 'saturday') {
        return 8
    }
    if (day === 'sunday') {
        return 9
    }
}
console.log(getSleepHours('tuesday'));

const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(`ActualSleep : ${getActualSleepHours()}`)
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};
console.log(`IdealSleep : ${getIdealSleepHours()}`);
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('Perfect amount of sleep~');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('Sleep too much!');
    } else {
        console.log('Get some rest~');
    }
};
calculateSleepDebt()