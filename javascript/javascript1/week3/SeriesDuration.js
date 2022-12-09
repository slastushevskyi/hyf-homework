const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Breaking Bad",
      days: 4,
      hours: 23,
      minutes: 30,
    },
    {
      title: "House",
      days: 10,
      hours: 9,
      minutes: 18,
    },
  ];
const eightyYearsInDays = 80*365;
const onePercentInMinutes = ((eightyYearsInDays/100)*24)*60;
let allSeiesDuration = 0;
function logOutSeriesText() {
        for (let i = 0;i<seriesDurations.length; i++) {
        const ourSeriesDuration = ((seriesDurations[i].days*24)*60)+(seriesDurations[i].hours*60)+seriesDurations[i].minutes;
        const ourSeriesPercent = ourSeriesDuration / onePercentInMinutes;
        allSeiesDuration += ourSeriesPercent;
        console.log(`${seriesDurations[i].title} took ${ourSeriesPercent.toFixed(3)}% of my life`);
        }
        console.log(`In total that is ${allSeiesDuration.toFixed(3)}% of my life`)       
}
console.log(logOutSeriesText(seriesDurations));
