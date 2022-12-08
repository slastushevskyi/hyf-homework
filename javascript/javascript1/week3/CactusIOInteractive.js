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

function showStatus(array) {
    let x = 0;
    let i;
    let n;
    if (array.length>0){
        for (i = 0; i<array.length; i++) {
            x += array[i].duration
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


// // Improved SHOWSTATUS that showing a number of actitivies for that specific day.
// activities.push({date:"11/8/2022", activity:"Coding", duration:600});
// activities.push({date:"11/8/2022", activity:"Solving troubles", duration:60});
// activities.push({date:"10/8/2022", activity:"Reading doc-tion", duration:160});
// function showStatus(array, activityDate) {
//     // activityDate = toString(activityDate); I need to find a way how to transform activityDate to string, so user could put date as a number.
//     let x = 0;
//     let i;
//     if (array.length>0) {
//         for (i = 0; i<array.length; i++) {
//             x += array[i].duration
//             if (activityDate === array[i].date) {
//                 console.log(array[i])
//             }
//         }
//         console.log(`You have added ${i} activities. They amount to ${x} min. of usage`);
//     }
//     else {
//         console.log(`Add some activities before calling showStatus`)
//     }
// }
// showStatus(activities, "11/8/2022");



function calcActivicties(array) {
        if (array[0].duration > array[1].duration) {
            if (array[0].duration > array[2].duration) {
            console.log(array[0])
            }
        }
        else if (array[0].duration > array[2].duration) {
            if (array[0].duration > array[1].duration)
            console.log(array[0])
        }
        else if (array[1].duration > array[0].duration) {
            if (array[1].duration > array[2].duration)
            console.log(array[1])
        }
        else if (array[1].duration > array[2].duration) {
            if (array[1].duration > array[0].duration)
            console.log(array[1])
        }
        else if (array[2].duration > array[0].duration) {
            if (array[2].duration > array[1].duration)
            console.log(array[1])
        }
        else if (array[2].duration > array[1].duration) {
            if (array[2].duration > array[0].duration)
            console.log(array[1])
        }
}
calcActivicties(activities);

