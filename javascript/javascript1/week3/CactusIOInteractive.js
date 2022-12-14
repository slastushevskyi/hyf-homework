const activities =[];
const emptyArray = [];
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today  = new Date();
const oneActivity = [{ date:today.toLocaleDateString("en-US"), activity: 'Youtube', duration: 30 }]
function addActivity(activity, duration) {
    if (isNaN(duration) || duration === "") {
        console.log("Please put a valid duration")
    }
    else {
        return activities.push({date:today.toLocaleDateString("en-US"), activity:activity, duration:duration})
    }
}
addActivity("Youtube", 30);
addActivity("Movie", 170);
addActivity("Talking with parents", 45);

function showStatus(array,activityDate) {
    let x = 0;
    let i;
    let n;
    if (array.length>0){
        for (i = 0; i<array.length; i++) {
            x += array[i].duration
                if (activityDate === array[i].date) {
                console.log(array[i])
            }
        }
        console.log(`You have added ${i} activities. They amount to ${x} min. of usage`);
        if (x > 60) {
            console.log(`You have reached your limit, no more smartphoning for you!`)
        }
        else if (x < 60) {
            n = 60 - x;
            console.log(`You have ${n} minutes left of today's activity`)
        }
    }
    else {
        console.log(`Add some activities before calling showStatus`)
    }
}
activities.push({date:"11/8/2022", activity:"Coding", duration:600});
activities.push({date:"11/8/2022", activity:"Solving troubles", duration:60});
activities.push({date:"10/8/2022", activity:"Reading doc-tion", duration:160});
showStatus(activities, "11/8/2022");

function calcActivities(array) {
const allDurations = array.map(object => {
    return object.duration;
});
console.log(allDurations);
const maxActivity = Math.max(...allDurations);
console.log(maxActivity); 
}
calcActivities(activities);
