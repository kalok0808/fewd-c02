let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const age = 17;
if (early && age > 18) {
    raceNumber += 1000;
}
if (early && age > 18) {
    console.log(`You will race at 9:30 am.Your no is ${raceNumber}.`);
} else if (!early && age > 18) {
    console.log(`Late adults run at 12:30 am.Your no is ${raceNumber}.`);
} else if (early && age < 18) {
    console.log(`Late adults run at 11:00 am.Your no is ${raceNumber}.`);
}